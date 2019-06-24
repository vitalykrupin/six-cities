import React, {PureComponent} from 'react';

const withSortings = (Component) => {
  class WithSortings extends PureComponent {
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
