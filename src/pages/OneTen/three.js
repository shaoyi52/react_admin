import React, { Fragment, useReducer } from "react";
import reducer, { defaultState } from "./store/reducer";
import { onChangeCount } from "./store/action";

//定义函数组件
function Three() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Fragment>
      <button onClick={() => dispatch(onChangeCount(state.count))}>
        触发dispatch-action
      </button>
      <p>Count:{state.count}</p>
    </Fragment>
  );
}

export default Three;
