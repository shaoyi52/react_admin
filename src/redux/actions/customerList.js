export const addCustomer = (customer) => {
  return {
    type: "ADD_CUSTOMER",
    customer,
  };
};

export const delCustomer = (id) => {
  return {
    type: "DEL_CUSTOMER",
    id,
  };
};

export const detailCustomer = (id) => {
  return {
    type: "DETAIL_CUSTOMER",
    id,
  };
};
