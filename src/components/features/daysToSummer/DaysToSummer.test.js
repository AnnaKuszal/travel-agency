import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};

/* TESTING 'title' from props

const mockProps = {
  title: 'days to summer!',
};
*/

describe('Component daysToSummer', () => {

  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
    
  });

  it('should render title', () => {

    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
    
  });

  /* TESTING 'title' from props
  
  it('should render correct title from props', () => {
    const component = shallow(<DaysToSummer {...mockProps} />);

    const expectedTitle = mockProps.title;

    expect(component.find(select.title).text()).toEqual(expectedTitle);
    console.log(component.debug());
  });
  */


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

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.0Z`);
    
    const component = shallow(<DaysToSummer />);
    const renderedDays = component.find(select.title).text();
    expect(renderedDays).toEqual(expectedDescription);
    
    global.Date = trueDate;
  });
};


describe('Component DaysToSummer with mocked Date', () => {

  //checkDescriptionAtDate('2019-06-21', '');
  checkDescriptionAtDate('2019-07-01', '');
  //checkDescriptionAtDate('2019-09-23', '');

  //checkDescriptionAtDate('2020-06-01', '20 days to summer!');
  //checkDescriptionAtDate('2020-06-19', '2 days to summer!');
  //checkDescriptionAtDate('2019-06-20', '1 day to summer!');

}); 