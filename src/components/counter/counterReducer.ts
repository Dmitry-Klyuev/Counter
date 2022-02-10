import {Dispatch} from "redux";
import { rootReducerType } from "../store/store";

export type stateType = typeof initialState

let initialState = {
    minCounter: 1,
    maxCounter: 6,
    // messagesOnCounter: 'enter value and press "set"',

};
type counterActionsType = setMaxCounterType
    | setMinCounterType
    | setButtonPressType

export const CounterReducer = (state: stateType = initialState, action: counterActionsType): stateType => {
    switch (action.type) {
        case "SETMAXVALUE":
            return {...state, maxCounter: action.value};
        case "SETMINVALUE": {
            return {...state, minCounter: action.value};
        }
        // case "SETMESSAGEVALUE":{
        //     return {...state, messagesOnCounter: action.value}
        // }
        default:
            return state;
    }

};

export const setMaxCounter = (value: number) => {
    return {type: 'SETMAXVALUE', value} as const;
};
export const setMinCounter = (value: number) => {
    return {type: 'SETMINVALUE', value} as const;
};
export const setButtonPress = (value: string) => {
    return {type: 'SETMESSAGEVALUE', value} as const;
};

// THUNK
export const setButtonSettingPressTC = () => (dispatch: Dispatch, getState: ()=>rootReducerType ) => {
   let startValue = getState().counter.minCounter
    let maxValue = getState().counter.maxCounter
    localStorage.setItem('StartValue', JSON.stringify(startValue) )
    localStorage.setItem('MaxValue', JSON.stringify(maxValue))
}

export type setMaxCounterType = ReturnType<typeof setMaxCounter>
export type setMinCounterType = ReturnType<typeof setMinCounter>
export type setButtonPressType = ReturnType<typeof setButtonPress>