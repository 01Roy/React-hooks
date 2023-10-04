import Parent from "./Components/Callbackhook/Parent"
import ComponetC from "./Components/ContextAPI/ComponetC"
import Datafecthing from "./Components/Datafecthing"
import HookCounterOne from "./Components/HookCounterOne"
import HookMouse from "./Components/HookMouse"
import IntervalhookCounter from "./Components/IntervalhookCounter"
import MouseContainer from "./Components/MouseContainer"
import ComponenetC from "./Components/ReducerandContext/ComponenetC"
import ComponentA from "./Components/ReducerandContext/ComponentA"
import ComponentB from "./Components/ReducerandContext/ComponentB"
import COuntIne from "./Components/UseReducer/COuntIne"
import CounterTwo from "./Components/UseReducer/CounterTwo"
import Countthree from "./Components/UseReducer/Countthree"
import UseSatehook from "./Components/UseSatehook"
import UseSatethree from "./Components/UseSatethree"
import UseStateTwo from "./Components/UseStateTwo"
import UseStatefour from "./Components/UseStatefour"
import React, { useReducer, useContext } from "react"
import CounterOne from "./Components/Usememo/CounterOne"
import FocusInput from "./Components/UseRef/FocusInput"
import HookTimer from "./Components/UseRef/HookTimer"
import DocTitle from "./Components/Customhook/DocTitle"
import CounterHook from "./Components/Customhook/CounterHook"
import CounterHookTwo from "./Components/Customhook/CounterHookTwo"
import UseInput from "./Components/Customhook/UseInput"

// CONTEXT API
export const UserContext = React.createContext()
export const UserChannel = React.createContext()

// usereducer + useContext
export const CountContext = React.createContext()
let initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case "decrement": return state - 1;
    case 'reset': return initialState;
    default: state
  }
}



function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Learning about hooks</h2>
      {/* using useState */}
      {/* <UseSatehook /> */}

      {/* useState prev state */}
      {/* <UseStateTwo /> */}

      {/* using useState with objects */}
      {/* <UseSatethree /> */}

      {/* using useState with Array */}
      {/* <UseStatefour /> */}

      {/* ****** USEEFFECT HOOK ******** */}
      {/* <HookCounterOne /> */}

      {/* use useEffect using at once */}
      {/* <HookMouse /> */}

      {/* using Cleanup function in UseEffect */}
      {/* <MouseContainer /> */}

      {/* useEffect using dependences and seInteraval */}
      {/* <IntervalhookCounter /> */}

      {/* data fetching useEffec and axios */}
      {/* <Datafecthing /> */}

      {/* ********CONTEXT API************ */}
      {/* <UserContext.Provider value={"Subham"}>
        <UserChannel.Provider value={"Code Primer"}>
          <ComponetC />
        </UserChannel.Provider>
      </UserContext.Provider> */}

      {/* **********USING USEREDUCER************* */}
      {/* <COuntIne /> */}
      {/* <CounterTwo /> */}
      {/* <Countthree /> */}


      {/* ***************USING useReducer and useContext********************* */}
      {/* <h2>Learning useReducer and useContext</h2>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponenetC />
      </CountContext.Provider> */}


      {/* **************USING CALLBACK HOOK******************* */}
      {/* <Parent /> */}

      {/* ************USEMEMO****************** */}
      {/* <CounterOne /> */}

      {/* ********USE REF HOOK*********** */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}

      {/* **********USING CUSTOME HOOK*********************** */}
      {/* <DocTitle /> */}
      {/* <CounterHook /> */}
      {/* <CounterHookTwo /> */}
      <UseInput />


    </>
  )
}

export default App
