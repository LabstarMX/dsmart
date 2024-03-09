import React from 'react'
import image1 from "@/assets/image6.png"
import './index.css'
import Logo from '../../shared/Logo';


const SERVERURL = `http://localhost:8000`;
const initialState = {
    id: '',
    type: '',
    size: '',
    color: '',
    quantity: '',
    email: '',
    phone: '',
    description: '',
    date: new Date(),
};    


const ErrorMessageDisplay = () => {
    return (
        <div id="error-message" style={{ visibility: 'hidden', color: 'red' }}
                    className=' mb-11 relative h-fit  '
        >   
            <p id="error-message-1" style={{ visibility: 'hidden', color: 'red' }}
                    className=' absolute top-0'
            >
                Something is missing, please fill the form properly.
            </p>
                
            <p id="error-message-2" style={{ visibility: 'hidden', color: 'red' }}
                    className=' absolute top-0'
            >
                Sorry, an error occured! Please try again.
            </p>                                
        </div>
    )
}

class CreateCustomOrder extends React.Component {
    constructor(props) {
      super(props);
      this.state = initialState;
    }    
    // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    


    handleErrorMessage = () => {
        const errorMessage = document.querySelector("#error-message");
        const errorMessage1 = document.querySelector("#error-message-1");
        const errorMessage2 = document.querySelector("#error-message-2");
        errorMessage.style.visibility = "visible"
        if (!this.state.type.length || !this.state.size.length || !this.state.color.length 
            || !this.state.quantity.length || !this.state.email.length 
            || !this.state.phone.length ) {
            
            errorMessage2.style.visibility = "hidden"
            errorMessage1.style.visibility = "visible"
            console.log('error message 1.')
        } else {
            errorMessage1.style.visibility = "hidden"
            errorMessage2.style.visibility = "visible"
            console.log('error message 2.')
        }      
    }
    
    
    handleSubmit = () => {
        this.handleErrorMessage()       

        fetch(`${SERVERURL}/order`, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            type: this.state.type,
            size: this.state.size,
            color: this.state.color,
            quantity: this.state.quantity, 
            email: this.state.email,
            phone: this.state.phone,
            description: this.state.description,
          })
        })
        .then(response => response.json())
        .then(order => {
            if (order.id) {
                console.log(order)
                this.props.onRouteChange('followUp')
            }
            
        })
        .catch(err => {
            console.log(err) 
            this.handleErrorMessage()
        })
    }

    onTypeChange = (event) => {
        this.setState({type: event.target.value})
    }

    onSizeChange = (event) => {
        this.setState({size: event.target.value})
    }

    onColorChange = (event) => {
        this.setState({color: event.target.value})
    }

    onQuantityChange = (event) => {
        this.setState({quantity: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPhoneChange = (event) => {
        this.setState({phone: event.target.value})
    }

    onDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }


    render() {
        return (
            <section 
                    // onLoad={this.isSignedIn(true)}
                    className='flex flex-col justify-center gap-7  py-[6rem] md:px-11 px-3 w-full '> 
                <div className='w-full flex flex-col md:gap-3 gap-1' >
                    <span className='md:text-5xl text-3xl text-blue-500 font-bold bg-slate-200
                                        py-7 md:px-3 px-0 rounded-md
                    '>
                        Create Custom Order
                    </span>
                    <span className='text-gray-500 md:text-xl text-lg text-center ' >
                        Fill the form below with the specifications/description of the kind of shoes you would like to order. 
                    </span>
                </div>
                <div className='flex justify-center h-fit w-full'>
                    <aside className='md:flex hidden justify-center items-center h-full w-1/4 border//  '>
                        <div className='w-[19rem]// w-full h-full drop-shadow-lg bg-black 
                                        flex flex-col justify-between gap-y-4
                                        hover:opacity-50 active:opacity-100
                                        opacity-80 cursor-pointer
                                        text-yellow-500 text-md overflow-hidden
                                        py-4 px-4 rounded-lg
                        '>
                            <Logo />
                            <div className='text-center w-full'>
                                <p>{this.props.name} </p>
                                <p>{this.props.email} </p>
                            </div>
                            
                        </div>
                    
                        
                    </aside>
                    <form   className='py-4 px-6 border flex flex-col// flex-wrap
                                        gap-20// gap-y-8 md:gap-x-20 gap-x-9
                                        bg-white md:w-3/4 w-full 
                            '
                    > 
                        <div className='flex flex-col items-start 
                                        md:w-2/4 w-full
                        ' >
                            <span className='text-xl text-blue-700 mb-3 ' >Shoe type</span>
                            <input type='text' placeholder='Enter a shoe type' id='type'
                                    className='w-full border  border-blue-500 
                                                outline-blue-800 
                                                px-4 py-3 text-blue-700 placeholder-blue-500
                                                text-xl rounded-md
                                    '
                                    onChange={this.onTypeChange}
                                    
                            />
                        </div>
                        <div className='flex flex-col items-start 
                                        md:w-1/4 w-[40%] 
                        ' >
                            <span className='text-xl text-blue-700 mb-3 ' >Size (EU) </span>
                            <input type='numeric' placeholder='e.g 43' id='size'
                                    min={38} max={48}
                                    className='w-full border border-blue-500 
                                                outline-blue-800 
                                                px-4 py-3 text-blue-700 placeholder-blue-500
                                                text-xl rounded-md
                                    '
                                    onChange={this.onSizeChange}
                            />
                        </div>
                        <div className='flex flex-col items-start 
                                        md:w-1/4 w-[40%]
                        ' >
                            <span className='text-xl text-blue-700 mb-3 ' >Color</span>
                            <select className='w-full border  border-blue-500
                                               outline-blue-800 
                                               px-4 py-3 text-blue-700 placeholder-blue-500
                                               text-xl rounded-md
                                    '
                                    name='color' id='color'
                                    onChange={this.onColorChange}
                            >
                                <option value='' >--Please choose an option--</option>
                                <option value='black' id='black'>Black</option>
                                <option value='brown' id='brown'>Brown</option>
                                <option value='white' id='white'>White</option>
                                <option value='gray' id='gray'>Gray</option>
                            </select>
                        </div>
                        <div className='flex flex-col items-start 
                                        md:w-1/4 w-[40%] 
                        ' >
                            <span className='text-xl text-blue-700 mb-3 ' >Quantity</span>
                            <input type='numeric' placeholder='e.g 5' id='quantity'
                                    min={38} max={48}
                                    className='w-full border border-blue-500 
                                                outline-blue-800 
                                                px-4 py-3 text-blue-700 placeholder-blue-500
                                                text-xl rounded-md
                                    '
                                    onChange={this.onQuantityChange}
                            />
                        </div>
                        <div className='flex flex-col items-start 
                                        md:w-2/4 w-full 
                        ' >
                            <span className='text-xl text-blue-700 mb-3 ' >Email</span>
                            <input type='email' placeholder='Email address'
                                    className='w-full border  border-blue-500 outline-blue-800 
                                                px-4 py-3 text-blue-700 placeholder-blue-500
                                                text-xl rounded-md
                                    '
                                    value={this.props.email ? this.props.email : null}
                                    onChange={this.onEmailChange}
                            />
                        </div>
                        <div className='flex flex-col items-start 
                                        md:w-2/4 w-full 
                        ' >
                            <span className='text-xl text-blue-700 mb-3 ' >Phone</span>
                            <input type='tel' placeholder='Enter number' id='phone'
                                    className='w-full border border-blue-500 
                                                outline-blue-800 
                                                px-4 py-3 text-blue-700 placeholder-blue-500
                                                text-xl rounded-md
                                    '
                                    onChange={this.onPhoneChange}
                            />
                        </div>
                        <div className='flex flex-col items-start 
                                        md:w-2/4 w-full 
                        ' >
                            <span className='text-xl text-blue-700 mb-3 ' >Describe shoes </span>
                            <textarea type='text' placeholder='Add description' id='description'
                                    className='w-full border  border-blue-500 
                                                outline-blue-800  
                                                px-4 py-3 text-blue-700 placeholder-blue-500
                                                text-xl rounded-md
                                    '
                                    onChange={this.onDescriptionChange}
                            />
                        </div>
                        {/* <div className='flex flex-col items-start 
                                        md:w-2/4 w-full  rounded-md
                        '>
                            <span className='text-xl text-blue-700 mb-3 ' >
                            Add sample image(s)
                            </span>
                            <input type='file' accept='.png, .jpg, .jpeg' multiple
                                    className='w-full '
                                    onChange={this.onImageChange}
                            />
                        </div> */}
                        <div className='w-full text-center'>                             
                            {/*ERROR MESSAGE  */}
                            <ErrorMessageDisplay />
                            <div
                                    className='w-full text-white outline-none  
                                                px-4 py-4 bg-blue-700 border border-blue-700
                                                text-xl rounded-xl cursor-pointer
                                                hover:text-blue-700 hover:bg-blue-100  
                                                active:bg-gray-300
                                    '
                                    onClick={this.handleSubmit}
                            >
                            Send order
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default CreateCustomOrder