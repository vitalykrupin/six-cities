import * as React from 'react';
import {Subtract} from 'utility-types';

interface State {
  opened: boolean,
}

interface InjectedProps {
  onSortingsClick: () => void,
  onMouseLeave: () => void,
  opened: boolean,
}

const withSortings = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;
  class WithSortings extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        opened: false,
      };

      this._handleFormClick = this._handleFormClick.bind(this);
      this._handleFormMouseLeave = this._handleFormMouseLeave.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          onSortingsClick={this._handleFormClick}
          onMouseLeave={this._handleFormMouseLeave}
          opened={this.state.opened}
        />
      );
    }

    _handleFormClick() {
      this.setState({
        opened: !this.state.opened,
      });
    }

    _handleFormMouseLeave() {
      this.setState({
        opened: false,
      });
    }
  }
  return WithSortings;
};

export default withSortings;
