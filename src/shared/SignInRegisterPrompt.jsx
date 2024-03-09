import React from 'react'


const SignInRegisterPrompt = ({ onRouteChange }) => {
  return (
    <div className='flex flex-col gap-2 w-full text-center justify-center items-center '>
        <p>See personalized recommendations</p>
        <button className="active:bg-green-400 rounded-lg   
                            px-10 py-2 font-bold w-52
                        bg-gradient-to-r from-yellow-400 to-yellow-500
                        text-white text-center hover:from-yellow-500 
                        hover:to-yellow-400 transition-all duration-500
                    
        "
                onClick={ () => onRouteChange('signIn') }       
        >
            Sign In
        </button>
        <p className='inline-block' >New customer? 
            <span className='text-blue-500  cursor-pointer '
                onClick={ () => onRouteChange('register') }
            >   Start here.
            </span>
        </p>
        
    </div>
  )
}

export default SignInRegisterPrompt