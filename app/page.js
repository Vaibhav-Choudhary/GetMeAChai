import Image from "next/image";

export default function Home() {
  return (
    <div className='flex py-8 justify-center flex-col items-center min-h-[50vh] md:min-h-[60vh] text-white'>
      <div className='font-bold text-3xl mt-8 md:text-4xl '>
        Buy Me a Chai{" "}
      </div>

      <p className='mt-4 text-center'>
        A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
      </p>

      <div className='flex flex-col items-center mt-6'>
        <button className='mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2'>
          Start Here
        </button>

        <button className='mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2'>
          Read More
        </button>
      </div>
      
      <div className='bg-white w-full h-1 opacity-10 my-14'></div>

      <div className='text-white container mx-auto'>
        <h1 className='text-2xl font-bold text-center my-8'>
          Your Fans can buy you a Chai
        </h1>
        <div className='flex gap-5 justify-around'>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
        </div>
      </div>

      <div className='text-white container mx-auto'>
        <h1 className='text-2xl font-bold text-center my-8'>
          Learn more about us
        </h1>
        <div className='flex gap-5 justify-around'>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
        </div>
      </div>

    </div>
  );
}
