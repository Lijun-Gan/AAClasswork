import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
    let store = configureStore(preloadedState);
    
//   // ***phase 1
//   store.dispatch = addLoggingToDispatch(store)
//  // phase 1****

//   // ***phase 2
// store = applyMiddlewares(store,addLoggingToDispatch)
//  // phase 2****

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);

  window.store = store;
});

//   // ***phase 2
// const addLoggingToDispatch = store => next => action => {
//   console.log('Action received:', action);
//   console.log('State pre-dispatch:', store.getState());
//   console.log('next: ', next)
//   let result = next(action);
//   console.log('next(action): ',result)
//   console.log('State post-dispatch:', store.getState());
//   return result
// }

// const applyMiddlewares = (store,...middlewares)=>{
//   let dispatch = store.dispatch;
//   middlewares.forEach( middleware =>{
//     dispatch = middleware(store)(dispatch)
//   })

// //question1 what's difference between overwrite 
// // store.dispatch vs store = Object.assign({},store,{dispatch})

  // return Object.assign({},store,{dispatch})
// } 

/// redux checks to see soemthing changes to see diff object, making a new objects

//  // phase 2****

// //***phase 1
// const addLoggingToDispatch = (store)=>{
//   const dispatch = store.dispatch;
//   return (action) =>{
//     console.log(store.getState());
//     console.log(action);
//     dispatch(action);
//     console.log(store.getState())
//   }
// }
//  //phase 1***

