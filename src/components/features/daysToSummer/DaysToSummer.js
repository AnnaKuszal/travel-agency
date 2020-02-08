import React from 'react';
import PropTypes from 'prop-types';
import styles from './daysToSummer.scss';

class DaysToSummer extends React.Component {

  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: 'to summer!',
  }

  render() {
    const countDays = this.getDaysToSummer();

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{countDays}</h3>
      </div>
    );
  }

  getDaysToSummer(){
    const currentTime = new Date();


    const summerStart = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21, 0, 0, 0, 0));
    const summerEnd = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23, 0, 0, 0, 0));
    
    if(currentTime.getUTCDate() > 23 && currentTime.getUTCMonth() >= 8){
      summerStart.setUTCFullYear(currentTime.getUTCFullYear()+1);
    }
   
    const distance = summerStart.getTime() - currentTime.getTime();
    const daysNumber = Math.floor(distance / (1000*60*60*24));


    let description;

    if(currentTime >= summerStart && currentTime <= summerEnd) {
      description = '';
    }

    else if(daysNumber == 1) {
      description = '1 day to summer!';
    }
    
    else {
      description = daysNumber + ' days to summer!';
    }

    return description;
  }

}

export default DaysToSummer;