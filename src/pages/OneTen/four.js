import React, { useReducer } from "react";
import reducer, { defaultState } from "./store/reducer";
import FourChild from "./fourChildThree";
export const ExampleContext = React.createContext(null); //创建createContext上下文

//定义组件
function Counter() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <ExampleContext.Provider value={{ state, dispatch: dispatch }}>
      <FourChild></FourChild>
    </ExampleContext.Provider>
  );
}

export default Counter;
