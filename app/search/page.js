"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState,useEffect } from 'react';


const search = () => {

    const router=useRouter();
    const [search,setSearch]=useState("");
    const onChangeHandler = (e) =>{
        setSearch(e.target.value);
    }

    const handleKeyPress = (e)=>{
        if(e.key == 'Enter'){
            handleSearch();
        }
    }

    const handleSearch = ()=>{
        router.push(`/${search}`);
    }
   

  return (
    <div className='w-full flex flex-col py-16 items-center justify-center'>
        <h1 className='text-2xl font-bold text-center'>Seach Your Fav Creator</h1>
        <div className='font-bold flex gap-4 items-baseline text-3xl my-16 md:text-4xl '>
        Buy Me a Chai{" "}
        <img className='rounded-full'src='/Tea.png' width={40} alt=''></img>
        </div>
        {/* Search Area */}
        <div className='relative w-[60%] flex flex-col justify-center items-center '>  
        <input className='absolute w-full py-2 px-2 rounded-xl bg-slate-300 text-black font-semibold' onKeyDown={handleKeyPress}  value={search} onChange={onChangeHandler} name='search' id='search' type='text' placeholder='Enter the username to search . . .'>
        
        </input>
        
        <img onClick={handleSearch} className='absolute right-0' src='/srch.png' width={35}></img>
        </div>
    </div>
  )
}

export default search
