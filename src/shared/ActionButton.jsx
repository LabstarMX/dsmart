import AnchorLink from "react-anchor-link-smooth-scroll"
// import { SelectedPage } from "@/shared/types"



const ActionButton = ({ children, onRouteChange  }) => {
  return (
    <AnchorLink className="rounded-md bg-blue-500 px-10 py-2 hover:bg-brown-500 w-full 
                          cursor-pointer font-bold 
                          hover:text-green-500 text-center text-lg text-white "
                onClick={ () => onRouteChange('signIn') }
                // href={`#${SelectedPage.ContactUs}`}          
     >
        {children}
    </AnchorLink>
  )
}

export default ActionButton