import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions } from '../../../redux/orderRedux';

import { setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = (state) => {
  const options = getOrderOptions(state);

  return {
    options,
  };
};
  
const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);