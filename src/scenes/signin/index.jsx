// import ActionButton from '@/shared/ActionButton';
// import { SelectedPage } from '@/shared/types';
import { LockClosedIcon, EnvelopeIcon, EyeIcon } from '@heroicons/react/24/solid';
import logo from '@/assets/logo.png';
import { motion } from 'framer-motion';
import HamburgerMenu from '../../shared/HamburgerMenu'
import eyeClosedIcon from '../../assets/eyeClosedIcon.png'
import eyeOpenIcon from '../../assets/eyeOpenIcon.png'
import React from 'react';
import '../../App.css'
import Logo from '../../shared/Logo';

// const SERVERURL = `http://localhost:8000`;
const SERVERURL = `https://dsmart-backend.onrender.com`;
const navClasses = `py-1 text-[30px] bg-gradient-to-b from-blue-700 to-teal-500
                      py-3 px-6 text-white rounded-lg opacity-[0.9]
                      w-full outline-y-slate-700 flex justify-between items-center shadow-md 
                  `

const formClasses = ` h-fit py-11 rounded-md flex flex-col justify-center items-center  
                    `

const inputClasses = ` w-full h-11 py-2 px-3 pr-11 text-slate-800 bg-transparent focus:border-slate-800
                        outline-none border-b-2 border-slate-500 focus:border-double                
                    `


const initialState = {
  signInEmail: '',
  signInPassword: '',
};                    
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  handleErrorMessage = () => {
    const errorMessage = document.querySelector("#error-message");
    errorMessage.style.visibility = "visible"
  }

//   handleEntries = () => {
//     fetch(`${SERVERURL}/entries`, {
//     method: 'put',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//         id: this.state.user.id
//     })
//     })
//     .then(response => response.json())
//     .then(count => {
//       // console.log(id)
//       this.setState(Object.assign(this.state.user, { entries: count}))
//     })
//     .catch(console.log)
//  }

  

  onSubmitSignIn = () => {

    fetch(`${SERVERURL}/signin`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        console.log(user) // REMOVE LATER
        this.props.loadUser(user)
        this.props.onRouteChange('home');

        fetch(`${SERVERURL}/entries`, {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              id: user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(user, { entries: count}))
        })
        .catch(console.log)
      }
      else {
        this.handleErrorMessage()
      }
    })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
        <div className='h-[100vh]'>
          <nav className={navClasses}>
            <Logo />
		        <HamburgerMenu additionalClasses={'bg-slate-50'} />
          </nav>
          <form className={formClasses} method='POST' onSubmit={this.onSubmitSignIn} >
            <h1 className='text-[48px] text-blue-400 font-[Roboto] ' >Sign In</h1>            
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
                <p id="error-message" style={{ visibility: 'hidden', color: 'red' }}
                      className=' mb-8 '
                >
                  {/* Incorrect Credentials! */} 
                    {!this.state.signInEmail.length 
                        ? (`Email field can't be empty`) 
                        : !this.state.signInPassword.length 
                            ? (`Password field can't be empty`) 
                            : (`Incorrect Credentials!`) }
                    
				        </p>
				<div 		className="md:text-3xl text-xl font-bold 
                          rounded-full py-4  md:px-20 px-10
                          bg-gradient-to-tr 
                          from-green-400 to-emerald-500 
                          hover:from-green-500 hover:to-emerald-700 
                          active:from-slate-400 active:to-slate-500
                          text-white cursor-pointer
                "  
							onClick={this.onSubmitSignIn}
				>
					Login
				</div>
				 
				<div>
					<span className='text-slate-400 text-[16px] ' >
						Don't hace an account?
					</span> {" "}
					<span   className='text-blue-500 cursor-pointer ' 
							// onClick={() => onRouteChange('home')}
							onClick={() => onRouteChange('register')}
					>
						Sign up.
					</span>
				</div>          
          </form>  
        </div>
    );
  }
}

export default SignIn;