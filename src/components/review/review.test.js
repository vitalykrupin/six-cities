import React from 'react';
import renderer from 'react-test-renderer';
import Review from '../review/review';

describe(`Review`, () => {
  const review = {
    id: 2,
    comment: `Weird place`,
    rating: 1.5,
    date: `2019-05-16T21:02:58.227Z`,
    user: {
      avatarUrl: `path.jpg`,
      id: 8,
      isPro: false,
      name: `Kurt`,
    },
  };

  it(`renders correctly`, () => {
    const tree = renderer
      .create(<Review review={review}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
