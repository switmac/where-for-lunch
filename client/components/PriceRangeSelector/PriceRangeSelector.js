import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PriceRangeSelector extends PureComponent {
  static propTypes = {
    action: PropTypes.func,
    theme: PropTypes.string,
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
