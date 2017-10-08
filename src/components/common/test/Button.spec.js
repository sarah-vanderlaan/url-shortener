import React from 'react';
import expect from 'expect';
import Button from '../Button';
import { shallow } from 'enzyme';

describe('Button', () => {

  it('displays blank label if none supplied', () => {
    let props = {
      onClick: () => {}
    };
    let wrapper = shallow(<Button {...props}/>);

    expect(wrapper.find('button').text()).toEqual("");
  });

});
