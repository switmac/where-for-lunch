import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Condition.css';
import Input from '../Input/Input.js';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
  };

  handleOnBlurAction = (e) => {
    this.props.action(e.target.value);
  }

  render() {
    const { condition: { radius } } = this.props;
    return (
      <div className={styles.root}>
        <span>radius:</span>
        <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
        <span>meters</span>
      </div>
    );
  }
}
