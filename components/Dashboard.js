"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect,useState } from 'react'
import { fetchuser , updateProfile } from '@/actions/useractions';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';


const Dashboard = () => {
    const {data:session , update}=useSession();
    const router = useRouter();
    const [form,setForm]= useState({});

    useEffect(() => {
      if (session) {
        getData(); // Call getData only after session exists
      } else {
        router.push('/login');
      }
    }, [router, session]);

    const getData = async () =>{
      let u = await fetchuser(session.user.name);
      setForm(u);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit =async (e)=>{
        let a = await updateProfile(e,session.user.name);
        toast('Profile Updated' , {position:"top-right",
          autoClose:5000,
          hideProgressBar:false,
          closeOnClick:true,
          pauseOnFocusLoss:true,
          draggabl:true,
          pauseOnHover:true,
          theme: "dark",
          transition: Bounce,});

    }
    

  return (
    <>
    <ToastContainer  >
      
    </ToastContainer>
    <div className='container mx-auto py-5'>
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome To Your Dashboard</h1>

        <form className='max-w-2xl mx-auto' action={handleSubmit}>


                    {/* name */}
                    <div className="p-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                     </label>
                     <input
                       value={form.name ? form.name : ""}
                       onChange={handleChange}
                       type="text"
                       name="name"
                       id="name"
                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs 
                                  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                     </div>

                    {/* Email */}
                    <div className="p-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                     </label>
                     <input
                       value={form.email ? form.email : ""}
                       onChange={handleChange}
                       type="text"
                       name="email"
                       id="email"
                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs 
                                  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                     </div>

                    {/*Username */ }
                    <div className="p-2">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Username
                     </label>
                     <input
                       value={form.username ? form.username : ""}
                       onChange={handleChange}
                       type="text"
                       name="username"
                       id="username"
                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs 
                                  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                     </div>

                    {/*Image Url */}
                    <div className="p-2">
                    <label htmlFor="coverpic " className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Cover Picture Url
                     </label>
                     <input
                       value={form.coverpic? form.coverpic: ""}
                       onChange={handleChange}
                       type="text"
                       name="coverpic" 
                       id="coverpic" 
                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs 
                                  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                     </div>

                     <div className="p-2">
                    <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Profile Picture Url
                     </label>
                     <input
                       value={form.profilepic ? form.profilepic : ""}
                       onChange={handleChange}
                       type="text"
                       name="profilepic"
                       id="profilepic"
                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs 
                                  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                     </div>



                    {/*Razor Id*/}
                    <div className="p-2">
                    <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Razorpay Id
                     </label>
                     <input
                       value={form.razorpayid ? form.razorpayid : ""}
                       onChange={handleChange}
                       type="text"
                       name="razorpayid"
                       id="razorpayid"
                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs 
                                  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                     </div>

                     {/*Razor Secret*/}
                    <div className="p-2">
                    <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Razorpay Secret
                     </label>
                     <input
                       value={form.razorpaysecret ? form.razorpaysecret : ""}
                       onChange={handleChange}
                       type="text"
                       name="razorpaysecret"
                       id="razorpaysecret"
                       className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs 
                                  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     />
                     </div>

                    <button type='submit'  className='my-8 w-full  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center '>
                        Save
                    </button>


    </form>
    </div>
    </>
  )
}

export default Dashboard
