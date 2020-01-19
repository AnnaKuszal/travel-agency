import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {

  it('should render without crashing', () => {
    const component = shallow(<OrderOption name='Adults' type='number' />);
    expect(component).toBeTruthy();
    //console.log(component.debug());
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
    //console.log(component.debug());
  });

  it('should render correct content of props "name" in the title', () => {

    const expectedName = 'Features';
    const expectedId = 'features';

    const component = shallow(<OrderOption id={expectedId} name={expectedName} type='number' />);
    expect(component.find('h3').text()).toEqual(expectedName);
    //console.log(component.debug());
  });  

});


const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};



for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */  //eslint-disable-line no-unused-vars
    let component;
    let subcomponent;
    //let renderedSubcomponent; 
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      //renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
      console.log(component.debug());
      console.log(subcomponent.debug());
    });

    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */

        
        break;
      }
    }
  });
}