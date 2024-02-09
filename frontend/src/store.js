import { createStore } from 'redux';
import userReducers from './reducers/userReducers';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: userReducers
});

export default store;