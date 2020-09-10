import AsyncComponent from "./utils/asyncComponent";
const path = require("path");
const files = require.context("./pages", true, /\.js$/);
const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".js");
  modules[name] = files(key).default || files(key);
});
console.log(modules);
const Home = AsyncComponent(() => import("./pages/Home"));
const Layout = AsyncComponent(() => import("./pages/Layout"));
const SecondLevelComponent = AsyncComponent(() =>
  import("./common/SecondLevelComponent")
);

const routes = [
  { path: "/home", component: Home },
  {
    path: "/layout",
    component: Layout,
    //exact: true,
    children: [
      {
        path: "/layout/oneTen",
        component: SecondLevelComponent,
        pathName: "oneTen",
        name: "1到10",
        icon: "github",
        children: [
          {
            path: "/layout/oneTen/one",
            pathName: "one",
            component: modules.one,
            name: "技巧1",
            icon: "github",
          },
          {
            path: "/layout/oneTen/two",
            pathName: "two",
            component: modules.two,
            name: "技巧2",
            icon: "github",
          },
          {
            path: "/layout/oneTen/three",
            pathName: "three",
            component: modules.three,
            name: "技巧3",
            icon: "github",
          },
          {
            path: "/layout/oneTen/four",
            pathName: "four",
            component: modules.four,
            name: "技巧4",
            icon: "github",
          },
          {
            path: "/layout/oneTen/five",
            pathName: "five",
            component: modules.five,
            name: "技巧5",
            icon: "github",
          },
          {
            path: "/layout/oneTen/six",
            pathName: "six",
            component: modules.six,
            name: "技巧6",
            icon: "github",
          },
          {
            path: "/layout/oneTen/seven",
            pathName: "seven",
            component: modules.seven,
            name: "技巧7",
            icon: "github",
          },
        ],
      },
    ],
  },
];

export default routes;