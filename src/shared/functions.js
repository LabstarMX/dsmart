import React, { useState } from 'react'










const handleSeePassword = () => {
  const [seePassword, setSeePassword] = useState(false);
  
    if (seePassword === false) {
      setSeePassword(true);
      console.log("password visible");
    } else {
      setSeePassword(false);
      console.log("password hidden");
    }
}

const handleSubmitRegister = () => {
    const firstName = document.querySelector("#first-name")
    const lastName = document.querySelector("#last-name")
    const email = document.querySelector("#email")
    const pass = document.querySelector("#password")
    const confirmPass = document.querySelector("#confirm-password")
    const registerPass = document.querySelector("#register-password")

    fetch('http://localhost:8000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname, 
        email: this.state.email,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword,
      })
    })
    .then(response => response.json())
    .then(user => {
    if (user) {
        console.log(user)
        this.props.loadUser(user)
        // this.props.onRouteChange('home');
    }
    })

    if (formType === "sign-in") {
      console.log(pass.value)
    } 
    else if (formType === "register") {
      console.log(registerPass.value)
      console.log(confirmPass.value)    
    }
}

const handleSubmitSignIn =  () => {
    const firstName = document.querySelector("#first-name")
    const lastName = document.querySelector("#last-name")
    const email = document.querySelector("#email")
    const pass = document.querySelector("#password")
    const confirmPass = document.querySelector("#confirm-password")
    const registerPass = document.querySelector("#register-password")

    
    fetch('http://localhost:8000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
      .then(user => {
        if (user) {
          console.log(user)
        //   this.props.loadUser(user)
        //   this.props.onRouteChange('home');
        }
      })


    if (formType === "sign-in") {
      console.log(pass.value)
    } 
    else if (formType === "register") {
      console.log(registerPass.value)
      console.log(confirmPass.value)    
    }
}






export  {
    handleSeePassword, handleSubmitRegister, handleSubmitSignIn, 
}

// export default handleSubmitRegister





