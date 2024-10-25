import Image from "next/image";
import '../app/globals.css'
import Link from "next/link";
export default function Home() {
  return (
    <div className='flex py-8 justify-center flex-col items-center min-h-[50vh] md:min-h-[60vh] text-white'>
      <div className='font-bold flex gap-4 items-baseline text-3xl mt-8 md:text-4xl '>
        Buy Me a Chai{" "}
        <img className='rounded-full'src='/Tea.png' width={40} alt=''></img>
      </div>

      <p className='mt-4 text-center'>
        A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
      </p>

      <div className='flex flex-col items-center mt-6'>
        <button className='mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2'>
          Start Here
        </button>

      <Link href={'/about'}>
        <button className='mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2'>
          Read More
        </button>
      </Link>
      </div>
      
      <div className='bg-white w-full h-1 opacity-10 my-14'></div>

      <div className='text-white container mx-auto'>
        <h1 className='text-2xl font-bold text-center my-8'>
          Your Fans can buy you a Chai
        </h1>
        <div className='flex gap-5 justify-around'>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='/coin.png' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='/security.png' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='/Working.gif' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
        </div>
      </div>

      

      <div className='text-white container mx-auto py-14'>
        <h1 className='text-2xl font-bold text-center my-8'>
          Learn more about us
        </h1>
        <div className='flex gap-5 justify-around'>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='/coin.png' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='/security.png' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
          <div className='item space-y-3 flex flex-col items-center justify-center'>
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src='/Working.gif' alt=''></img>
            <p className='font-bold'>Fund Yourself</p>
            <p className='text-center'>Your fans are available for your help</p>
          </div>
        </div>
      </div>

      <div className='bg-white w-full h-1 opacity-10 my-14'></div>

      <div className="text-white container mx-auto py-14 flex flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold text-center my-8">
        Explore a bit more
      </h1>
      <div className="aspect-w-16 aspect-h-9 w-full max-w-lg">
        <iframe
          className=""
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pHu4PLhuKgQ?si=veFn1Oqy_cfkI8WH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>

    </div>
  );
}
