import React from 'react';
import ArtistBox from './ArtistBox';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<ArtistBox />).toJSON();
  expect(rendered).toBeTruthy();
});
