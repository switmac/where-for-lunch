import React from 'react';
import PropTypes from 'prop-types';
import PriceFilterSelector from 'components/PriceFilterSelector/PriceFilterSelector';

const PriceFilterSelection = ({ action, condition }) => {
  const { priceFilterList } = condition;
  const filters = priceFilterList.map((filter, index) => {
    return <PriceFilterSelector key={index} action={ action } filter={ filter }> {filter.label} </PriceFilterSelector>;
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
