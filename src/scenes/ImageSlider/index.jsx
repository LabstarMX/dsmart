import { useState, useEffect } from 'react'



const ImageSlider = ({ slides,  }) => {
    const body = document.querySelector("body");
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    useEffect(() => {
        const timer = setTimeout( ()=> {
            if (currentIndex === 2) {
                setCurrentIndex(0)
            } else setCurrentIndex(currentIndex + 1)
        }, 6000)
        return () => clearTimeout(timer)
    }, [currentIndex])

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        // borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
        transition: 'all ease-in 1s'
    }
    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
        fontWidth: 'bold',
        left: '4px',
    }
    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer',
        fontWidth: 'bold',
        right: '4px'
    }
    const dotContainerStyles = {
        display: 'flex',
        justifyContent: 'center', 
        gap: '13px', 
        position: 'absolute',
        top: '95%',
        left: '50%',
        right: '50%', 
        transform: 'translate(50%, -50%)',
    }
    const dotStyles = {
        height: '10px',
        width: '10px',
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px', 
        background: '#fff',
        opacity: 0.6,
        color: 'transparent',
        borderRadius: '50%',

              
    }
    const textContainerStyles =   {
        position: 'absolute',
        top: '60%',
        transform: 'translate(0, -50%)',
        color: '#fff',
        fontWidth: 'bold',
        fontFamily: 'Chiller',
        
    }
    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex); 
    }

    const goToNext = () => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
    }

    return (
        <div style={sliderStyles}
        >
            <div 
                className=" bg-gray-800 hover:opacity-90 opacity-40 rounded " 
                style={leftArrowStyles} onClick={goToPrev} 
            >
                    {`<`} 
            </div>
            <div 
                className=" bg-gray-800 hover:opacity-90 opacity-40 rounded "
                style={rightArrowStyles} onClick={goToNext} 
            >
                {`>`} 
            </div>
            <div style={slideStyles} className='  ' >
            </div>
            <div className='flex flex-col md:gap-11// gap-[5rem] w-full '
                    style={textContainerStyles}
            >
                <span className=' md:text-8xl text-7xl   ' >
                    {slides[currentIndex].title}
                </span>
                <span className='md:text-4xl text-2xl ' >
                    {slides[currentIndex].description}
                </span>
            </div>

            {/* <div style={dotContainerStyles} >
                {slides.map((slide, slideIndex) => (
                    <span style={dotStyles} key={slideIndex} 
                            onClick={ () => goToSlide(slideIndex)} >
                        o
                    </span>
                ))}
            </div> */}
        </div>
    )
}



export default ImageSlider