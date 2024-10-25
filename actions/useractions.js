"use server"
import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/dB/connectDB"
import User from "@/models/User"

export const initiate = async (amount, to_username , paymentform) =>{
    await connectDB();
    var instance = new Razorpay({ key_id:process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

    instance.orders.create({
    amount: 5000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
        key1: "value3",
        key2: "value2"
    }
    })

    let options = {
        amount : Number.parseInt(amount),
        currency:"INR",


    }

    let x = await instance.orders.create(options);
    
    //create a payment object which hows a pending payment
    await Payment.create({oid:x.id, amount:amount, to_username:to_username, name:paymentform.name, message:paymentform.message});

    return x;
}

export const fetchuser = async (username) => {
    await connectDB();

    let u = await User.findOne({ username: username });

    if (!u) {
        return { error: `User with username '${username}' not found` };
    }

    let user = u.toObject({ flattenObjectIds: true });
    return user;
}


export const fetchpayments = async (username) => {
    await connectDB();
    let payments = await Payment.find({ to_user: username,done:true}).sort({ amount: -1 }).limit(10).lean();
    
    if (!payments || payments.length === 0) {
        return []; // Return an empty array if no payments are found
    }
     
    // Convert MongoDB ObjectId to string
    return payments.map(payment => ({
        ...payment,
        _id: payment._id.toString(), // Convert ObjectId to string
        createdAt: payment.createdAt.toISOString(), // Convert dates to string
        updatedAt: payment.updatedAt.toISOString(),
    }));
};

export const updateProfile = async (data, oldusername, oldemail) => {
    await connectDB();
    let ndata = Object.fromEntries(data); // Convert form data to an object
    //console.log(ndata);

    // New username from the incoming data
    let newusername = ndata.username;

    // Check if the new username already exists in the database
    const existingUser = await User.findOne({ username: newusername });

    if (existingUser && existingUser.username !== oldusername) {
        // If the username already exists and is not the old username, return an error
        return { error: 'Username already taken' };
    }

    // Prepare the update object, keeping the old username and email intact
    let updateData = {
        username: oldusername, // Ensure old username is preserved
        email: oldemail,       // Keep the old email intact
    };

    // Add other fields to update if they exist in ndata
    if (ndata.name) updateData.name = ndata.name; // Update name if provided
    if (ndata.coverpic) updateData.coverpic = ndata.coverpic; // Update cover pic URL if provided
    if (ndata.profilepic) updateData.profilepic = ndata.profilepic; // Update profile pic URL if provided
    if (ndata.razorpayid) updateData.razorpayid = ndata.razorpayid; // Update Razorpay ID if provided
    if (ndata.razorpaysecret) updateData.razorpaysecret = ndata.razorpaysecret; // Update Razorpay secret if provided

    // Update the user profile with the new data
    await User.updateOne({ username: oldusername }, { $set: updateData });
    await Payment.updateMany({to_user:oldusername},{to_user:ndata.newusername}); 

    return { error: 0 }; // No errors
};

