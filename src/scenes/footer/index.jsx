// import useMediaQuery from "@/hooks/useMediaQuery";
import p from "react-anchor-link-smooth-scroll";
import Logo from "../../shared/Logo";


const Footer = ({ onRouteChange, selectedPage, }) => {
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <footer className="bg-blue-900// bg-gradient-to-b from-blue-700 to-teal-500 
                        md:py-16 px-4   text-gray-100 w-full
    " >
      <div className=" justify-content mx-auto w-full md:gap-16 gap-4 flex flex-col 
                      md:flex-row  "
      >          
          <div className="mt-16 basis-2/4 md:mt-0 flex flex-col items-start 
                          "
          >
              {/* LOGO */}
              <Logo />
              <p className="pb-5// text-left px-5  " >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur veniam possimus consequuntur quas? Accusantium modi, dicta
                aspernatur magnam ut beatae blanditiis quis aut reiciendis quos ipsum ex
                dolore quisquam explicabo.
              </p>
          </div>

          <div className="py-5  basis-1/4 md:mt-0 flex flex-col items-start gap-[0.1rem] px-5 ">
              <h4 className="font-bold mb-4 ">Links</h4>

                  <p className={`
                          transition duration-500 hover:text-green-300 cursor-pointer
                          active:text-green-500 inline-block`}
                            onClick={ () => onRouteChange('home') }
                            id="home-title"
                  >      Home
                  </p>
                  <p className={`
                          transition duration-500 hover:text-green-300 cursor-pointer
                          active:text-green-500 inline-block`}
                            onClick={ () => onRouteChange('products') }
                            id="all-products-title"
                  >     Products
                  </p>
                  <p className={`
                            transition duration-500 hover:text-green-300 pointer cursor-pointer
                            active:text-green-500 inline-block`}
                              onClick={ () => onRouteChange('collections') }
                              id="new-collections-title"
                    >      Collections
                  </p>

                  <p className={`${selectedPage === "mensfootwear" ? "text-green-400" : ""}
                            transition duration-500 hover:text-green-300 cursor-pointer
                            active:text-green-500 inline-block`}
                              onClick={ () => onRouteChange('about') }
                              id="mens-footwear-title"
                    >      About
                  </p>
                  <p className={`${selectedPage === "womensfootwear" ? "text-green-400" : ""}
                            transition duration-500 hover:text-green-300 cursor-pointer
                            active:text-green-500 inline-block`}
                              onClick={ () => onRouteChange('contact') }
                              id="womens-footwear-title"
                    >      Contact
                  </p>

                  <p className={`${selectedPage === "womensfootwear" ? "text-green-400" : ""}
                            transition duration-500 hover:text-green-300 cursor-pointer
                            active:text-green-500 inline-block`}
                              onClick={ () => onRouteChange('customOrder') }
                              id="womens-footwear-title"
                    >      Custom Order
                  </p>

                  <p className={`${selectedPage === "womensfootwear" ? "text-green-400" : ""}
                            transition duration-500 hover:text-green-300 cursor-pointer
                            active:text-green-500 inline-block`}
                              onClick={ () => onRouteChange('contactUs') }
                              id="womens-footwear-title"
                              href= "contactus"
                    >      Contact Us
                  </p>
          </div>
          <div className="py-5  basis-1/4 md:mt-0 flex flex-col items-start gap-[0.1rem] px-5 ">
                <h4 className="font-bold mb-4 ">
                Contact Us
              </h4>
              <p className=" text-left"> Top Medical Rd. Tunga Minna, Niger State.</p>
              <p className="my-5 text-left">(234) 815-476-2621</p>  
              
              <hr className='bg-gray-20 w-full h-[.15rem] mx-auto rounded-lg  '/>
                  
              <p className="mt-6 mb-12  text-center w-full">
                Designed by {` `}
                <a href="https://github.com/LabstarMX">
                  <p className="text-green-400 font-semibold cursor-pointer inline-block
                  ">   
                    Labstar
                  </p>
                </a>
              </p>         
          </div>
      </div>
      <hr />
      <div className=" w-full flex justify-center items-center ">        
        <p className=" text-center h-full w-full my-4" >
          ©Dsmart Luxury Collections | All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer