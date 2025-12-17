 import DarkModeContext from "../darkMode.js";
 import { useReducer } from "react" ;

 const DarkModeProvider = ({children}) => {

 

      const initialState = {
                  dark : localStorage.getItem("darkMode") === "true" ? true : false 
      } ;

      const reducer = (state , action)=>{  

  console.log("Reducer called with action:", action);
              switch(action.type){

                 case "dark" :   
                 return {... state , dark : true}

                 case "light" : 
                 return {...state , dark : false}   

                 case "system" : {
                    return {...state , dark : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches }
                 }
              }

      }
                          


    const [value , dispatch]  = useReducer(reducer , initialState )





    return (
        <DarkModeContext.Provider value={{...value , dispatch}} >
            {children}
        </DarkModeContext.Provider>
    ) ;
}   
export { DarkModeProvider } ;