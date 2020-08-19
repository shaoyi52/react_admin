import actionTypes from './actionTypes';

const getBookList = () => {
  const bookList = [{
    id: '1',
    title: '123',
    description: '123',
  }, {
    id: '2',
    title: '234',
    description: '234',
  }];
  return {
    type: actionTypes.BOOK_LIST_GET,
    bookList,
  };
};

export default {
  getBookList,
};