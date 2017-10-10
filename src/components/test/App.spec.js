import React from 'react';
import expect from 'expect';
import { UnwrappedApp } from '../App';
import { shallow } from 'enzyme';
import InputURL from '../InputURL';
import URLTable from '../URLTable';

describe('App', () => {

  let defaultProps = {
    shortenURL: ()=> {},
    urls: [{
      shortUrl: "te23",
      fullURL: "www.test.com"
    }],
    isFetching: false,
    clearURLs: ()=> {}
  };
  let makeProps = (props) => Object.assign({}, defaultProps, props);

  it('renders with all components if URLS', () => {
    let props = makeProps();

    let wrapper = shallow(<UnwrappedApp {...props} />);
    expect(wrapper.find(".app-title").length).toEqual(1);
    expect(wrapper.find(InputURL).length).toEqual(1);
    expect(wrapper.find(URLTable).length).toEqual(1);
  });

  it('does not render URL table if no urls', () => {
    let props = makeProps({ urls: [] });

    let wrapper = shallow(<UnwrappedApp {...props} />);
    expect(wrapper.find(".app-title").length).toEqual(1);
    expect(wrapper.find(InputURL).length).toEqual(1);
    expect(wrapper.find(URLTable).length).toEqual(0);
  });


});
