import MockAdapter from 'axios-mock-adapter';
import {Operation} from './user';
import {configureAPI} from '../../api';

describe(`Reducer works correctly: `, () => {
  it(`should make correct API POST call to /login`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    apiMock
      .onPost(`/login`)
      .reply(200, [{email: `me@me.ru`}]);

    return Operation
      .authorizeUser(`me@me.ru`, `12`)(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch.mock.calls[0][0]).toEqual({
          type: `REQUIRE_AUTHORIZATION`,
          payload: false,
        });
        expect(dispatch.mock.calls[1][0]).toEqual({
          type: `AUTHORIZE_USER`,
          payload: [{email: `me@me.ru`}],
        });
        expect(dispatch.mock.calls[2][0]).toEqual({
          type: `AUTH_ERROR`,
          payload: null,
        });
      });
  });
});
