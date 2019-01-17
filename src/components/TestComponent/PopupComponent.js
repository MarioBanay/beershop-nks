import React, { Component } from 'react';
import classes from './PopupComponent.css';

class PopupComponent extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        return (
            <div className={classes.Container}>
                <div className={this.state.isHovering ? classes.Modal : classes.Hide}>
                    {this.props.popupText}
                </div>
                <div
                    className={classes.Component}
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PopupComponent;