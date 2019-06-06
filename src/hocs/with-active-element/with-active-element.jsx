import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveCity = ((Component) => {
  class WithHoverItem extends PureComponent {
    constructor(props) {
      super(props);
      const {active} = this.props;

      this.state = {
        hoverItem: active || null,
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          active={this.state.hoverItem}
          setHoverItem={(active) => {
            this.setState({
              hoverItem: active,
            });
          }}
        />
      );
    }
  }

  WithHoverItem.propTypes = {
    active: PropTypes.string,
  };

  return WithActiveElement;
});

export default withActiveElement;
