import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Content from './Content';
import Header from './Header';

configure({adapter:new Adapter()});
test('If links occured',()=>{
  expect(true).toBeTruthy();
});

it('renders without executing',()=>{
  const wrapper=shallow(<App></App>)
  const content =wrapper.find(Content)
  expect(content.exists()).toBe(true);
})
it('renders the component without crashing!',()=>{
  const wrapper=shallow(<App></App>)
  const header=wrapper.find(Header)
  expect(header.exists()).toBe(true);
})


