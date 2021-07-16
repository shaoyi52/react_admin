const initCustomer = {
  name: "yuyi",
  customerType: 1,
  customerID: 123,
  updateTime: "2021-04-16 18:12:20",
  createTime: "2021-04-16 18:12:20",
  telephone: "13188779245",
  key: 1,
};
const customerList = (state = [{ ...initCustomer }], action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return [
        ...state,
        {
          ...action.customer
        },
      ];
    case "Detail_CUSTOMER":
      return state.filter((customer) => {
        return customer.id === action.id;
      })[0];
    default:
      return state;
  }
};

export default customerList;
