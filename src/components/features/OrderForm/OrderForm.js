import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary.js';
import {Grid, Row, Col} from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';


const OrderForm = (props) => (
  
  <Grid>
    <Row>
      <Col xs={12}>

        {pricing.map(option => 
          <Col md={4} key={option.id}>
            <OrderOption {...option} 
              currentValue = {props.options[option.id]}
              setOrderOption={props.setOrderOption}/>
          </Col>)}

        <OrderSummary cost={props.tripCost} options={props.options}/>
      </Col>
    </Row>
  </Grid>
  
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;