import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PriceFilterSelector extends PureComponent {
  static propTypes = {
    action: PropTypes.func,
    filter: PropTypes.object,
  };

  handleOnClickAction = () => {
    const { filter } = this.props;
    this.props.action(filter);
  };

  render() {
    const { filter } = this.props;

    return (
      <div>
        <input type="checkbox" onClick={ this.handleOnClickAction } />
        { filter.label }
      </div>
    );
  }
}
