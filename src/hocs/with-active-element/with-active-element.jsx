import React, {PureComponent} from "react";

const withActiveElement = (Component) => {
  class WithActiveElement extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeElement: ``
      };
    }

    render() {
      const {activeElement} = this.state;
      return <Component
        {...this.props}
        activeElement = {activeElement}
        handleClick = {(item) => {
          this.setState({
            activeElement: item
          });
        }}
      />;
    }
  }
  return WithActiveElement;
};

export default withActiveElement;
