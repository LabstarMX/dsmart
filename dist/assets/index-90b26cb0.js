var a=Object.defineProperty;var o=(r,s,t)=>s in r?a(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t;var l=(r,s,t)=>(o(r,typeof s!="symbol"?s+"":s,t),t);import{R as d,j as e,L as c}from"./index-c3912b78.js";const h="http://localhost:8000",x={id:"",type:"",size:"",color:"",quantity:"",email:"",phone:"",description:"",date:new Date},u=()=>e.jsxs("div",{id:"error-message",style:{visibility:"hidden",color:"red"},className:" mb-11 relative h-fit  ",children:[e.jsx("p",{id:"error-message-1",style:{visibility:"hidden",color:"red"},className:" absolute top-0",children:"Something is missing, please fill the form properly."}),e.jsx("p",{id:"error-message-2",style:{visibility:"hidden",color:"red"},className:" absolute top-0",children:"Sorry, an error occured! Please try again."})]});class b extends d.Component{constructor(t){super(t);l(this,"handleErrorMessage",()=>{const t=document.querySelector("#error-message"),n=document.querySelector("#error-message-1"),i=document.querySelector("#error-message-2");t.style.visibility="visible",!this.state.type.length||!this.state.size.length||!this.state.color.length||!this.state.quantity.length||!this.state.email.length||!this.state.phone.length?(i.style.visibility="hidden",n.style.visibility="visible",console.log("error message 1.")):(n.style.visibility="hidden",i.style.visibility="visible",console.log("error message 2."))});l(this,"handleSubmit",()=>{this.handleErrorMessage(),fetch(`${h}/order`,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:this.state.type,size:this.state.size,color:this.state.color,quantity:this.state.quantity,email:this.state.email,phone:this.state.phone,description:this.state.description})}).then(t=>t.json()).then(t=>{t.id&&(console.log(t),this.props.onRouteChange("followUp"))}).catch(t=>{console.log(t),this.handleErrorMessage()})});l(this,"onTypeChange",t=>{this.setState({type:t.target.value})});l(this,"onSizeChange",t=>{this.setState({size:t.target.value})});l(this,"onColorChange",t=>{this.setState({color:t.target.value})});l(this,"onQuantityChange",t=>{this.setState({quantity:t.target.value})});l(this,"onEmailChange",t=>{this.setState({email:t.target.value})});l(this,"onPhoneChange",t=>{this.setState({phone:t.target.value})});l(this,"onDescriptionChange",t=>{this.setState({description:t.target.value})});this.state=x}render(){return e.jsxs("section",{className:"flex flex-col justify-center gap-7  py-[6rem] md:px-11 px-3 w-full ",children:[e.jsxs("div",{className:"w-full flex flex-col md:gap-3 gap-1",children:[e.jsx("span",{className:`md:text-5xl text-3xl text-blue-500 font-bold bg-slate-200\r
                                        py-7 md:px-3 px-0 rounded-md\r
                    `,children:"Create Custom Order"}),e.jsx("span",{className:"text-gray-500 md:text-xl text-lg text-center ",children:"Fill the form below with the specifications/description of the kind of shoes you would like to order."})]}),e.jsxs("div",{className:"flex justify-center h-fit w-full",children:[e.jsx("aside",{className:"md:flex hidden justify-center items-center h-full w-1/4 border//  ",children:e.jsxs("div",{className:`w-[19rem]// w-full h-full drop-shadow-lg bg-black \r
                                        flex flex-col justify-between gap-y-4\r
                                        hover:opacity-50 active:opacity-100\r
                                        opacity-80 cursor-pointer\r
                                        text-yellow-500 text-md overflow-hidden\r
                                        py-4 px-4 rounded-lg\r
                        `,children:[e.jsx(c,{}),e.jsxs("div",{className:"text-center w-full",children:[e.jsxs("p",{children:[this.props.name," "]}),e.jsxs("p",{children:[this.props.email," "]})]})]})}),e.jsxs("form",{className:`py-4 px-6 border flex flex-col// flex-wrap\r
                                        gap-20// gap-y-8 md:gap-x-20 gap-x-9\r
                                        bg-white md:w-3/4 w-full \r
                            `,children:[e.jsxs("div",{className:`flex flex-col items-start \r
                                        md:w-2/4 w-full\r
                        `,children:[e.jsx("span",{className:"text-xl text-blue-700 mb-3 ",children:"Shoe type"}),e.jsx("input",{type:"text",placeholder:"Enter a shoe type",id:"type",className:`w-full border  border-blue-500 \r
                                                outline-blue-800 \r
                                                px-4 py-3 text-blue-700 placeholder-blue-500\r
                                                text-xl rounded-md\r
                                    `,onChange:this.onTypeChange})]}),e.jsxs("div",{className:`flex flex-col items-start \r
                                        md:w-1/4 w-[40%] \r
                        `,children:[e.jsx("span",{className:"text-xl text-blue-700 mb-3 ",children:"Size (EU) "}),e.jsx("input",{type:"numeric",placeholder:"e.g 43",id:"size",min:38,max:48,className:`w-full border border-blue-500 \r
                                                outline-blue-800 \r
                                                px-4 py-3 text-blue-700 placeholder-blue-500\r
                                                text-xl rounded-md\r
                                    `,onChange:this.onSizeChange})]}),e.jsxs("div",{className:`flex flex-col items-start \r
                                        md:w-1/4 w-[40%]\r
                        `,children:[e.jsx("span",{className:"text-xl text-blue-700 mb-3 ",children:"Color"}),e.jsxs("select",{className:`w-full border  border-blue-500\r
                                               outline-blue-800 \r
                                               px-4 py-3 text-blue-700 placeholder-blue-500\r
                                               text-xl rounded-md\r
                                    `,name:"color",id:"color",onChange:this.onColorChange,children:[e.jsx("option",{value:"",children:"--Please choose an option--"}),e.jsx("option",{value:"black",id:"black",children:"Black"}),e.jsx("option",{value:"brown",id:"brown",children:"Brown"}),e.jsx("option",{value:"white",id:"white",children:"White"}),e.jsx("option",{value:"gray",id:"gray",children:"Gray"})]})]}),e.jsxs("div",{className:`flex flex-col items-start \r
                                        md:w-1/4 w-[40%] \r
                        `,children:[e.jsx("span",{className:"text-xl text-blue-700 mb-3 ",children:"Quantity"}),e.jsx("input",{type:"numeric",placeholder:"e.g 5",id:"quantity",min:38,max:48,className:`w-full border border-blue-500 \r
                                                outline-blue-800 \r
                                                px-4 py-3 text-blue-700 placeholder-blue-500\r
                                                text-xl rounded-md\r
                                    `,onChange:this.onQuantityChange})]}),e.jsxs("div",{className:`flex flex-col items-start \r
                                        md:w-2/4 w-full \r
                        `,children:[e.jsx("span",{className:"text-xl text-blue-700 mb-3 ",children:"Email"}),e.jsx("input",{type:"email",placeholder:"Email address",className:`w-full border  border-blue-500 outline-blue-800 \r
                                                px-4 py-3 text-blue-700 placeholder-blue-500\r
                                                text-xl rounded-md\r
                                    `,value:this.props.email?this.props.email:null,onChange:this.onEmailChange})]}),e.jsxs("div",{className:`flex flex-col items-start \r
                                        md:w-2/4 w-full \r
                        `,children:[e.jsx("span",{className:"text-xl text-blue-700 mb-3 ",children:"Phone"}),e.jsx("input",{type:"tel",placeholder:"Enter number",id:"phone",className:`w-full border border-blue-500 \r
                                                outline-blue-800 \r
                                                px-4 py-3 text-blue-700 placeholder-blue-500\r
                                                text-xl rounded-md\r
                                    `,onChange:this.onPhoneChange})]}),e.jsxs("div",{className:`flex flex-col items-start \r
                                        md:w-2/4 w-full \r
                        `,children:[e.jsx("span",{className:"text-xl text-blue-700 mb-3 ",children:"Describe shoes "}),e.jsx("textarea",{type:"text",placeholder:"Add description",id:"description",className:`w-full border  border-blue-500 \r
                                                outline-blue-800  \r
                                                px-4 py-3 text-blue-700 placeholder-blue-500\r
                                                text-xl rounded-md\r
                                    `,onChange:this.onDescriptionChange})]}),e.jsxs("div",{className:"w-full text-center",children:[e.jsx(u,{}),e.jsx("div",{className:`w-full text-white outline-none  \r
                                                px-4 py-4 bg-blue-700 border border-blue-700\r
                                                text-xl rounded-xl cursor-pointer\r
                                                hover:text-blue-700 hover:bg-blue-100  \r
                                                active:bg-gray-300\r
                                    `,onClick:this.handleSubmit,children:"Send order"})]})]})]})]})}}export{b as default};
