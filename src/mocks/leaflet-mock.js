const leafletMock = {
  icon: jest.fn(),
  map() {
    return {
      setView: jest.fn(),
      remove: jest.fn(),
    };
  },
  marker() {
    return {
      addTo: jest.fn(),
    };
  },
  tileLayer() {
    return {
      addTo: jest.fn(),
    };
  },
};

export default leafletMock;
