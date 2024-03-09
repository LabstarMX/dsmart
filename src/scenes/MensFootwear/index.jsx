// import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";



const MensFootwear = ({onRouteChange}) => {
  return (
    <section id="mensfootwear" >
        <motion.div
            // onViewportEnter={() => setSelectedPage(SelectedPage.MensFootwear)}
        >
            <div className="flex w-full bg-slate-500 h-[30rem] text-center justify-center
                    items-center text-4xl
             ">
               MENS FOOTWEAR
            </div>
        </motion.div>
    </section>
    
  )
}

export default MensFootwear