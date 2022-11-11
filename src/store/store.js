import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// const loggerMiddleware = (store) => (next) => (action) => {
//     if(!action.type){
//         next(action);
//     };
//     console.log("type:", action.type);
//     console.log("payload:", action.payload);
//     console.log("current state", store.getState());
//     next(action);
//     console.log("next state", store.getState());

// };

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer,undefined,composedEnhancers);

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: undefined,
//   enhancers: composedEnhancers,
// });
