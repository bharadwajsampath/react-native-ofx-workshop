import { createActions, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const actionTypes = {
  INIT: 'INIT'
};


export const actions = createActions({
});

const reducer = handleActions({
  [actionTypes.INIT]: (state, { payload }) => state.set('isHeads', payload),
},
new Map({
  loading: false
}));

export default reducer;
