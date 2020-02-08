import React from 'react';

class PhoneNo extends React.Component {

  render() {
    const phoneNo = this.getPhoneNo();
    return (
      <span>{phoneNo}</span>
    );
  }

  getPhoneNo(){
    const currentTime = new Date();
    const contactHour = currentTime.getUTCHours();

    let contactInfo;

    if(contactHour >= 8) {
      contactInfo = '678.243.8455';
    }

    else if(contactHour >= 12) {
      contactInfo = '278.443.6443';
    }

    else if(contactHour >= 16) {
      contactInfo = '167.280.3970';
    }

    else {
      contactInfo = 'The office opens at 8:00 UTC';
    }

    return contactInfo;
  }

}

export default PhoneNo;