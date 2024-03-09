import { motion } from "framer-motion"

const ProductCard = ({ onRouteChange, slides, url, title, price, formerPrice, description,   }) => {
    const productImageStyles = " h-3/6 w-full mb-2 "
    return (

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.1 }}
            variants={{                                
                hidden: { opacity: 0, x:50 },
                visible: { opacity: 1, x:0 },                                
            }}
            className=' md:w-[16rem]// w-[19rem] h-[22rem] flex flex-col  cursor-pointer 
                        hover:shadow-lg active:rotate-[2deg]
                        transition-all duration-500
                        bg-gradient-to-br from-gray-200 to-gray-100
                        
        ' >
            <div className='h-[70%] ' >
                <img src={url} alt='item' loading='lazy' className='h-full' />
            </div>
            <div className=' h-[30%] flex flex-col gap-1 text-gray-600 font-[calibri] py-4 px-3 ' >
                <div className="flex items-center justify-between w-full "
                >
                    <span className='text-gray-800 md:text-xl text-lg   ' >
                        {price}
                    </span>
                    <span className=' md:text-lg text-md line-through text-red-400  ' >
                        {formerPrice}
                    </span>
                </div>
                <span className="w-full flex justify-start " >
                    {title}
                </span>
                <div className='flex flex-wrap text-md gap-2 text-gray-600    ' >
                    {/* <span>{beds}</span>{`|`} */}
                    {/* <span>{baths}</span>{`|`} */}
                    {/* <span>{size}</span> */}
                    
                    <span className=" truncate ... " >
                        {description}
                    </span>
                </div>          
                {/* <address className=' text-md inline-block text-gray-400  ' >{address}</address> */}
            </div>
        </motion.div>


        // <motion.div
        //         initial="hidden"
        //         whileInView="visible"
        //         viewport={{ once: true, amount: 0.5 }}
        //         transition={{ duration: 0.5 }}
        //         variants={{                                
        //             hidden: { opacity: 0, x:-50 },
        //             visible: { opacity: 1, x:0 },                                
        //         }} 
        //      className="bg-white  w-[350px]  h-full whitespace-normal 
        //                     flex flex-col 
        //                      shadow-sm font-[calibri]
        //      "
        // >
        //     <div className={productImageStyles}>
        //         <img src={url} alt="url" className="h-full w-full" />          
        //     </div>
                
            
        //     <div className=" flex flex-col justify-around h-3/6 ">
        //         <div className="px-5" >
        //             <h1 className=" text-lg font-bold " >{title}</h1>
        //         </div>

        //         <div className="flex gap-8 text-sm px-5  items-center" >
        //             <p className="text-gray-800 text-md " >{price}</p>
        //             {/* <p  className="line-through text-red-400 text-xs ">{formerPrice}</p> */}
        //         </div>

        //         <div className="text-xs px-5 mb-5">
        //             <p>{description}</p>                    
        //         </div>

        //         <div className=" flex justify-center items-center">
        //             {/* <button className="active:bg-green-400 rounded-lg   
        //                              px-10 py-2 font-bold
        //                             bg-gradient-to-r from-cyan-500 to-blue-500
        //                           text-white text-center hover:from-cyan-700 
        //                             hover:to-blue-500 transition-all duration-500
        //             "
        //                     onClick={ () => onRouteChange('productGroup') }       
        //             >
        //                 Buy Now
        //             </button> */}
        //         </div>
        //     </div>
            
        // </motion.div>
    )
}

export default ProductCard