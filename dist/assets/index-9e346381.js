import{j as o}from"./index-7ec513a2.js";import{m as l}from"./motion-d43f8b6a.js";const s=({onRouteChange:t,selectedPage:e})=>{const n=()=>{if(e==="home")console.log("HOME ROUTED TO"),document.getElementById("home-title").style.color="yellow";else{if(e!=="home")return null;if(e==="newCollections")console.log("NEW COLLECTIONS ROUTED TO"),document.getElementById("new-collections-title").style.color="yellow";else if(e!=="newCollections")return null}};return o.jsx("section",{id:"newcollections",children:o.jsxs(l.div,{onViewportEnter:n,children:[o.jsx("div",{className:`flex w-full bg-slate-500 h-[30rem] text-center justify-center\r
                    items-center text-4xl\r
             `,children:"NEW COLLECTIONS"}),o.jsx("p",{className:`\r
//                          transition duration-500 hover:text-green-300 cursor-pointer\r
//                        active:text-green-500`,onClick:()=>t("home"),children:"      Home"})]})})};export{s as default};
