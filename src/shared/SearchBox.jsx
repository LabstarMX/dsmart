import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"


const SearchBox = () => {

  const searchItems = [
    "loafers",
    "nikes",
    "nike air forces",
    "air jordans",
    "pams",
    "sandals",
    "timberland boots",
    "jean boots",
    "all stars",
    "nike air maxes",




  ]
  return (
    <div className=" flex  bg-transparent  h-full w-full items-center justify-center 
                    my-auto relative rounded-full overflow-hidden
                    "
    >
        
        <input type="text" placeholder="Search e.g Men's shoes" 
                className="h-full w-full pl-3 pr-9 
                outline-none text-black placeholder:text-gray-400
                placeholder:text-[80%] md:placeholder:text-[100%] text-sm " 
        />
        <button className=" bg-transparent w-[1/6] active:scale-75 
                            transition-all duration-100 absolute  right-2 "
        >
            <MagnifyingGlassIcon className="h-6 w-6 text-black 
                                            
            " />
        </button>

        
    </div>
  )
}

export default SearchBox