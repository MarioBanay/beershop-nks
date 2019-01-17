import React from 'react';
import classes from './RoundIconButton.css';

const roundIconButton = (props) => {
    return (
        <div className={classes.RoundIconButton} onClick={props.clicked}>
            <a href={props.link}>
                <img src={props.icon} />
            </a>
        </div>
    );
}

export default roundIconButton;