import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Place from 'components/Place/Place';

class PlacePage extends Component {
  render() {
    const { place } = this.props;
    return (
      <div className="homePageWrapper">
        <Place place={place} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});


PlacePage.propTypes = {
  place: PropTypes.object,
};

export default connect(
  mapStateToProps,
)(PlacePage);
