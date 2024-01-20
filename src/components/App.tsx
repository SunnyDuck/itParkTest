import React, {useEffect} from 'react';
import classes from '@/components/App.module.css'
import bg_top from '@/assets/bg_top.png'
import {launchGame} from "@/phaserGame";

export const App = () => {

    useEffect(() => {
        launchGame();
    }, []);

    return (
        <div>
        </div>
    );
};

export default App;