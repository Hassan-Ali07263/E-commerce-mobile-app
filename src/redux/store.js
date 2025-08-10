import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// import SagaData from "./saga";
// import createSagaMiddleware from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         thunk: false,
    //         serializableCheck: false,
    //     }).concat(sagaMiddleware),
})

// sagaMiddleware.run(SagaData);

export default store;