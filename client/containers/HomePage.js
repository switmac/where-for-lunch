import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';
import PriceFilterSelection from 'components/PriceFilterSelection/PriceFilterSelection';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.getFilterRequest());
  }

  getFilterRequest = () => {
    const { condition } = this.props;
    const priceFilter = condition.priceSelectedFilter.reduce((accum, filter) => `${accum}${filter.id},`, '');
    const trimmedPriceFilter = priceFilter.substring(0, priceFilter.length - 1);
    const data = {
      price: trimmedPriceFilter,
      radius: condition.radius,
      latitude: condition.latitude,
      longitude: condition.longitude,
    };

    return data;
  };

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }

  handleOnPriceRangeSelectionChange = (value) => {
    this.props.setPriceRange(value);
  }

  render() {
    const { condition, place } = this.props;
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          <PriceFilterSelection action={ this.handleOnPriceRangeSelectionChange } condition={ condition }></PriceFilterSelection>
          <Condition condition={ condition } action={ this.handleOnConditionChange }/>
          <Button isDisabled={ condition.getLatLangInProgress } onClick={ this.handleOnClick } theme="homepageClick" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    setRadius: conditionActions.setRadius,
    setPriceRange: conditionActions.setPriceRange,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  setPriceRange: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
