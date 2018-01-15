import React from 'react';
import ArtistList from './ArtistList';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ArtistList />).toJSON();
  expect(rendered).toBeTruthy();
});
