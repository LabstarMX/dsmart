import React from 'react';

const Rank = ({ name }) => {
  return (
    <div className='w-full my-20 py-20 shadow-xl bg-slate-400'>
      <div className='text-white text-5xl' >
        {/* {`${name}, your current entry count is...`} */}
        {name} yes
      </div>
      {/* <div className='white f1'>
        {entries}
      </div> */}
    </div>
  );
}




export default Rank;