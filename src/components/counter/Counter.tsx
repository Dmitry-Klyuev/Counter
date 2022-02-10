import React from "react";
import style from './counter.module.css';
import {useSelector} from "react-redux";
import {rootReducerType} from "../store/store";

export function Counter() {
    const massage = useSelector<rootReducerType, string | number>(state => state.counter.messagesOnCounter)
    const minNumber = useSelector<rootReducerType, number>(state => state.counter.minCounter);
    const maxNumber = useSelector<rootReducerType, number>(state => state.counter.maxCounter);
const setButton = useSelector<rootReducerType, boolean>(state=>state.counter.setButton)

    return (
        <div className={style.counter}>
            <div className={style.counterName}>
                This is my counter
            </div>
            <div >
                <div className={style.lcd}>{ setButton ? minNumber: massage}</div>
            </div>
            <div className={'buttons'}>
                <button disabled={false} onClick={()=>{}}>inc</button>
                <button disabled={false} onClick={()=>{}}>res</button>
            </div>
        </div>
    );
}