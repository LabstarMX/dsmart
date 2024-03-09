import React, { useState } from 'react'
// import Link from 'next/link'
// import Loading from '../shared/Loading'
import PrimaryBtn from '../../shared/PrimaryBtn'
import HamburgerMenu from '../../shared/HamburgerMenu'
import eyeClosedIcon from '../../assets/eyeClosedIcon.png'
import eyeOpenIcon from '../../assets/eyeOpenIcon.png'
// import { handleSeePassword,  handleSubmitSignIn } from '../../shared/functions'
import Logo from '../../shared/Logo';

// const SERVERURL = `http://localhost:8000`;
const SERVERURL = `https://dsmart-backend.onrender.com`;
const navClasses = `py-1 text-[30px]  bg-gradient-to-b from-blue-700 to-teal-500
                       py-3 px-6 text-white rounded-lg opacity-[0.9]
                      w-full outline-y-slate-700 flex justify-between items-center shadow-md 
                  `

const formClasses = ` h-fit py-11 rounded-md flex flex-col justify-center items-center  
                    `

const inputClasses = ` w-full h-11 py-2 px-3 pr-11 text-slate-800 bg-transparent focus:border-slate-800
                        outline-none border-b-2 border-slate-500 focus:border-double                
                    `

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmpassword: '',
  joined: new Date(),
}
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;    
  }


  handleErrorMessage = () => {
	// if ( this.state.password === this.state.confirmpassword )
	console.log('error message.')
	const errorMessage = document.querySelector("#error-message");
	return errorMessage.style.visibility = "visible"
  } 

  
  handleSubmitRegister = () => {
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const pass = document.querySelector("#password")
    const confirmPass = document.querySelector("#confirm-password")
    const registerPass = document.querySelector("#register-password")
    const errorMessage = document.querySelector("#password-not-a-match");
	
	if (this.state.password !== this.state.confirmpassword ) {
		return errorMessage.style.visibility = "visible"		
	} else if (this.state.password === this.state.confirmpassword ) {
		errorMessage.style.visibility = "hidden"		
	}

    fetch(`${SERVERURL}/register`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name, 
        email: this.state.email,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword,
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        console.log(user) //REMOVE LATER
        this.props.loadUser(user)
        this.props.onRouteChange('home');

        fetch(`${SERVERURL}/entries`, {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              id: user.id
          })
        })
        .then(response => {
          response.json()
          // console.log(response)
        })
        .then(count => {
          this.setState(Object.assign(user, { entries: count}))
        })
        .catch(console.log)		        
      } else {
		    this.handleErrorMessage();
	    }		
    })
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onConfirmPasswordChange = (event) => {
    this.setState({confirmpassword: event.target.value})
  }

handleSeePassword = () => {
    if (seePassword === false) {
      setSeePassword(true);
      console.log("password visible");
    } else {
      setSeePassword(false);
      console.log("password hidden");
    }
}
  


 
  formType = "register"


  render() {
	const { onRouteChange, onLoadUser } = this.props;	
    return (
        <div className='h-[100vh]'>
          <nav className={navClasses}>
            <Logo />
            <HamburgerMenu additionalClasses={'bg-slate-50'} />
          </nav>
          <form className={formClasses} method='POST' onSubmit={this.handleSubmitRegister} >
            <h1 className='text-[48px] text-blue-400 font-[Roboto] ' >Sign Up</h1>               
                <div className="relative w-[70%] md:w-72 mb-4 " >
                  <input  className={inputClasses} type="text" placeholder="Full name"
                          id="name" onChange={this.onNameChange}
                          // required
                  />                
                </div>
                <div className="relative w-[70%] md:w-72 mb-4 " >
                  <input  className={inputClasses} type="email" placeholder="Email"
                          id="email" onChange={this.onEmailChange}
                          // required
                  />
                </div>
                <div className="relative w-[70%] md:w-72 mb-4 " >
                  <input  className={inputClasses} 
                          // type={seePassword ? 'text' : 'password'} 
                          type={'password'}
                          placeholder="Password" id="register-password"
                          onChange={this.onPasswordChange}
                          // required
                  />
                  <div className='absolute bottom-1 right-0 
                                flex justify-center items-center py-1                                  
                        '    
                        // onClick={this.handleSeePassword.bind(this)}
                  >
                    <img 
                            // src={seePassword ? eyeOpenIcon : eyeClosedIcon} 
                            src={eyeClosedIcon}
                            alt='C' style={{ maxWidth: '100%', height: 'auto' }}
                            width={34} 
                    />                 
                  </div>
                </div>
                <div className="relative w-[70%] md:w-72 mb-1 " >
                  <input  className={inputClasses} 
                          // type={seePassword ? 'text' : 'password'}
                          type={'password'}
                          placeholder="Confirm password" id="confirm-password"
                          onChange={this.onConfirmPasswordChange}
                          // required
                  />
                  <div className='absolute bottom-1 right-0 
                                flex justify-center items-center py-1                                  
                        '    
                        onClick={this.handleSeePassword.bind(this)}
                  > 
                      <img 
                              // src={seePassword ? eyeOpenIcon : eyeClosedIcon}
                              src={eyeClosedIcon}
                              alt='C' style={{ maxWidth: '100%', height: 'auto' }}
                              width={34} 
                      />                      
                  </div>			  	
                </div>
				<p id="password-not-a-match" style={{ visibility: 'hidden', color: 'red' }}
							className='  mb-1 '
				>
					Password not a match
				</p>
				<p id="error-message" style={{ visibility: 'hidden', color: 'red' }}
							className=' mb-8 '
				>
					Incorrect Credentials!
				</p>
				<div  className="md:text-3xl text-xl font-bold 
                          rounded-full py-4  md:px-20 px-10
                          bg-gradient-to-tr 
                          from-green-400 to-emerald-500 
                          hover:from-green-500 hover:to-emerald-700 
                          active:from-slate-400 active:to-slate-500
                          text-white cursor-pointer
              "  
							onClick={this.handleSubmitRegister}
				>
					Register
				</div>
				 
				<div>
					<span className='text-slate-400 text-[16px] ' >
						Already signed up?
					</span> {" "}
					<span   className='text-blue-500 cursor-pointer ' 
							// onClick={() => onRouteChange('home')}
							onClick={() => onRouteChange('signIn')}
					>
						Sign in.
					</span>
				</div>          
          </form>  
        </div>

    )
  }
}

export default Register