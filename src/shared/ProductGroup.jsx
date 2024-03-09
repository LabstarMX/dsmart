import { motion } from "framer-motion"
import { slides } from "./slides"
import ProductCard from './ProductCard';
import { sidebarCategories } from "./sidebarCategories";
import SignInRegisterPrompt from "./SignInRegisterPrompt";



const SidebarCategory = ({ onRouteChange, title, 
    subCategoryName, 
    subCategoryName2,
    subCategoryName3,
    subCategoryName4,
    subCategoryName5,
    subCategoryName6,
                        }) => {    
    
    return (
        <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{                                
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x:0 },                                
                }} 
             className=" mx-1 py-3   my-3                     
             "
        >
            <h1 className="font-bold mb-1 " >{title} </h1>
            <div className="pl-3">
                <p>{subCategoryName}</p>
                <p>{subCategoryName2}</p> 
                <p>{subCategoryName3}</p>
                <p>{subCategoryName4}</p>
                <p>{subCategoryName5}</p>
                <p>{subCategoryName6}</p>
            </div>


        </motion.div>
    )
}





const ProductGroup = ({ onRouteChange }) => {

  return (
    
    <section  className="flex flex-col   gap-9 h-full w-full  mt-[6.3rem] bg-white px-11
                                  
    ">
        <div className="flex  gap-9 h-full w-full  
                          mb-8 
            "
        >   
            <div className=" h-[100vh] w-[25%] pb-52 pl-8
                         overflow-y-auto overflow-x-hidden md:block hidden"
            >
                {sidebarCategories.map((sidebarcat) => (
                    <SidebarCategory
                        key={sidebarcat.title}
                        title={sidebarcat.title}
                        subCategoryName={sidebarcat.subCategoryName}
                        subCategoryName2={sidebarcat.subCategoryName2}
                        subCategoryName3={sidebarcat.subCategoryName3}
                        subCategoryName4={sidebarcat.subCategoryName4}
                        subCategoryName5={sidebarcat.subCategoryName5}
                        subCategoryName6={sidebarcat.subCategoryName6}
                    />
                ))}
            </div>

            <div className=" h-full md:w-[75%]  text-center 
                            "
            >
                <h1 className="text-gray-900 text-xl font-bold">Results</h1>
                <p className="text-gray-700 px-8">
                    Prices and other details may vary based on size and color.
                </p>
                <div className=" py-3  flex h-full  w-full flex-wrap justify-center 
                                md:items-start items-center
                ">
                    
                     
                    
                    
                    
                    
                    
                        {slides.map((slide) => (
                            <div className=" w-[32%] px-11 bg-gray-100 h-[350px] mr-3 my-2 
                                            
                            ">
                            <ProductCard
                                key={slide.title}
                                title={slide.title}
                                price={slide.price}
                                formerPrice={slide.formerPrice}
                                description={slide.description}
                                url={slide.url}
                                
                            />
                            </div>
                        ))}                   
                    
                </div>
                
            </div>
            





            {/* {slides.map((slide) => (
                <ProductCard
                    key={slide.title}
                    title={slide.title}
                    price={slide.price}
                    formerPrice={slide.formerPrice}
                    description={slide.description}
                    url={slide.url}
                />
            ))} */}
        </div>
        <SignInRegisterPrompt onRouteChange={onRouteChange} />

    </section>
    
  )
}

export default ProductGroup