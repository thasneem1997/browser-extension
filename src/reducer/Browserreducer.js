export const BrowserReducer = (state,action) => {
switch(action.type)
{
  case "NAME":
    return {
      ...state,
      name:action.payload

    }
    default :
    return state
    

}
}
