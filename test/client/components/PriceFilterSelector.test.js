
import React from 'react';
import { mount } from 'enzyme';
import PriceFilterSelector from 'client/components/PriceFilterSelector/PriceFilterSelector';
import renderer from 'react-test-renderer';


test('With Enzyme, PriceFilterSelector component without selecting a filter', () => {
  const filter = { id: 1, label: '$' };
  let selectedFilter;
  const testFxn = (value) => {
    selectedFilter = value;
  };
  testFxn.bind(this);
  mount(
    <PriceFilterSelector filter={ filter } action={ testFxn } />,
  );
  expect(selectedFilter).toEqual(undefined);
});

test('With Enzyme, simulate click to a PriceFilterSelector component', () => {
  const filter = { id: 1, label: '$' };
  let selectedFilter;
  const testFxn = (value) => {
    selectedFilter = value;
  };
  testFxn.bind(this);
  const component = mount(
    <PriceFilterSelector filter={ filter } action={ testFxn } />,
  );
  component.find('input').simulate('click');
  expect(selectedFilter).toEqual(filter);
});

test('With Jest, render PriceFilterSelector correctly', () => {
  const filter = { id: 1, label: '$' };
  const component = renderer
    .create(<PriceFilterSelector filter={ filter } />)
    .toJSON();
  expect(component).toMatchSnapshot();
});
