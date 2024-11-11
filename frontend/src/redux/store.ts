import { combineReducers, createStore } from '@reduxjs/toolkit'
import { accountReducer } from './reducers/account';

export const rootReducer = combineReducers({
    account: accountReducer,
})
const Store = createStore(rootReducer);
export default Store;