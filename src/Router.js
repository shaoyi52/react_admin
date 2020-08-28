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

const routes = [{ path: "/", component: Layout }];

export default routes;
