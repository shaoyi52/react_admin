import actionTypes from './actionTypes';

const initialState = {
  bookList: [],
};

const pageMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BOOK_LIST_GET:
      return {
        ...state,
        bookList: action.bookList,
      };
    default:
      return state;
  }
};
export default pageMainReducer;