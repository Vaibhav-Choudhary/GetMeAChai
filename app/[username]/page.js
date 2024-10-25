import PaymentPage from '@/components/PaymentPage';
import React from 'react';
import User from '@/models/User';

const username = async ({ params }) => {
  
  let u = await User.findOne({username:params.username});
  if(!u){
    return (<div className='text-center py-8'>ERROR 404 : User not found</div>)
  }


  return (
    <div>
        
        <PaymentPage username={params.username}/>

    </div>
  );
}

export default username;
