import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Condition.css';
import Input from '../Input/Input.js';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
  };

  constructor() {
    super();
    this.state = { isEdit: false };
  }

  handleOnBlurAction = (e) => {
    this.setState({ isEdit: false });
    this.props.action(e.target.value);
  }
  open = () => {
    this.setState({ isEdit: true });
  }

  render() {
    const { condition: { radius } } = this.props;
    const { isEdit } = this.state;
    return (
      <div className={styles.root}>
        { isEdit ?
          <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input> :
          <div>radius: { radius } <span onClick={this.open}>Edit</span></div>
        }
      </div>
    );
  }
}
