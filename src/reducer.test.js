import {reducer, ActionCreator} from './reducer';

describe(`Reducer should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: `Amsterdam`,
      offers: [
        {
          city: {
            name: `Amsterdam`,
            coords: [52.3679, 4.9014],
          },
          title: `Beautiful, luxurious apartment at great location`,
          type: `Apartment`,
          coords: [52.3909553943508, 4.85309666406198],
          image: `img/apartment-01.jpg`,
          price: `120`,
          rate: 93,
          isBookmarked: true,
          isPremium: true
        },
        {
          city: {
            name: `Amsterdam`,
            coords: [52.3679, 4.9014],
          },
          title: `Wood and stone place`,
          type: `Private room`,
          coords: [52.369553943508, 4.85309666406198],
          image: `img/room.jpg`,
          price: `80`,
          rate: 80,
          isBookmarked: false,
          isPremium: false
        },
        {
          city: {
            name: `Amsterdam`,
            coords: [52.3679, 4.9014],
          },
          title: `Canal View Prinsengracht`,
          type: `Apartment`,
          coords: [52.3909553943508, 4.929309666406198],
          image: `img/apartment-02.jpg`,
          price: `132`,
          rate: 80,
          isBookmarked: true,
          isPremium: false
        },
        {
          city: {
            name: `Amsterdam`,
            coords: [52.3679, 4.9014],
          },
          title: `Nice, cozy, warm big bed apartment`,
          type: `Apartment`,
          coords: [52.3809553943508, 4.939309666406198],
          image: `img/apartment-03.jpg`,
          price: `180`,
          rate: 100,
          isBookmarked: false,
          isPremium: true
        },
      ]
    });
  });
});

describe(`ActionCreator works correctly`, () => {
  it(`Should return selected city name`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Amsterdam`
    });
  });

  it(`Should return fetched offers`, () => {
    expect(ActionCreator.fetchOffers(`Amsterdam`, [
      {
        city: {
          name: `Paris`,
          coords: [52.3679, 4.9014],
        },
        title: `Wood and stone place`,
        type: `Private room`,
        coords: [52.369553943508, 4.85309666406198],
        image: `img/room.jpg`,
        price: `80`,
        rate: 80,
        isBookmarked: false,
        isPremium: false
      },
      {
        city: {
          name: `Cologne`,
          coords: [52.3679, 4.9014],
        },
        title: `Canal View Prinsengracht`,
        type: `Apartment`,
        coords: [52.3909553943508, 4.929309666406198],
        image: `img/apartment-02.jpg`,
        price: `132`,
        rate: 80,
        isBookmarked: true,
        isPremium: false
      },
      {
        city: {
          name: `Amsterdam`,
          coords: [52.3679, 4.9014],
        },
        title: `Nice, cozy, warm big bed apartment`,
        type: `Apartment`,
        coords: [52.3809553943508, 4.939309666406198],
        image: `img/apartment-03.jpg`,
        price: `180`,
        rate: 100,
        isBookmarked: false,
        isPremium: true
      }
    ])).toEqual({
      type: `FETCH_OFFERS`,
      payload: [
        {
          city: {
            name: `Amsterdam`,
            coords: [52.3679, 4.9014],
          },
          title: `Nice, cozy, warm big bed apartment`,
          type: `Apartment`,
          coords: [52.3809553943508, 4.939309666406198],
          image: `img/apartment-03.jpg`,
          price: `180`,
          rate: 100,
          isBookmarked: false,
          isPremium: true
        }
      ]
    });
  });
});
