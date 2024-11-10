import { combineReducers, createStore } from '@reduxjs/toolkit'
import { accountReducer } from './reducers/user';
const rootReducer = combineReducers({
    account: accountReducer,
})
const store = createStore(rootReducer);
export default store;