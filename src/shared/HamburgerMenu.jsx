import React from 'react'

const HamburgerMenu = ({ additionalClasses, onClickFn }) => {
  return (
    <div className=' flex flex-col items-center justify-between  h-7 w-7 bg-none
                      active:scale-75 transition-all cursor-pointer' 
        onClick={onClickFn}
    >
        <div className={`${additionalClasses} w-full h-1/6 rounded-md`}></div>
        <div className={`${additionalClasses} w-full h-1/6 rounded-md`}></div>
        <div className={`${additionalClasses} w-full h-1/6 rounded-md`}></div>
    </div>
  )
}

export default HamburgerMenu