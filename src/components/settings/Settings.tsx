import React, {ChangeEvent, useState} from "react";
import style from './settings.module.css';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../store/store";
import {setMaxCounter, setMinCounter} from "../counter/counterReducer";

export const Settings = () => {
    const [error, setError] = useState('')
    const minNumber = useSelector<rootReducerType, number>(state => state.counter.minCounter);
    const maxNumber = useSelector<rootReducerType, number>(state => state.counter.maxCounter);

    const dispatch = useDispatch();
    const maxNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxCounter(+(e.currentTarget.value)));
    };
    const minNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinCounter(+(e.currentTarget.value)))
    }

    const settingButtonHandler = () => {
        if (minNumber < 0 || maxNumber < 0) {
            setError('значение не можеть быть отрицательным')
        }else if (minNumber > maxNumber) {
            setError('Макс. значение должно быть больше мин.')
        }else {

            localStorage.setItem('fff','fff')
        }
    }
    return (
        <div className={style.settings}>
            <div className={style.settingsName}>
                Settings
            </div>
            <div className={style.input}>
                <span>min value: </span>
                <input type="number" value={minNumber}
                       onChange={(e) => {
                           minNumberHandler(e);
                       }}
                />
            </div>
            <div className={style.input}>
                <span>max value: </span>
                <input type="number"
                       value={maxNumber}
                       onChange={(e) => {
                           maxNumberHandler(e);
                       }}
                />
            </div>
            <div className={style.error}>{error}</div>
            <button onClick={settingButtonHandler}>Set</button>
        </div>
    );

};