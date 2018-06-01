import React from 'react';
import PropTypes from 'prop-types';
import styles from './Place.css';

const Place = ({ place }) => (
  <div className={styles.root}>
    <div>name: { place.name }</div>
    <div>address: { place.address }</div>
    <div>phone: { place.phone }</div>
    <div>rating: { place.rating }</div>
  </div>
);

Place.propTypes = {
  place: PropTypes.object,
};

export default Place;
