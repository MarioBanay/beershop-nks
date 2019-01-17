import React from 'react';
import classes from './Hyperlink.css';

const hyperlink = (props) => {
    return (
        <div className={classes.Hyperlink}>
            <a href={props.link}>{props.text}</a>
        </div>
    );
}

export default hyperlink;