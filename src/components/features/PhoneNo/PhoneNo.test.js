import React from 'react';
import {shallow} from 'enzyme';
import PhoneNo from './PhoneNo';

describe('Component PhoneNo', () => {

  it('should render without crashing', () => {
    const component = shallow(<PhoneNo />);
    expect(component).toBeTruthy();
  });

  it('should render description', () => {

    const component = shallow(<PhoneNo />);

    expect(component.exists('span')).toEqual(true);
    
  });

  const trueDate = Date;

  const mockDate = customDate => class extends Date {
    constructor(...args) {
      if(args.length){
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now(){
      return (new Date(customDate)).getTime();
    }
  };

  const checkDescriptionAtTime = (time, expectedDescription) => {
    it(`should show correct at ${time}`, () => {
      global.Date = mockDate(`2020-02-15T${time}.135Z`);
  
      const component = shallow(<PhoneNo />);
      const renderedTime = component.find('span').text();
      expect(renderedTime).toEqual(expectedDescription);
  
      global.Date = trueDate;
    });
  };

  
  describe('Component PhoneNo with mocked Date', () => {
  
    checkDescriptionAtTime('11:00:00', '678.243.8455');
    checkDescriptionAtTime('13:00:00', '278.443.6443');
    checkDescriptionAtTime('17:00:00', '167.280.3970');
  
  }); 
  




});