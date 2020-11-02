import React, {
  useState,
  useRef,
  useImperativeHandle,
  useCallback,
} from "react";
import ReactDom from "react-dom";

const FancyInput = React.forwardRef((props, ref) => {
  const [fresh, setFresh] = useState(false);
  const attRef = useRef(0);
  useImperativeHandle(
    ref,
    () => ({
      attRef,
      fresh,
    }),
    [fresh]
  );

  const handleClick = useCallback(() => {
    attRef.current++;
  }, []);

  return (
    <div>
      {attRef.current}
      <button onClick={handleClick}>Fancy</button>
      <button onClick={() => setFresh(!fresh)}>刷新</button>
    </div>
  );
});

const App = (props) => {
  const fancyInputRef = useRef();
  return (
    <React.Fragment>
      <FancyInput ref={fancyInputRef} />
      <button onClick={() => console.log(fancyInputRef.current)}>
        父组件访问子组件的实例属性
      </button>
    </React.Fragment>
  );
};

export default App;
