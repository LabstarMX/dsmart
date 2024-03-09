import viteLogo from '/vite.svg'
import { Component } from 'react';
import { useState, useEffect, Suspense, lazy } from 'react'
const Home = lazy(() => import('@/scenes/home'))
const Footer = lazy(() => import('./scenes/footer'))
const WomensFootwear = lazy(() => import('./scenes/WomensFootwear'))
const NewCollections = lazy(() => import('./scenes/NewCollections'))
const AllProducts = lazy(() => import('./scenes/AllProducts'))
const Accessories = lazy(() => import('./scenes/Accessories'))
const MensFootwear = lazy(() => import('./scenes/MensFootwear'))
const SignIn = lazy(() => import('./scenes/signin'))
const Navbar = lazy(() => import('@/scenes/navbar'))
const ProductGroup = lazy(() => import('./shared/ProductGroup.jsx'))
const ProductSlider = lazy(() => import('./shared/ProductSlider.jsx'))
const CreateCustomOrder = lazy(() => import('./scenes/CreateCustomOrder'))
const UserDetails = lazy(() => import('./shared/UserDetails.jsx'))
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import useMediaQuery from './hooks/useMediaQuery';
import './App.css'
import Loading from './shared/Loading';
import Register from './scenes/register/index.jsx';
import FollowUp from './scenes/followup/index.jsx';








// const SERVERURL = `http://localhost:8000`;
const SERVERURL = `https://dsmart-backend.onrender.com`;
const BackButton = ({ onRouteChange }) => {
  const handleGoBack = () => {
    // console.log("handlegoback works")
    // onClick={ () => onRouteChange('signIn')}
  }
  return (
    <button 
              // onClick={handleGoBack}
              onClick={ () => onRouteChange('home')}
              // onClick={history.go()}
              className=' bg-blue-500 rounded-lg py-2 px-3 active:scale-90 text-white w-[190px] '
    >
      GO BACK HOME
    </button>
  )
}


const initialState = {
  searchInput: '',
  // route: 'createCustomOrder',
  // route: 'followUp',
  route: 'home',
  // route: 'register',
  // route: 'signIn',
  isSignedIn: false,
  currentDateTime: new Date(),
  onPage: '',
  user: {
    id: '',
    name: '',
    email: '',
    logins: 0,
    joined: ''
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState
  }
  
  

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({searchInput: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signOut') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route })

    const homeTitle = document.querySelector('#home-title')
    const customTitle = document.querySelector('#custom-title')
    const productsTitle = document.querySelector('#products-title')
    const collectionsTitle = document.querySelector('#collections-title')
    const contactTitle = document.querySelector('#contact-title')
    // const customTitle = document.querySelector('#custom-title')
    // const homeTitle = document.querySelector('#home-title')
    // const customTitle = document.querySelector('#custom-title')

    
    route === 'home' ? homeTitle.style.color = 'rgb(134 239 172)' : homeTitle.style.color = 'white'
    route === 'createCustomOrder' ? customTitle.style.color = 'rgb(134 239 172)' : customTitle.style.color = 'white'
    route === 'products' ? productsTitle.style.color = 'rgb(134 239 172)' : productsTitle.style.color = 'white'
    route === 'collections' ? collectionsTitle.style.color = 'rgb(134 239 172)' : collectionsTitle.style.color = 'white'
    route === 'contact' ? contactTitle.style.color = 'rgb(134 239 172)' : contactTitle.style.color = 'white'
    // route === 'createCustomOrder' ? customTitle.style.color = 'rgb(134 239 172)' : customTitle.style.color = 'white'
  
  }
  

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      logins: data.logins,
      joined: data.joined
    }})
  }
  


  render() {
    const{ isSignedIn, route, currentDateTime, selectedPage, user } = this.state;
    const { isPending } = this.props;
    
    
    if (this.state.route === 'home') {
        return(
          <Suspense fallback={<Loading />} >          
            <div className='bg-gray-50  '  >
                <Navbar isSignedIn={true} onRouteChange={this.onRouteChange}
                          name={user.name} 
                 />
                <Home isSignedIn={true} onRouteChange={this.onRouteChange}
                      name={user.name} email={user.email} onPage={this.onPage}
               />
                {/* <p className="text-blue-600  my-4 p-3" >
                    Logged in: {currentDateTime}
                </p> */}
                <Footer isSignedIn={true} onRouteChange={this.onRouteChange} />                
            </div>
          </Suspense>
        )
    } else if (this.state.route === 'createCustomOrder') {
      return(
        <Suspense fallback={<Loading />} >
          <div className='bg-gray-50  '  >
              <Navbar onRouteChange={this.onRouteChange} 
                      name={user.name} 
              />
              <CreateCustomOrder isSignedIn={true} loadOrder={this.loadOrder}
                                  onRouteChange={this.onRouteChange}
                                  name={user.name} email={user.email} 
              />
              
              <Footer isSignedIn={this.isSignedIn} onRouteChange={this.onRouteChange} />
          </div> 
        </Suspense>        
      )
    } else if (this.state.route === 'followUp') {
      return(
        <Suspense fallback={<Loading />} >
          <div className='bg-gray-50  '  >
              <FollowUp isSignedIn={true} onRouteChange={this.onRouteChange}
                        name={user.name} email={user.email}
              />
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
                      <button className="text-3xl font-bold 
                                          rounded-full py-4 px-20
                                            bg-cyan-600//
                                            bg-gradient-to-tr from-cyan-500 to-blue-500
                                            text-white
                      " >
                          View more products
                      </button>
                  </div>
              </section>
              <Footer isSignedIn={true} onRouteChange={this.onRouteChange} />
          </div> 
        </Suspense>        
      )
    } else if (this.state.route === 'products') {
      return(
        <Suspense fallback={<Loading />} >
          <div className='bg-gray-50  '  >
              <Navbar onRouteChange={this.onRouteChange} 
                      name={user.name} 
              />
              <AllProducts isSignedIn={true} onRouteChange={this.onRouteChange} />
              {/* <p className="text-blue-600  my-4 p-3" >
                    Logged in: {currentDateTime}
              </p> */}
              <Footer isSignedIn={true} onRouteChange={this.onRouteChange} />
          </div> 
        </Suspense>
        
      )
    } else if (this.state.route === 'collections') {
        return(
          <Suspense fallback={<Loading />} >
          <div className='bg-gray-50  '  >
              <Navbar onRouteChange={this.onRouteChange} 
                      name={user.name}
              />
              <NewCollections isSignedIn={true} onRouteChange={this.onRouteChange} 
                              selectedPage={"newCollections"}  
              />
              {/* <p className="text-blue-600  my-4 p-3" >
                    Logged in: {currentDateTime}
              </p> */}
              <Footer isSignedIn={true} onRouteChange={this.onRouteChange} />
          </div> 
        </Suspense>
          
        )
    } else if (this.state.route === 'about') {
      return(
        <Suspense fallback={<Loading />} >
          <div className='bg-gray-50  '  >
              <Navbar onRouteChange={this.onRouteChange} 
                      name={user.name}
              />
              <MensFootwear isSignedIn={true} onRouteChange={this.onRouteChange} />
              {/* <p className="text-blue-600  my-4 p-3" >
                    Logged in: {currentDateTime}
              </p> */}
              <Footer isSignedIn={true} onRouteChange={this.onRouteChange} />
          </div>
        </Suspense>
        
      )
    } else if (this.state.route === 'contact') {
      return(
        <Suspense fallback={<Loading />} >
          <div className='bg-gray-50  '  >
              <Navbar onRouteChange={this.onRouteChange}
                                    name={user.name} 
              />
              <WomensFootwear isSignedIn={true} onRouteChange={this.onRouteChange} />
              {/* <p className="text-blue-600  my-4 p-3" >
                    Logged in: {currentDateTime}
              </p> */}
              <Footer isSignedIn={true} onRouteChange={this.onRouteChange} />
          </div>
        </Suspense>
        
      )
    } else if (this.state.route === 'register') {
      return(
        <Suspense fallback={<Loading />} >
          <div className='bg-gray-50  '  >              
              <Register isSignedIn={false} loadUser={this.loadUser} 
                        onRouteChange={this.onRouteChange} 
                        onInputChange={this.onInputChange}
                        handleEntries={this.handleEntries}
              />
          </div>
        </Suspense>        
      )
    } else if (this.state.route === 'signIn') {
      return(
        <Suspense fallback={<Loading />} >
          <div className='bg-gray-50  '  >              
              <SignIn isSignedIn={false} loadUser={this.loadUser} 
                      onRouteChange={this.onRouteChange}
                      onInputChange={this.onInputChange}
                      handleEntries={this.handleEntries}
               />
          </div>
        </Suspense>        
      )
    } else if (this.state.route === 'productGroup') {
      return(
        <div className='bg-gray-50  '  >
          <Suspense fallback={<Loading />} >
            <Navbar onRouteChange={this.onRouteChange}
                                  name={user.name} 
            />
            <ProductGroup isSignedIn={false} onRouteChange={this.onRouteChange} />
            <Footer onRouteChange={this.onRouteChange} />
          </Suspense>
              
          </div>
      )
    } else if (this.state.route === 'loading') {
        return(
          <Loading />
          
        )
    } else {
      return (
        <Suspense fallback={<Loading />} >
          <div className='w-full h-[100vh] bg-gray-50 text-center flex flex-col justify-center 
                        items-center ' 
          >
            <p className='text-red-500 text-lg mb-4 ' >ROUTE NOT ASSIGNED!</p>
            <BackButton onRouteChange={this.onRouteChange} />
          </div>
        </Suspense>
                
        
      )
    }
  }
}

  export default App;