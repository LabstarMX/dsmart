import './Loading.css'


const Loading = ({ onRouteChange }) => {
    return (
      <div className=" text-center  h-[100vh] flex flex-col gap-5 items-center justify-center
                   " >
        <p className='text-cyan-500 text-5xl font-bold ' >Loading...</p>
        <div className=" w-[35px] h-[70px] flex flex-col rounded-full overflow-hidden "
              id="load-anim-spin"
        >
          <div className="bg-red-500  w-full h-1/2  "
                id="load-red" 
          ></div>
          <div className="bg-cyan-500 w-full h-1/2  "
                id="load-blue" 
            ></div>
        </div>
      </div>
    )
  }



  export default Loading