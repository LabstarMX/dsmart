import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import ImageSlider from "@/scenes/ImageSlider/index.jsx"
import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import ProductSlider from "../../shared/ProductSlider"
import ProductGroup from "../../shared/ProductGroup"
import ActionButton from "../../shared/ActionButton"
import { useEffect, useState } from "react"


// fontFamily: 'Bell MT',
// fontFamily: 'Chiller',
// fontFamily: 'Colonna MT',

const slides = [
    {
        url: image1,
        title: "Accesories",
        description: "Get the Latest Modern Accesories for all.", 
    },
    {
        url: image2,
        title: "Clothing",
        description: "Get the Latest Modern Accesories for all.", 
    },
    {
        url: image3,
        title: "Women's Footwear",
        description: "Get the Latest Modern Accesories for all.", 
    },
    {
        url: image4,
        title: "Men's Footwear",
        description: "Get the Latest Modern Accesories for all.", 
    },
    {
        url: image5,
        title: "Accesories",
        description: "Get the Latest Modern Accesories for all.", 
    },
    {
        url: image6,
        title: "Accesories",
        description: "Get the Latest Modern Accesories for all.", 
    },
    
]

  const containerStyles = {
    width: '750px',
    height: '420px',
    margin: '0 auto',
  }



const Slider = () => {
    const sliderContainerStyles = "h-[420px] w-full ";
    return (
        <section 
            className={sliderContainerStyles}
        >
            <ImageSlider slides={slides} 
                        // title={title} description={description} 
            />
        </section>
    )
}

const LandingContainer = () => {
    return (
        <section className="mt-8 w-full h-[100%] text-gray-900 flex flex-col md:px-32 
                            px-1 text-center "
            >
            <h1 className="md:text-[3rem] text-[1.5rem] font-bold w-[100%] font-[sansserif] ">
                DSmart Luxury Collections Offers the Most Fashionable Footwear in the {` `} 
                <span className="text-green-400 ">Country</span>
            </h1>
            <p className="text-md text-gray-800 my-4 md:px-0 px-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, 
                vel minus delectus eaque facere illum consequatur, consectetur, animi
                et blanditiis quisquam sapiente esse culpa corporis harum ullam adipisci
                recusandae voluptas?
            </p>
            {/* <AnchorLink className=" bg-green-400 text-white hover:text-black 
                        py-2 px-5 rounded-full hover:bg-secondary-500 active:bg-gray-400
                        text-center w-[450px] active:text-white" 
                    onClick={() => setSelectedPage(SelectedPage.ProductSlider)}
                    href={`#${SelectedPage.ProductSlider}`}
            >
                Shop Now
            </AnchorLink> */}              
        </section>
    )
}

const ProductsSliderContainer = () => {
    return (
        <section className="flex flex-col gap-y-20 w-full  h-fit   justify-center items-center 
                            border// border-green-500// py-4 px-11 " 
        >
            <div className="flex border// border-red-500//   justify-evenly items-center                                
                                h-full w-full md:w-full overflow-x-auto overflow-y-hidden                                
            ">
                <ProductSlider />                    
            </div>
            <div className="w-full "
                id="demo"
            >
                <button className="md:text-3xl text-xl font-bold 
                                    rounded-full py-4  md:px-20 px-10
                                    bg-gradient-to-tr 
                                    from-green-400 to-emerald-500 
                                    hover:from-green-500 hover:to-emerald-700 
                                    active:from-slate-400 active:to-slate-500
                                    text-white
                " >
                    View more products
                </button>
            </div>
        </section>
    )
}

const ServicesContainer = () => {
    return (
        <section className="w-full">
            <ul className="mt-2 w-full h-[100%] text-gray-900 flex flex-col px-12 text-center gap-9 ">
                <li className="md:text-xl text-lg font-bold inline-block  ">
                    Lightning-fast {` `} 
                    <span className="text-green-400  ">Nationwide</span>{` `}
                    Delivery
                </li>           
            </ul>
        </section>
    )
}



const Home = ({ onRouteChange, name, id, email, }) => {

    const [isRightOfPage, setIsRightOfPage] = useState(true);
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollX === 0) {
            setIsRightOfPage(true);
        }
        if (window.scrollX !== 0) setIsRightOfPage(false);      
        }
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, [])

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsTopOfPage(true);
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);      
        }
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, [])

  return (
    <motion.div id="home" //IMPORTANT FOR NAVIGATION
                className="flex flex-col mx-auto h-full w-[100vw] items-center justify-center
                            bg-gray-50 overflow-hidden//
                             mt-[5.2rem] mb-11  "
     >
        
            <Slider />
            <LandingContainer />
            <ProductsSliderContainer />
            {/* <ServicesContainer /> */}
           <div className="w-full">
                {/* <div className="flex mt-8  bg-white border border-red-500
                                justify-evenly items-center                        
                                h-full w-[100vw] py-8 px-5 
                ">
                        <ProductGroup />                        
                </div> */}

            
            
            

            
         </div>    

    </motion.div>
  )
  
}

export default Home