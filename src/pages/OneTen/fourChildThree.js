import React, { useEffect, useContext } from "react";
import { Button } from "antd";

import { ExampleContext } from "./four";
import { onChangeCount } from "./store/action";
const Example = () => {
  const exampleContext = useContext(ExampleContext);
  useEffect(() => {
    console.log("变化执行啦");
  }, [exampleContext.state.count]);

  return (
    <div>
      <p>值为{exampleContext.state.count}</p>
      <Button
        onClick={() =>
          exampleContext.dispatch(onChangeCount(exampleContext.state.count))
        }
      >
        点击加 1
      </Button>
    </div>
  );
};

export default Example;
