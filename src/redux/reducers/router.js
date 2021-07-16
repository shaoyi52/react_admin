const defautState = {
  authed: false,
  permissionList: [],
  currentList: [],
  avatar: "",
  name: "",
};

const router = (state = defautState, action) => {
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

export default router;
