import promise from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducer from './bookReducer';


const store = createStore(
  //  your reducers here ...
  bookReducer,

  composeWithDevTools(
    applyMiddleware(promise),
    // eslint-disable-next-line
  )
);

export default store;

// exp://10.1.1.23:19000

// mac
// REACT_NATIVE_PACKAGER_HOSTNAME='10.1.1.23' npm start
