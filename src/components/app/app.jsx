import MainScreen from '../main-screen/main-screen';

const App = ({places}) => {
  return <MainScreen places={places} />;
};

App.propTypes = {
  places: PropTypes.array
};

export default App;
