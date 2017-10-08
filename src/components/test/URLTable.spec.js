import React from 'react';
import expect from 'expect';
import URLTable from '../URLTable';
import URLCard from '../URLCard';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from '../common/Button';

describe('URLTable', () => {

  let defaultProps = {
    clear: () => {},
    urls: [
      {shortcode: "12345", fullURL: "www.test.com"},
      {shortcode: "98765", fullURL: "www.google.ca"}
    ]
  };
  let makeProps = (props) => Object.assign({}, defaultProps, props);

  it('renders with no urls', () => {
    let props = makeProps({ urls: [] });
    let wrapper = shallow(<URLTable {...props}/>);

    expect(wrapper.find(URLCard).length).toEqual(0);
  });

  it('Displays URLCard for each url in urls prop', () => {
    let props = makeProps();
    let numCards = shallow(<URLTable {...props} />).find(URLCard).length;

    expect(numCards).toEqual(2);
  });

  it('calls clear on button click', () => {
    let clearSpy = sinon.spy();
    let props = makeProps({ clear: clearSpy });

    let wrapper = shallow(<URLTable {...props} />);
    wrapper.find(Button).simulate('click');
    expect(clearSpy.calledOnce).toEqual(true);
  });
});
