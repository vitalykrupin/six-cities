import * as React from 'react';
import {Subtract} from 'utility-types';
import {Place} from '../../types';

interface State {
  sortedOffers: [],
  activeSorting: number,
}

interface InjectedProps {
  onSortingClick: () => void,
  sortedOffers: Place[],
  activeSorting: number,
}

const withSorted = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;
  class WithSorted extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        sortedOffers: [],
        activeSorting: 0,
      };

      this._handleSortingClick = this._handleSortingClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.city !== prevProps.city) {
        this.setState({
          sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name),
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onSortingClick={this._handleSortingClick}
          sortedOffers={this.state.sortedOffers}
          activeSorting={this.state.activeSorting}
        />
      );
    }

    _handleSortingClick(index) {
      switch (index) {
        case 0:
          this.setState({
            sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name),
            activeSorting: 0,
          });
          break;

        case 1:
          this.setState({
            sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name).slice(``).sort((a, b) => a.price - b.price),
            activeSorting: 1,
          });
          break;

        case 2:
          this.setState({
            sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name).slice(``).sort((a, b) => b.price - a.price),
            activeSorting: 2,
          });
          break;

        case 3:
          this.setState({
            sortedOffers: this.props.offers.filter((item) => item.city.name === this.props.city.name).slice(``).sort((a, b) => b.rating - a.rating),
            activeSorting: 3,
          });
          break;
      }
    }
  }
  return WithSorted;
};

export default withSorted;
