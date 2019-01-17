import React from 'react';
import classes from './Header.css';

const header = (props) => {
    return (
        <header className={classes.Header}>
            <img className={classes.Logo} src={props.logo} alt="logo" />
        </header>
    );
};

export default header;