import React, {PureComponent} from 'react';

const withActiveOffer = (Component) => {
  class WithActiveOffer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeOffer: {}
      };
    }

    render() {
      const {activeOffer} = this.state;
      return <Component
        {...this.props}
        activeOffer = {activeOffer}
        handleClick = {(item) => {
          this.setState({
            activeOffer: item
          });
        }}
        onClearOffer = {() => {
          this.setState({
            activeOffer: {}
          });
        }}
      />;
    }
  }

  return WithActiveOffer;
};

export default withActiveOffer;
