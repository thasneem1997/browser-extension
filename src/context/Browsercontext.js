import { useContext,createContext,useReducer} from "react";
import { BrowserReducer } from "../reducer/Browserreducer";
import React from "react";

const initailvalue= {
    name:""
}
const browsercontext = createContext(initailvalue);//intailizing context

const BrowserProvider = ({children})=>{
    const [{name},browserdispatch]=useReducer(BrowserReducer,initailvalue)

    return(
        
        <browsercontext.Provider value={{name,browserdispatch}}>
        {children}
        </browsercontext.Provider>
    )

}
const useBrowser=()=>useContext(browsercontext);
export { useBrowser, BrowserProvider}


