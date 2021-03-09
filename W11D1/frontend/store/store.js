import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer, 
    preloadedState,
    // Phase 3: Using Redux applyMiddleware
    applyMiddleware(addLoggingToDispatch,testingMiddleware)
    // // Phase 3***:
    );
 
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });

  return store;
}

  // ***// Phase 3: Using Redux applyMiddleware

// const addLoggingToDispatch = store => next => action => {
//   console.log('Action received:', action);
//   console.log('State pre-dispatch:', store.getState());
//   console.log('next: ', next)
//   let result = next(action);
//   console.log('next(action): ',result)
//   console.log('State post-dispatch:', store.getState());
//   return result
// }

////question4, hwo to get the store from line 9?
/// why do we need return result on phase 2? not phase 3?
// check screenshot questions


const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  return next(action);
  console.log(store.getState());
};
 // // Phase 3***:


 const testingMiddleware = store => next => action => {
  console.log("testing");
  next(action);
};

export default configureStore;

