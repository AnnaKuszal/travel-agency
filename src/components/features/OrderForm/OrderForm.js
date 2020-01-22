import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary.js';
import {Grid, Row, Col} from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';

import Button from '../../common/Button/Button.js';

import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

import settings from '../../../data/settings';


const sendOrder = (tripId, tripName, countryCode, options, tripCost) => {

  const {name, contact} = options;

  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    tripId,
    tripName,
    countryCode,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  if (name !== '' && contact !== '') {


    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });

  }

  else {
    window.alert('Please, fill in the field');
  }

};


const OrderForm = ({ tripId, tripName, countryCode, options, tripCost, setOrderOption }) => (
  
  <Grid>
    <Row>
      <Col xs={12}>

        {pricing.map(option => 
          <Col md={4} key={option.id}>
            <OrderOption {...option} 
              currentValue = {options[option.id]}
              setOrderOption={setOrderOption}/>
          </Col>)}

        <OrderSummary cost={tripCost} options={options}/>
        <Button onClick={() => sendOrder(tripId, tripName, countryCode, options, tripCost)}>Order now!</Button>
      </Col>
    </Row>
  </Grid>
  
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  currentValue: PropTypes.string,

  tripName: PropTypes.string,
  tripId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  countryCode: PropTypes.string,
};

export default OrderForm;