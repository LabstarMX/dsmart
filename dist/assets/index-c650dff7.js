import{r as n,j as e,L as m}from"./index-c3912b78.js";import"./anchor-link-0ae6a742.js";const u=({query:i})=>{const[t,l]=n.useState(!1);return n.useEffect(()=>{const s=window.matchMedia(i);s.matches!==t&&l(s.matches);const o=()=>l(s.matches);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[t,i]),t};function f({title:i,titleId:t,...l},s){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},l),i?n.createElement("title",{id:t},i):null,n.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z",clipRule:"evenodd"}))}const h=n.forwardRef(f),p=h,g=({isTopOfPage:i,onRouteChange:t,selectedPage:l,isSignedIn:s,name:o})=>{const c="flex items-center justify-between",a=u("(min-width: 960px)"),[d,r]=n.useState(!1),x=i?"bg-white":"bg-blue-900 drop-shadow";return e.jsxs("nav",{className:`${x} ${c} fixed top-0 z-30
                    w-full 
                    py-2  shadow-md bg-blue-900//
                    bg-gradient-to-b from-blue-700 to-teal-500 
                    opacity-[0.9]
    `,children:[e.jsx("div",{className:`${c} mx-auto  w-full flex justify-center items-center  `,children:e.jsxs("div",{className:`${c} mx-auto w-full md:gap-16 flex justify-between items-center 
                        text-center 
        `,children:[e.jsx(m,{}),e.jsxs("div",{className:`flex  text-white gap-2 md:gap-4 text-center \r
                          items-center justify-between text-sm  w-fit\r
                          h-full overflow-hidden  font-[calibri] \r
                            \r
          `,children:[e.jsxs("div",{className:`h-full  md:flex text-white gap-8 text-center md:w-fit\r
                        items-center justify-end text-xl hidden`,children:[e.jsx("p",{className:`transition duration-500 
                          hover:text-green-300 cursor-pointer
                          active:text-green-500 inline-block`,onClick:()=>t("home"),id:"home-title",children:"      Home"}),e.jsx("p",{className:`transition duration-500 hover:text-green-300 cursor-pointer
                        active:text-green-500 inline-block`,onClick:()=>t("products"),id:"products-title",children:"      Products"}),e.jsx("p",{className:`transition duration-500 hover:text-green-300 pointer cursor-pointer
                          active:text-green-500 inline-block`,onClick:()=>t("collections"),id:"collections-title",children:"      Collections"}),e.jsx("p",{className:`transition duration-500 hover:text-green-300 cursor-pointer
                          active:text-green-500 inline-block`,onClick:()=>t("createCustomOrder"),id:"custom-title",children:"      Custom"}),e.jsx("p",{className:`transition duration-500 hover:text-green-300 cursor-pointer
                          active:text-green-500 inline-block`,onClick:()=>t("contact"),id:"contact-title",children:"      Contact"})]}),e.jsx("div",{className:`${c} mx-auto gap-9 md:w-1/6 w-full pr-2 flex justify-end 
                                  overflow-hidden  
            `,children:e.jsx("div",{className:`${c} mx-auto  w-full overflow-hidden 
                                flex justify-end
              `,children:o?e.jsxs("p",{className:`text-white text-xl w-fit// w-full flex justify-end overflow-hidden  \r
                                  font-[calibri] cursor-pointer \r
                                  hover:text-green-300 active:text-gray-400 gap-x-3\r
                  `,children:[o,a?null:e.jsx("div",{onClick:()=>r(!0),children:e.jsx(p,{className:"h-7 w-7 text-white"})})]}):e.jsx("div",{className:"w-full flex justify-end",children:e.jsx("p",{className:`transition duration-500 hover:text-green-300 cursor-pointer
                              active:text-green-500 inline-block text-xl text-white`,onClick:()=>t("signIn"),id:"womens-footwear-title",children:"      Login"})})})})]})]})}),!a&&d&&e.jsxs("div",{className:`fixed right-0 bottom-0 z-10 h-full w-[300px]// w-fit \r
                        bg-gradient-to-b from-gray-100 to-gray-300 \r
                        drop-shadow-xl  overflow-hidden//\r
                        \r
                        `,children:[e.jsx("div",{className:"flex justify-end px-5 py-2 ",children:e.jsx("button",{onClick:()=>r(!d),children:e.jsx("span",{className:"h-6 w-6 text-6xl text-gray-700 ",children:"x"})})}),e.jsxs("div",{className:`flex flex-col gap-11  justify-center// //items-center \r
                            font-bold text-3xl text-gray-800 px-7 \r
                            \r
            `,children:[e.jsx("p",{className:`transition duration-500 hover:text-green-300 cursor-pointer
                      active:text-green-500 inline-block`,onClick:()=>{t("home"),r(!1)},id:"home-title",children:"      Home"}),e.jsx("p",{className:`transition duration-500 hover:text-green-300 cursor-pointer
                      active:text-green-500 inline-block`,onClick:()=>{t("products"),r(!1)},id:"all-products-title",children:"      Products"}),e.jsx("p",{className:`transition duration-500 hover:text-green-300 pointer cursor-pointer
                        active:text-green-500 inline-block`,onClick:()=>{t("collections"),r(!1)},id:"new-collections-title",children:"      Collections"}),e.jsx("p",{className:`transition duration-500 hover:text-green-300 cursor-pointer
                        active:text-green-500 inline-block`,onClick:()=>{t("createCustomOrder"),r(!1)},id:"create-custom-order-title",children:"      Custom"}),e.jsx("p",{className:`transition duration-500 hover:text-green-300 cursor-pointer
                        active:text-green-500 inline-block`,onClick:()=>{t("contact"),r(!1)},id:"womens-footwear-title",children:"      Contact"})]})]})]})};export{g as default};
