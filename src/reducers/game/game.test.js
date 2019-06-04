import {reducer} from './game.js';

describe(`Checks reducer`, () => {
  it(`checks initialstate`, () => {
    expect(reducer(undefined, {})).toEqual({
      activeCity: {
        "name": `Brussels`,
        "location": {"latitude": 50.846557, "longitude": 4.351697, "zoom": 13}
      },
      cities: []
    });
  });

  it(`checks active city`, () => {
    expect(reducer({
      activeCity: {
        "name": `Brussels`,
        "location": {"latitude": 50.846557, "longitude": 4.351697, "zoom": 13}
      },
      cities: []
    }, {
      type: `GET_ACTIVE_CITY`,
      payload: {
        "name": `Paris`,
        "location": {"latitude": 50.846557, "longitude": 4.351697, "zoom": 13}
      }
    })).toEqual({
      activeCity: {
        "name": `Paris`,
        "location": {"latitude": 50.846557, "longitude": 4.351697, "zoom": 13}
      },
      cities: []
    });
  });
});
