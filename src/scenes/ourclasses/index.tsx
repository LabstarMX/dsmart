import { SelectedPage, ClassType } from "@/shared/types"
import HText from "@/shared/HText"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import Class from "./Class"


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis, asperiores ratione perspiciatis alias officiis accusantium quis sequi perferendis velit? Obcaecati, libero.",
        image: image1 
    },
    {
        name: "Yoga Classes",
        image: image2 
    },
    {
        name: "Adventure Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis, asperiores ratione perspiciatis alias officiis accusantium quis sequi perferendis velit? Obcaecati, libero.",
        image: image3 
    },
    {
        name: "Fitness Training Classes",
        image: image4 
    },
    {
        name: "Dieting Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis, asperiores ratione perspiciatis alias officiis accusantium quis sequi perferendis velit? Obcaecati, libero.",
        image: image5 
    },
    {
        name: "Ab Core Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis, asperiores ratione perspiciatis alias officiis accusantium quis sequi perferendis velit? Obcaecati, libero.",
        image: image6 
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40 relative z-[1]" id="ourclasses" >
        <motion.div className="div"
                    onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}

        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{                                
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x:0 },                                
                }} 
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Assumenda debitis, asperiores ratione perspiciatis alias officiis 
                             accusantium quis sequi perferendis velit? Obcaecati, libero. 
                             Repellat fugiat quisquam doloribus natus corrupti sed quod?
                    </p>
                </div>

            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
                <ul className="w-[2800px] whitespace-nowrap ">
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                            setSelectedPage={setSelectedPage}
                         />
                    ))}

                </ul>

            </div>

        </motion.div>
        
    </section>
  )
}

export default OurClasses