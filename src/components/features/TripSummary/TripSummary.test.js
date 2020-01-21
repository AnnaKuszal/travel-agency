import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render without crashing', () => {
    const expectedTagsArray = ['sea', 'pool'];
    const component = shallow(<TripSummary tags={expectedTagsArray} image='image.jpg' name='Turkey' cost='1000.00' days={3} />);
    expect(component).toBeTruthy();
    //console.log(component.debug());
  });

  it('should display correct src and alt in <img>', () => {

    const expectedSrc = 'image.jpg';
    const expectedAlt = 'Turkey';

    const component = shallow(<TripSummary id='abc' tags={['sea', 'pool']} cost='1000.00' days={3} image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  
  it('should render correct props: name, cost and days', () => {
    const expectedName = 'USA';
    const expectedCost = '3000.00';
    const expectedDays = 4;

    const component = shallow(<TripSummary id='abc' tags={['sea', 'pool']} image='image.jpg' name={expectedName} cost={expectedCost} days={expectedDays} />);
    
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').childAt(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details').childAt(1).text()).toEqual(`from ${expectedCost}`);
  });

  it('should render correct link referring to page address', () => {

    const expectedId = 'abc';

    const component = shallow(<TripSummary id={expectedId} image='image.jpg' tags={['sea', 'pool']} name='Turkey' cost='1000.00' days={3} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('should render tags in spans and in right order', () => {

    const expectedArray = ['sea', 'pool', 'spa'];

    const component = shallow(<TripSummary id='abc' image='image.jpg' tags={expectedArray} name='Turkey' cost='1000.00' days={3} />);
    
    let i=0;

    if(i=0, i<expectedArray.length, i++) {
      for(let tag of expectedArray){
        expect(component.find('.details').at([i]).text()).toEqual(tag[i]);
      }
    }

  });

 
  it('should not render div with class "tags" in case if prop "tags" is "false" (was not passed) or is an empty array ', () => {

    const component = shallow(<TripSummary id='abc'  image='image.jpg' name='Turkey' cost='1000.00' days={3} />);

    expect(component.find('.tags')).toEqual({});

    console.log(component.debug());
  });

  
});