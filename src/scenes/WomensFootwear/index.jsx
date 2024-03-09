// import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";



const WomensFootwear = ({onRouteChange}) => {
  return (
    <section id="womensfootwear" >
        <motion.div
            // onViewportEnter={() => setSelectedPage(SelectedPage.WomensFootwear)}
        >
            <div className="flex w-full bg-slate-500 h-[30rem] text-center justify-center
                    items-center text-4xl
             ">
               WOMENS FOOTWEAR
            </div>
        </motion.div>
    </section>
    
  )
}

export default WomensFootwear