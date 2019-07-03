import * as React from 'react';
import {Place} from '../../types';
import {Subtract} from 'utility-types';

interface State {
  activeCard: null,
}

interface InjectedProps {
  onPlaceClick: () => void,
  activeCard: Place,
}

const withActiveCard = ((Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;
  class WithActiveCard extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null,
      };

      this._handleCardClick = this._handleCardClick.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.city !== prevProps.city) {
        this.setState({
          activeCard: null,
        });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onPlaceClick={this._handleCardClick}
          activeCard={this.state.activeCard}
        />
      );
    }

    _handleCardClick(item) {
      this.setState({
        activeCard: item,
      });
    }
  }

  return WithActiveCard;
});

export default withActiveCard;
