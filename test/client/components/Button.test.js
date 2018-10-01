import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from 'client/components/Button/Button';
import renderer from 'react-test-renderer';

test('With Enzyme, Button component is enabled when isDisabled property passed false', () => {
  const isDisabled = false;
  const wrapper = shallow(
    <Button isDisabled={isDisabled} />,
  );
  const p = wrapper.find('.disabled');
  expect(p.length).toBe(0);
});

test('With Enzyme, Button component is enabled when isDisabled property is not passed', () => {
  const wrapper = shallow(
    <Button />,
  );
  const p = wrapper.find('.disabled');
  expect(p.length).toBe(0);
});

test('With Enzyme, Button component is disabled when isDisabled property passed true', () => {
  const isDisabled = true;
  const wrapper = shallow(
    <Button isDisabled={isDisabled} />,
  );
  const p = wrapper.find('.disabled');
  expect(p.length).toBe(1);
});

test('With Jest snapshot, render a disabled button', () => {
  const isDisabled = true;
  const buttonComponent = renderer
    .create(<Button isDisabled={ isDisabled }>Test</Button>)
    .toJSON();
  expect(buttonComponent).toMatchSnapshot();
});

test('With Enzyme, simulate click to an enabled button', () => {
  const isDisabled = false;
  let clicked = false;
  const testFxn = () => {
    clicked = true;
  };
  testFxn.bind(this);
  const buttonComponent = mount(
    <Button isDisabled={ isDisabled } onClick={testFxn}>Test</Button>,
  );
  buttonComponent.simulate('click');
  expect(clicked).toEqual(true);
});


test('With Enzyme, simulate click to a disabled button', () => {
  const isDisabled = true;
  let clicked = false;
  const testFxn = () => {
    clicked = true;
  };
  testFxn.bind(this);
  const buttonComponent = mount(
    <Button isDisabled={ isDisabled } onClick={testFxn}>Test</Button>,
  );
  buttonComponent.simulate('click');
  expect(clicked).toEqual(false);
});
