import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ReviewList from '../review-list/review-list';
import {Operation} from '../../reducer/data/data';
import {Operation as OperationUser} from '../../reducer/user/user';
import NameSpace from '../../reducer/name-space';

jest.mock(`../../reducer/data/data`);
jest.mock(`../../reducer/user/user`);
Operation.loadReviews = () => (dispatch) => dispatch(jest.fn());
OperationUser.authorizeUser = () => (dispatch) => dispatch(jest.fn());

const NAME_SPACE = NameSpace.DATA;
const NAME_SPACE_USER = NameSpace.USER;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialState = {};
initialState[NAME_SPACE] = {
  city: {},
  offers: [],
  reviews: [
    {
      id: 1,
      comment: `Weird place`,
      rating: 1.5,
      date: `2019-05-16T21:02:58.227Z`,
      user: {
        avatarUrl: `path.jpg`,
        id: 8,
        isPro: false,
        name: `Kurt`,
      },
    },
    {
      id: 2,
      comment: `Strange place`,
      rating: 2.5,
      date: `2019-06-16T21:02:58.227Z`,
      user: {
        avatarUrl: `path.jpg`,
        id: 9,
        isPro: false,
        name: `Kate`,
      },
    },
  ],
  isReviewSending: false,
  didReviewSent: false,
  sendError: null,
};
initialState[NAME_SPACE_USER] = {
  user: {},
  authError: null,
  isAuthorizationRequired: false,
};
const store = mockStore(initialState);

describe(`ReviewList`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewList id={1} />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
