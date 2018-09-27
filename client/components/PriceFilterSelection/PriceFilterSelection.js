import React from 'react';
import PropTypes from 'prop-types';
import PriceRangeSelector from 'components/PriceRangeSelector/PriceRangeSelector';

const PriceFilterSelection = ({ action, condition }) => {
  const { priceFilterList } = condition;
  const filters = priceFilterList.map((filter, index) => {
    return <PriceRangeSelector key={index} action={ action } filter={ filter }>{filter.id} {filter.label} </PriceRangeSelector>;
  });

  return (
    <div>
      <p>Price Selection</p>
      { filters }
    </div>
  );
};

PriceFilterSelection.propTypes = {
  action: PropTypes.func,
  condition: PropTypes.object,
};

export default PriceFilterSelection;
