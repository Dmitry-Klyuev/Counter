import React from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {Settings} from "./components/settings/Settings";

export function App() {

    return (
        <div className={"container"}>
            <div>
                <Counter />
            </div>
            <div>
                <Settings/>
            </div>
        </div>
    );
}