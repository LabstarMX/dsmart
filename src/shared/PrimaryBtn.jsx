import React from 'react'

const PrimaryBtn = ({title, additionalClasses, onClickFn, idFn, }) => {
  return (
    <div>
        <button onClick={onClickFn} id={idFn} 
                className={`${additionalClasses} md:px-36 px-11 py-2 rounded-md 
                          bg-gradient-to-b from-green-400 to-emerald-500                       text-slate-50 inline-block
                          text-[28px] active:scale-75 active:bg-slate-500 transition-all 
                `} 
        > 
          {title} 
        </button>
    </div>
  )
}

export default PrimaryBtn