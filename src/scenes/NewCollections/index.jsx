// import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
// import { SelectedPage } from '@/shared/types';





const NewCollections = ({  onRouteChange, selectedPage }) => {
  const currentPageTitleColor = () => {
    // const stylify = style.color = "yellow";
    if ( selectedPage === "home") {
        console.log("HOME ROUTED TO")
        document.getElementById("home-title").style.color = "yellow"
    } else if ( selectedPage !== "home" ) { 
        return null
    } else   if (selectedPage ==="newCollections") {
        console.log("NEW COLLECTIONS ROUTED TO")
        document.getElementById("new-collections-title").style.color = "yellow"
    } else if ( selectedPage !== "newCollections" ) { 
      return null
  }

    
}
  return (
    <section id="newcollections" >
        <motion.div
            // onViewportEnter={() => setSelectedPage(SelectedPage.NewCollections)}
            onViewportEnter={ currentPageTitleColor }
        >
            <div className="flex w-full bg-slate-500 h-[30rem] text-center justify-center
                    items-center text-4xl
             ">
               NEW COLLECTIONS
            </div>

            <p className="
//                          transition duration-500 hover:text-green-300 cursor-pointer
//                        active:text-green-500"
                        onClick={ () => onRouteChange('home') }                        
                      // href={`#${SelectedPage.Home}`}
            >      Home
            </p>
        </motion.div>
    </section>
    
  )
}

export default NewCollections