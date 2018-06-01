import React from 'react';
import PropTypes from 'prop-types';
import styles from './Place.css';

const Place = ({ place }) => (
  <div className={styles.root}>
    <div>{ place.name }</div>
    <div>{ place.address }</div>
    <div>{ place.phone }</div>
    <div>{ place.rating }</div>
  </div>
);

Place.propTypes = {
  place: PropTypes.object,
};

export default Place;
