import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOption = (props) => (
  <div className={styles.component}>
    <h2 className={styles.title}>
      {props.title} 
    </h2>
  </div>
);

  
OrderOption.propTypes = {
  title: PropTypes.string,
};

export default OrderOption;