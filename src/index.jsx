import App from './components/app/app';

const places = [
  {
    title: `Beautiful, luxurious apartment at great location`
  },
  {
    title: `Canal View Prinsengracht`
  },
  {
    title: `Nice, cozy, warm big bed apartment`
  },
  {
    title: `Wood and stone place`
  }
];

ReactDOM.render(
    <App places={places} />,
    document.querySelector(`#root`)
);
