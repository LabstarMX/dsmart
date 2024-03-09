// import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";



const AllProducts = ({onRouteChange}) => {
  return (
    <section id="allproducts" >
        <motion.div
            // onViewportEnter={() => setSelectedPage(SelectedPage.AllProducts)}
        >
            <div className="flex w-full bg-slate-500 h-[30rem] text-center justify-center
                    items-center text-4xl
             ">
               ALL PRODUCTS 
            </div>
        </motion.div>
    </section>
    
  )
}

export default AllProducts