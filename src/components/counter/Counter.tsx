import React, {useEffect, useState} from "react";
import style from './counter.module.css';
import {useSelector} from "react-redux";
import {rootReducerType} from "../store/store";

export function Counter() {
    // const massage = useSelector<rootReducerType, string | number>(state => state.counter.messagesOnCounter);
    const [displayValue, setDisplayValue] = useState(0)
    const minNumber = useSelector<rootReducerType, number>(state => state.counter.minCounter);
    const maxNumber = useSelector<rootReducerType, number>(state => state.counter.maxCounter);
    useEffect(()=>{
       let startValue = localStorage.getItem('StartValue')
        if (startValue){
            setDisplayValue(Number(startValue))
        }
    },[])

    const incHandler = () => {
        setDisplayValue(displayValue +1)
    }
    const resetButtonHandler = () => {
        setDisplayValue(minNumber)
    }

    return (
        <div className={style.counter}>
            <div className={style.counterName}>
                This is my counter
            </div>
            <div>
                <div className={style.lcd}>{displayValue}</div>
            </div>
            <div className={'buttons'}>
                <button disabled={displayValue === maxNumber} onClick={incHandler}>inc
                </button>
                <button disabled={minNumber === displayValue} onClick={resetButtonHandler}>res
                </button>
            </div>
        </div>
    );
}