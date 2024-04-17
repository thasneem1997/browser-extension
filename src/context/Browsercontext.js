import { useContext,createContext} from "react";
import React from "react";

const initailvalue={
    name:" "
}
const Browsercontext = createContext(initailvalue);
const Browserprovider = ({Children})=>{
    return(
        <Browsercontext.Provider>
        {Children}
        </Browsercontext.Provider>
    )

}
const useBrowser=()=>useContext(Browsercontext);
export {useBrowser,Browserprovider}


