const initialState = {
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
};

const getOffersOfCity = (selectedCity, offers) => offers.filter((it) => it.city.name === selectedCity);

const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: `CHANGE_CITY`,
    payload: selectedCity
  }),
  fetchOffers: (selectedCity, offers) => {
    const fetchOffers = getOffersOfCity(selectedCity, offers);

    return {
      type: `FETCH_OFFERS`,
      payload: fetchOffers
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: return Object.assign({}, state, {
      city: action.payload
    });
    case `FETCH_OFFERS`: return Object.assign({}, state, {
      offers: action.payload
    });
  }
  return state;
};

export {reducer, ActionCreator};
