import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionText = ({currentValue, setOptionValue}) => (

  <input className={styles.input}
    type="text"
    onChange={event => setOptionValue(event.currentTarget.value)}
    value={currentValue}    
  />
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;