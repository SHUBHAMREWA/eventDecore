import { useEffect, useState } from "react"; 
import { useContext } from "react";
import DarkModeContext from "../Context/darkMode.js" ;

const Nav = ( )=>{  

      const  {dark , dispatch} = useContext(DarkModeContext) ;
     

   
      useEffect(()=>{  
          console.log("HTML classes before:", document.documentElement.className);

          if(dark){
               document.documentElement.classList.add("dark")
          }
          else{
                document.documentElement.classList.remove("dark")
          }

          console.log("HTML classes after:", document.documentElement.className);
      } , [dark])
       

 
       const handleDarkModeChange = (value)=>{ 

              if(value == "dark"){   
           
              
                localStorage.setItem("darkMode" , "true") ;
                dispatch({type : "dark"})

              }
              if(value == "light"){ 
              
                dispatch({type : "light"})
                localStorage.setItem("darkMode" , "false") ;
              }
              if(value == "system"){
                
                dispatch({type : "system"})
                localStorage.setItem("darkMode" , window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) ;
              }
          
       }

    return (

        <div className="w-full bg-red-100 text-gray-900 dark:bg-gray-900 dark:text-white flex p-4 justify-between items-center">
    
            <div className="logo font-bold text-2xl">EventDecore</div>
 

         <div className="">

                 <select
                  value={dark ? "dark" : "light"}
                 onChange={(event)=>handleDarkModeChange(event.target.value)}
                  className="bg-transparent border-none p-2 text-gray-900 dark:bg-gray-800 dark:text-white rounded"> 
                    <option className="bg-white text-black" value="light">Light</option>
                    <option className="bg-black text-white" value="dark">Dark</option>
                    <option className="bg-blue-300" value="system">System</option>

                 </select>

         </div>
            
           
        </div>
    )

}


export default Nav ;