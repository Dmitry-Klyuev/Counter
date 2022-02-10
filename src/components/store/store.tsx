import {combineReducers, createStore} from 'redux';
import {CounterReducer} from "../counter/counterReducer";

const rootReducer = combineReducers( {
    counter: CounterReducer
})

export let store = createStore(rootReducer)

export type rootReducerType = ReturnType<typeof rootReducer >

// @ts-ignore
window.store=store
