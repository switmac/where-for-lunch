import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from '../actions/placeActions';
import Place from '../components/Place/Place';
import Button from '../components/Button/Button';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }
  render() {
    const { condition, place } = this.props;
    return (
      <div className="homePageWrapper">
        <div>
          <div>radius: {condition.distance}</div>
          <Button onClick={this.handleOnClick} theme="homepage">
            Click
          </Button>
        </div>
        <Place place={place} />
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
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
