import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {CounterReducer} from "../counter/counterReducer";


const rootReducer = combineReducers( {
    counter: CounterReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))


export type rootReducerType = ReturnType<typeof rootReducer >
export type rootStore = typeof store

// @ts-ignore
window.store=store

