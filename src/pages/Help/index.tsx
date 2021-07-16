import React from "react";
import GridLayout from "react-grid-layout";
/* const Help = () => {
  return (
    <div>
      <h2>H5-Dooring使用指南</h2>
      <div>
        <h3>1. 首页功能介绍</h3>
      </div>
    </div>
  );
};
 */
const Help = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="a">a</div>
      <div key="b">b</div>
      <div key="c">c</div>
    </GridLayout>
  );
};
export default Help;
