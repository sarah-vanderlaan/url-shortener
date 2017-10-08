import React from 'react';
import expect from 'expect';
import URLCard from '../URLCard';
import { shallow } from 'enzyme';

describe('URLCard', () => {

  it('truncates a URL over 70 characters', () => {
    let url = {
      shortcode: "12sd5",
      fullURL: "http://www.anExampleOfALongLongLongLongLongLongURLThatIsOver70Chars.com"
    };
    let wrapper = shallow(<URLCard url={url} />);
    let expected = "http://www.anExampleOfALongLongLongLongLongLongURLThatIsOver70Chars.co...";

    expect(wrapper.find('.full-url').text()).toEqual(expected);
  });

  it('does not truncate URL under 70 chars', () => {
    let fullURL = "http://www.anExampleOfAShortURL.com";
    let url = {
      shortcode: "12sd5",
      fullURL
    };
    let wrapper = shallow(<URLCard url={url} />);

    expect(wrapper.find('.full-url').text()).toEqual(fullURL);
  });


});
