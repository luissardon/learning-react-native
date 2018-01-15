import React from 'react';
import HomeView from './HomeView';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<HomeView />).toJSON();
  expect(rendered).toBeTruthy();
});
