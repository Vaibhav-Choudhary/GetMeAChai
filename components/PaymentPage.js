"use client"

import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchpayments, fetchuser, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    const { data: session } = useSession();

    useEffect(()=>{
        getData()
    },[]);

    const [paymentForm, setPaymentForm] = useState({
        name: '',
        message: '',
        amount: ''
    });

   

    // Handle input changes for the payment form
    const handleChange = (e) => {
        setPaymentForm({
            ...paymentForm,
            [e.target.name]: e.target.value // Dynamically update form fields based on the name attribute
        });
    };

    const pay = async (amount) => {
        // Get orderId
        let a = await initiate(amount, username, paymentForm);
        let orderId = a.id;

        var options = {
            "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", // Your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo", // Your business logo
            "order_id": orderId, // This is the sample Order ID. Pass the id obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razorpay`,
            "prefill": {
                "name": paymentForm.name, // Prefilled with form name input
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" // Prefilled customer contact information
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    const [currentUser, setcurrentUser] = useState({});
    const [payments,setPayments]= useState([]);

    const getData = async (params) => {
        let u =await fetchuser(username);
        setcurrentUser(u);
        let dbpayments = await fetchpayments(username);
        setPayments(dbpayments);
        console.log(u,dbpayments);
    }   



    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full bg-red-50 relative'>
                <img
                    className='object-cover w-full h-[350px]'
                    src={`${currentUser.coverpic}`}
                    alt=''
                />
                <div className='absolute -bottom-20 right-[45%] border-2 border-white rounded-full'>
                    <img className='rounded-full' width={150} height={150} src={`${currentUser.profilepic}`}></img>
                </div>
            </div>

            <div className='info flex justify-center items-center py-24 flex-col'>
                <div className='font-bold text-lg'>
                    @{username}
                </div>

                <div>
                    Let's help {username} get a chai!
                </div>

                <div>
                    {payments.length} Payments -  {currentUser.name} has raised Rs.{payments.reduce((a,b)=>a+b.amount,0)}
                </div>

                <div className='payment flex gap-3 w-[80%] mx-auto mt-11'>
                    <div className='supporters w-1/2 bg-slate-900 rounded-lg text-white p-10'>
                        <h2 className='text-center text-2xl font-bold my-5'> Supporters </h2>
                        {payments.length==0 && <div>No Supporters yet</div>}
                        <ul>
    {payments.map((p) => {
        return (
            <li key={p.oid} className='my-2 flex gap-2 items-center'>
                <img src='/user.png' width={20} height={12} alt='' />
                <div className='flex-1'>
                    <div className='font-bold'>{p.name} Donated {p.amount}</div>
                    <div className='text-gray-500 truncate'>
                        "{p.message}"
                    </div>
                </div>
            </li>
        );
    })}
</ul>

                    </div>

                    <div className='make-payments w-1/2 bg-slate-900 rounded-lg text-white p-10'>
                        <h2 className='text-2xl font-bold my-5 text-center'>Make Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            {/* Input for name and messages */}
                            <input
                                type='text'
                                name='name'
                                id='name'
                                value={paymentForm.name}
                                onChange={handleChange}
                                className='w-full p-3 rounded-lg bg-slate-800'
                                placeholder='Enter Name'
                            />
                            <input
                                type='text'
                                name='message'
                                id='message'
                                value={paymentForm.message}
                                onChange={handleChange}
                                className='w-full p-3 rounded-lg bg-slate-800'
                                placeholder='Enter Message'
                            />
                            <input
                                type='text'
                                name='amount'
                                id='amount'
                                value={paymentForm.amount}
                                onChange={handleChange}
                                className='w-full p-3 rounded-lg bg-slate-800'
                                placeholder='Enter Amount'
                            />

                            <button
                                className='text-white bg-gradient-to-br from-purple-900 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center disabled:from-slate-600 disabled:to-slate-800'
                                disabled={!paymentForm.name || paymentForm.name.length < 3 || 
                                    !paymentForm.message || paymentForm.message.length < 4 || paymentForm.amount < 1}  onClick={() => pay(paymentForm.amount)}
                            >
                                Pay
                            </button>

                            <div className='flex gap-2 mt-5'>
                                <button
                                    className='bg-slate-800 p-3 rounded-lg hover:outline'
                                    onClick={() => pay(1000)}
                                >
                                    Pay Rs. 10
                                </button>
                                <button
                                    className='bg-slate-800 p-3 rounded-lg hover:outline'
                                    onClick={() => pay(2000)}
                                >
                                    Pay Rs. 20
                                </button>
                                <button
                                    className='bg-slate-800 p-3 rounded-lg hover:outline'
                                    onClick={() => pay(3000)}
                                >
                                    Pay Rs. 30
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
