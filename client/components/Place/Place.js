import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Place.css';

export default class Place extends PureComponent {
  static propTypes = {
    place: PropTypes.object,
    onClick: PropTypes.func,
  };

  handleOnClick = () => {
    const { place, onClick } = this.props;
    onClick && onClick(place);
  };

  render() {
    const { place, onClick } = this.props;
    const { name, hours, photos, address, phone, categories, price, rating } = place;
    const header = place.name ? <Link to="/place" className={styles.link} onClick={ this.handleOnClick }>{ name }</Link> : 'Where for lunch?';
    const photoList = photos ? photos.map((photo, index) => {
      return <div key={ index } className={styles.photo}><img src={ photo } /></div>;
    }) : '';
    const businessHours = hours ? hours.map((hour, index) => {
      return <div key={ index } className={ styles.storeHours }>
        <div className={ styles.hoursType }> { hour.hoursType }</div>
        <div className={ styles.isOpenNow }> { hour.isOpenNow ? 'OPEN NOW' : 'CLOSE NOW'}</div>
      </div>;
    }) : '';


    return (
      <div className={styles.root} >
        <div className={styles.name}>{ header } </div>
        <div className={styles.box}>
          <div>{ address }</div>
          <div>{ phone }</div>
          <div>{ categories && categories.join(', ') }</div>
          <div>{ price }</div>
          { rating &&
            <div className={styles.rating}>
              <div className={styles.ratingScore}>{ place.reviewCount } reviews</div>
              <div className={styles.stars}>
                <div className={styles.emptyStars}></div>
                <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
              </div>
            </div>
          }
          { businessHours && !onClick &&
            <div className={styles.businessHours}>
              { businessHours }
            </div>
          }
          { photoList && !onClick &&
            <div className={styles.photos}>
              { photoList }
            </div>
          }
        </div>
      </div>
    );
  }
}
