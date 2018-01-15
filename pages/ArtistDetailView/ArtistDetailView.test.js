import React from 'react';
import ArtistDetailView from './ArtistDetailView';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ArtistDetailView />).toJSON();
  expect(rendered).toBeTruthy();
});
