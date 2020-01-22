import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {
 
  render() {
    const { currentValue, setOptionValue } = this.props;

    return (
      <DatePicker
        selected={currentValue}
        onChange={setOptionValue}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;