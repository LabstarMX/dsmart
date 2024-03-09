// import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";



const Accesories = ({onRouteChange}) => {
  return (
    <section id="accessories" >
        <motion.div
            // onViewportEnter={() => setSelectedPage(SelectedPage.Accesories)}
        >
            <div className="flex w-full bg-slate-500 h-[30rem] text-center justify-center
                    items-center text-4xl
             ">
               ACCESSORIES 
            </div>
        </motion.div>
    </section>
    
  )
}

export default Accesories