import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './TripSummary.scss';
import {Col} from 'react-flexbox-grid';


import { promoPrice } from '../../../utils/promoPrice';
import { formatPrice } from '../../../utils/formatPrice';

const TripSummary = ({id, image, name, cost, days, tags}) => {
  const tripCost = cost.slice(1).replace(',', '');

  const promoCost = formatPrice(promoPrice(tripCost, 20));

  const currentTime = new Date();

  const promoHour = currentTime.getUTCHours();

  return (
    <Col xs={12} sm={6} lg={4} className={styles.column}>
      <Link to={`/trip/${id}`} className={styles.link}>
        <article className={styles.component}>
          <img src={image} alt={name} />
          <h3 className={styles.title}>{name}</h3>
          <div className={styles.details}>
            <span>{days} days</span>

            {promoHour==12 ?
            
              <span>Happy Hour price from {promoCost}</span>
              :
              <span>from {cost}</span>
            }

          </div>

          {tags==undefined || tags==='false' ? '' : ( 

            <div className={styles.tags}>
              {tags.map(tag => (
                <span className={styles.tag} key={tag.toString()}>{tag}</span>
              ))}
            </div>

          )}

        </article>
      </Link>
    </Col>
  );
};

TripSummary.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  intro: PropTypes.string,
  cost: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  tags: PropTypes.array,
};

export default TripSummary;
