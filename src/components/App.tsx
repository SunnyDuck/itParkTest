import React from 'react';
import classes from './App.module.css'

export const App = () => {
    return (
        <div>
            Hello World
            <button className={classes.button}>Check</button>
        </div>
    );
};

export default App;