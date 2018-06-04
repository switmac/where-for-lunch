import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from '../actions/placeActions';
import conditionActions from '../actions/conditionActions';
import Place from '../components/Place/Place';
import Condition from '../components/Condition/Condition';
import foodSVG from '../assets/spaguetti.svg';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }
  render() {
    const { condition, place } = this.props;
    return (
      <div className="homePageWrapper">
        <div>
          <Place place={place} />
          <div>
            <Condition condition={condition} action={this.handleOnConditionChange}/>
            <img onClick={this.handleOnClick} src={foodSVG} className="foodSVG" />
          </div>
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
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
