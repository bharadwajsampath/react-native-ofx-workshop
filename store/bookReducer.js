import { createActions, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import BookApi from '../api/books';

const actionTypes = {
  GET_ALL_BOOKS: 'GET_ALL_BOOKS',
  UPDATE_BOOK: 'UPDATE_BOOK'
};


export const actions = createActions({
  [actionTypes.GET_ALL_BOOKS]: () => BookApi.all(),

});

const reducer = handleActions({
  [`${actionTypes.GET_ALL_BOOKS}_FULFILLED`]: (state, { payload }) => state.set('books', Object.values(payload)),
},
new Map({
  books: []
}));

export default reducer;
