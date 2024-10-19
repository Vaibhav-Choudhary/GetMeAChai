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
    let payments = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean();
    
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