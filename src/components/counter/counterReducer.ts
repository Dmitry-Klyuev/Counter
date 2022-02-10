export type stateType = {
    minCounter: number
    maxCounter: number
    messagesOnCounter: string | number
    setButton: boolean
}

let initialState = {
    minCounter: 0,
    maxCounter: 0,
    messagesOnCounter: 'enter value and press "set"',
    setButton: false

};
type counterActionsType  = setMaxCounterType | setMinCounterType

export const CounterReducer = (state: stateType = initialState, action: counterActionsType) => {
    switch (action.type) {
        case "SETMAXVALUE":
            return {...state, maxCounter: action.value}
        case "SETMINVALUE":{
            return {...state, minCounter: action.value}
        }
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
export const setButtonPress = ()=>{
    return {}
}

export type setMaxCounterType= ReturnType<typeof setMaxCounter>
export type setMinCounterType = ReturnType<typeof setMinCounter>