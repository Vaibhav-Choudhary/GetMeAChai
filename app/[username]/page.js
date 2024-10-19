import PaymentPage from '@/components/PaymentPage';
import React from 'react';

const username = ({ params }) => {
  return (
    <div>
      
        <PaymentPage username={params.username}/>

    </div>
  );
}

export default username;
