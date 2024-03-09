import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '@/assets/logo.svg';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '../../hooks/useMediaQuery';
// import ActionButton from '@/shared/ActionButton';
import p from 'react-anchor-link-smooth-scroll';
import SearchBox from '../../shared/SearchBox'
import Logo from '../../shared/Logo';



const Navbar = ({ isTopOfPage, onRouteChange, selectedPage,
                 isSignedIn, name  } ) => {

    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 960px)");
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    // const selectedPageTitleColor = selectedPage === 'home' ? `text-green-400` : null  ;
    const navBarBackground = isTopOfPage ? "bg-white" : "bg-blue-900 drop-shadow"
    const logoStyles = {
      width: '100%',
      height: '100%',
      // borderRadius: '10px',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }

    const selectedPageTitleColor = ({color})  => {
      if (selectedPage) {
        console.log(selectedPage)
        console.log(color)
        // let color = `text-400`
        return {color}
        
      }
    }

    
  return (
   




    <nav className={ `${navBarBackground} ${flexBetween} fixed top-0 z-30
                    w-full 
                    py-2  shadow-md bg-blue-900//
                    bg-gradient-to-b from-blue-700 to-teal-500 
                    opacity-[0.9]
    `}>
      <div className={`${flexBetween} mx-auto  w-full flex justify-center items-center  `}>
        <div className={`${flexBetween} mx-auto w-full md:gap-16 flex justify-between items-center 
                        text-center 
        `}>
          {/* <div className='w-[9rem] border h-full'> */}
            <Logo />
          {/* </div> */}


          <div className="flex  text-white gap-2 md:gap-4 text-center 
                          items-center justify-between text-sm  w-fit
                          h-full overflow-hidden  font-[calibri] 
                            
          ">    

            {/* {isAboveMediumScreens ? ( */}
              <div className="h-full  md:flex text-white gap-8 text-center md:w-fit
                        items-center justify-end text-xl hidden">
                <p className={`transition duration-500 
                          hover:text-green-300 cursor-pointer
                          active:text-green-500 inline-block`}
                          onClick={ () => onRouteChange('home') }
                          id="home-title"
                >      Home
                </p>
                <p className={`transition duration-500 hover:text-green-300 cursor-pointer
                        active:text-green-500 inline-block`}
                          onClick={ () => onRouteChange('products') }
                          id="products-title"
                >      Products
                </p>
                <p className={`transition duration-500 hover:text-green-300 pointer cursor-pointer
                          active:text-green-500 inline-block`}
                            onClick={ () => onRouteChange('collections') }
                            id="collections-title"
                  >      Collections
                </p>

                <p className={`transition duration-500 hover:text-green-300 cursor-pointer
                          active:text-green-500 inline-block`}
                            onClick={ () => onRouteChange('createCustomOrder') }
                            id="custom-title"
                  >      Custom
                </p>
                <p className={`transition duration-500 hover:text-green-300 cursor-pointer
                          active:text-green-500 inline-block`}
                            onClick={ () => onRouteChange('contact') }
                            id="contact-title"
                  >      Contact
                </p>
              </div>
            {/* ) : ( */}
              {/* <div>p</div> */}
            {/* )} */}
            {/* <div className=" h-10 md:flex hidden  justify-end md:w-[240px]// md:w-2/6  w-1/3 overflow-hidden ">
              <SearchBox />
            </div> */}
            
            <div className={`${flexBetween} mx-auto gap-9 md:w-1/6 w-full pr-2 flex justify-end 
                                  overflow-hidden  
            `} >
              
              <div className={`${flexBetween} mx-auto  w-full overflow-hidden 
                                flex justify-end
              `}>
                

                { name ? (
                  <p className="text-white text-xl w-fit// w-full flex justify-end overflow-hidden  
                                  font-[calibri] cursor-pointer 
                                  hover:text-green-300 active:text-gray-400 gap-x-3
                  " >
                    {name}
                    { !isAboveMediumScreens ? (
                      <div onClick={ () => setIsMenuToggled(true)}>
                        <Bars3Icon className="h-7 w-7 text-white" />
                      </div>
                    ) : null }
                    
                    {/*<p className="h-7 w-7 text-xl font-bold bg-white text-blue-400 text-center rounded-full ">
                      0
                    </p> */}
                  </p>

                  ) : (
                  <div className='w-full flex justify-end' >
                    

                    <p className={`transition duration-500 hover:text-green-300 cursor-pointer
                              active:text-green-500 inline-block text-xl text-white`}
                                onClick={ () => onRouteChange('signIn') }
                                id="womens-footwear-title"
                      >      Login
                    </p>
                  </div>
                )}    

                                                
              </div>
            </div>
          </div> 
        </div>          
      </div>   
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-10 h-full w-[300px]// w-fit 
                        bg-gradient-to-b from-gray-100 to-gray-300 
                        drop-shadow-xl  overflow-hidden//
                        
                        "
        >
        {/* CLOSE ICON */}
            <div className="flex justify-end px-5 py-2 ">
            <button onClick={ () => setIsMenuToggled(!isMenuToggled)}>
                <span className="h-6 w-6 text-6xl text-gray-700 ">x</span>
            </button>
            </div>
            {/* MENU ITEMS */}
            <div className='flex flex-col gap-11  justify-center// //items-center 
                            font-bold text-3xl text-gray-800 px-7 
                            
            ' >
              <p className={`transition duration-500 hover:text-green-300 cursor-pointer
                      active:text-green-500 inline-block`}
                        onClick={ () => {
                          onRouteChange('home') 
                          setIsMenuToggled(false)
                        }}
                        id="home-title"
              >      Home
              </p>
              <p className={`transition duration-500 hover:text-green-300 cursor-pointer
                      active:text-green-500 inline-block`}
                        onClick={ () => {
                          onRouteChange('products') 
                          setIsMenuToggled(false)
                        }}
                        id="all-products-title"
              >      Products
              </p>
              <p className={`transition duration-500 hover:text-green-300 pointer cursor-pointer
                        active:text-green-500 inline-block`}
                          onClick={ () => {
                            onRouteChange('collections') 
                            setIsMenuToggled(false)
                          }}
                          id="new-collections-title"
                >      Collections
              </p>

              <p className={`transition duration-500 hover:text-green-300 cursor-pointer
                        active:text-green-500 inline-block`}
                          onClick={ () => {
                            onRouteChange('createCustomOrder') 
                            setIsMenuToggled(false)
                          }}
                          id="create-custom-order-title"
                >      Custom
              </p>
              <p className={`transition duration-500 hover:text-green-300 cursor-pointer
                        active:text-green-500 inline-block`}
                          onClick={ () => {
                            onRouteChange('contact') 
                            setIsMenuToggled(false)
                          }}
                          id="womens-footwear-title"
                >      Contact
              </p>
            </div>
            
        </div>
      )}   
    </nav>
  )
}

export default Navbar



 



















// const Navbar = () => {


//   return (
//     <nav>
//       <div>
//         NavBar
//       </div>
//     </nav>
//   )
// }

// export default Navbar;