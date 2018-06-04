import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.css';

const Input = ({ onBlurAction, defaultValue }) => (
  <div className={styles.root}>
    <input type="text" onBlur={onBlurAction} defaultValue={defaultValue}></input>
  </div>
);

Input.propTypes = {
  onBlurAction: PropTypes.func,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};


export default Input;
