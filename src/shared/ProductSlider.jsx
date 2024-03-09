import { motion } from "framer-motion"
import { slides } from "./slides"
import ProductCard from './ProductCard';







const ProductSlider = ({ onRouteChange }) => {
  return (
    <div className="flex  md:gap-9 gap-4 md:mx-11 mx-2 h-full overflow-x-auto overflow-y-hidden
                        w-[13800px] whitespace-nowrap py-6
            "
     >   
        
        {slides.map((slide) => (
            <ProductCard
                key={slide.title}
                title={slide.title}
                price={slide.price}
                formerPrice={slide.formerPrice}
                description={slide.description}
                url={slide.url}
            />
        ))}
    </div>
  )
}

export default ProductSlider