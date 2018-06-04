import React from 'react';
import PropTypes from 'prop-types';
import styles from './Place.css';

const Place = ({ place }) => (
  <div className={styles.root}>
    <div className={styles.name}>{ place.name }</div>
    <div className={styles.box}>
      <div>{ place.address }</div>
      <div>{ place.phone }</div>
      <div>{ place.price }</div>
      { place.rating &&
      <div className={styles.rating}>
        <div className={styles.ratingScore}>{ place.rating }</div>
        <div className={styles.stars}>
          <div className={styles.emptyStars}></div>
          <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
        </div>
      </div>
      }
    </div>
  </div>
);

Place.propTypes = {
  place: PropTypes.object,
};

export default Place;
