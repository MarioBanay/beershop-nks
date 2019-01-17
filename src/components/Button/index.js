import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.css';

export default class Button extends React.Component {
  render() {
    return <input onClick={this.props.onClick} className={classes.button} disabled={this.props.disabled} type='button' value={this.props.text} />;
  }
}

Button.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
