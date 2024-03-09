import React from 'react'
import star from '@/assets/whitestar.png';
import Logo from '../../shared/Logo';


const customerCareLine = `+2348174844355`;
const ownEmail = `dsmartlc@gmail.com`;
const FollowUp = ({name, onRouteChange}) => {
    // name = 'Adeleke'
  return (
    <section className=' h-[100vh] w-[100vw] bg-slate-500 
                        flex flex-col justify-start items-center px-52 py-2
                        
    '>
        <Logo />
        <div className='h-fit w-fit rounded-md shadow-md bg-white relative px-6 py-[3rem] z-10 
                        overflow-hidden 
        '>
            <p className='text-blue-500 text-4xl w-full text-center mb-6 font-[sansserif]'>
                        Order received.
                        {/* <img  alt="logo" src={star} className='w-[9rem] '/> */}
            </p>
            <p className='text-blue-500 text-3xl w-full text-center mb-6 font-[sansserif]'>
                {name ? ( `${name}, please`) : (`Please`) }  check your inbox for an email from us: <i> {ownEmail}</i>, 
                with the details of your order. 
            </p>
            <p className='text-slate-500 text-xl w-full text-center mb-6'>
                You'll be contacted through our customer care line to confirm and follow up with
                your order. {` `}
                <p><i>{customerCareLine}</i></p>
            </p>
            <button className='w-fit text-white outline-none mb-6  
                                px-4 py-4 bg-blue-700 border border-blue-700
                                text-xl rounded-md cursor-pointer
                                hover:text-blue-700 hover:bg-blue-100  
                                active:bg-gray-300
                                '
                                onClick={() => onRouteChange('home')}
            >
                Go back to home page

            </button>
            <div className='w-[20rem] h-[20rem] rounded-full 
                            -z-10 absolute top-[-80px] right-[-80px]  rotate-12
                            bg-gradient-to-b from-orange-50 via-orange-300 to-orange-50
            ' >
            </div>
            <div className='w-[20rem] h-[20rem] rounded-full 
                            -z-10 absolute bottom-[-80px] left-[-80px]  rotate-12
                            bg-gradient-to-b from-cyan-50 via-cyan-300 to-cyan-50
            ' >
            </div>
        </div>
    </section>
  )
}

export default FollowUp