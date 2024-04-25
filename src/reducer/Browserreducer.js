export const BrowserReducer = (state,action) => {
switch(action.type)
{
  case "NAME":
    return {
      ...state,
      name:action.payload

    }
    case "TIME":
    return {
      ...state,
      time:action.payload

    }
    case "MESSAGE":
    return {
      ...state,
      message:action.payload>=0&&action.payload<12?'Good morning':
      action.payload>=12 && action.payload<=17?'Good afternoon':'Good Night'

    }
    case "TASK":
    return {
      ...state,
      task:action.payload

    }
    case "CLOSE":
    return {
      ...state,
      task:null

    }

    default :
    return state
    

}
}
