import React from 'react';
import expect from 'expect';
import InputURL from '../InputURL';
import { shallow } from 'enzyme';
import { PulseLoader } from 'halogen';
import sinon from 'sinon';
import Button from '../common/Button';

describe('InputURL', () => {

  let defaultProps = {
    submitURL: () => {},
    isFetching: false
  };
  let makeProps = (props) => Object.assign({}, defaultProps, props);

  it('shows loading dots when fetching shortened URL', () => {
    let props = makeProps({ isFetching: true });

    let wrapper = shallow(<InputURL {...props} />);
    expect(wrapper.find(PulseLoader).length).toEqual(1);
  });

  it('does not show loading dots when not fetching', () => {
    let props = makeProps();
    let wrapper = shallow(<InputURL {...props} />);
    expect(wrapper.find(PulseLoader).length).toEqual(0);
  });

  it('shows error message when URL invalid', () => {
    let props = makeProps();

    let wrapper = shallow(<InputURL {...props} />);
    wrapper.setState({ valid: false });
    expect(wrapper.find(".error").length).toEqual(1);
  });

  it('does not show error message when URL valid', () => {
    let props = makeProps();
    let wrapper = shallow(<InputURL {...props} />);
    expect(wrapper.find(".error").length).toEqual(0);
    wrapper.setState({ valid: true });
    expect(wrapper.find(".error").length).toEqual(0);
  });

  it('calls onSubmit on button click', () => {
    let submitSpy = sinon.spy();
    let props = makeProps({ submitURL: submitSpy });

    let wrapper = shallow(<InputURL {...props} />);
    wrapper.setState({ url: "www.test.com "});
    wrapper.find(Button).simulate('click');
    expect(submitSpy.calledOnce).toEqual(true);
  });

  it('does not call onSubmit with empty string URL', () => {
    let submitSpy = sinon.spy();
    let props = makeProps({ submitURL: submitSpy });

    let wrapper = shallow(<InputURL {...props} />);
    wrapper.find(Button).simulate('click');
    expect(submitSpy.calledOnce).toEqual(false);
  });

  it('clears input onSubmit', () => {
    let props = makeProps();

    let wrapper = shallow(<InputURL {...props} />);
    //change val of input
    wrapper.setState({ url: "www.example.com" });
    wrapper.find(Button).simulate('click');
    expect(wrapper.state().url).toEqual("");
  });

  it('input shows value of state url', () => {
    let props = makeProps();

    let wrapper = shallow(<InputURL {...props} />);
    let url = "www.test.com";
    wrapper.setState({ url });
    expect(wrapper.find('input').props().value).toEqual(url);
  });

});
