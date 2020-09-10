import One from "../pages/OneTen/one";
const defautState = {
  authed: false,
  permissionList: [
    {
      path: "/Layou/oneTen/one",
      pathName: "oneTen",
      name: "1到10",
      component: One,
      icon: "pie-chart",
    },
  ],
  currentList: [],
  avatar: "",
  name: "",
};

const statusReducer = (state = defautState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "AUTH_CHANGE":
      return { ...state };
    case "PERMISSION_CHANGE":
      newState.permissionList = action.permissionList;
      newState.currentList = action.currentList;
      return newState;
    case "CURRENT_CHANGE":
      newState.currentList = action.currentList;
      return newState;

    default:
      return state;
  }
};

export default statusReducer;
