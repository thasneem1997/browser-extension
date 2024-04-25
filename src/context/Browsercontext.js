import { useContext,createContext,useReducer} from "react";
import { BrowserReducer } from "../reducer/Browserreducer";
import React from "react";

const initailvalue= {
    name:"",
    time:"", 
    message:"",
    task:null
}
const browsercontext = createContext(initailvalue);//intailizing context

const BrowserProvider = ({children})=>{
    const [{name,time,message,task},browserdispatch]=useReducer(BrowserReducer,initailvalue)

    return(
        
        <browsercontext.Provider value={{name,time,message,task,browserdispatch}}>
        {children}
        </browsercontext.Provider>
    )

}
const useBrowser=()=>useContext(browsercontext);
export { useBrowser, BrowserProvider}


