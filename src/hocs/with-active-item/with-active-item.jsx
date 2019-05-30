import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveItem = ((Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: {}
      };

      this._onCardMouseEnterHandler = this._onCardMouseEnterHandler.bind(this);
      this._onCardMouseLeaveHandler = this._onCardMouseLeaveHandler.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseEnter={this._onCardMouseEnterHandler}
          onMouseLeave={this._onCardMouseLeaveHandler}
          activeItem={this.state.activeItem}
        />
      );
    }

    _onCardMouseEnterHandler(item) {
      this.setState({
        activeItem: item,
      });
    }

    _onCardMouseLeaveHandler() {
      this.setState({
        activeItem: {},
      });
    }
  }

  withActiveItem.propTypes = {
    offers: PropTypes.arrayOf(PropTypes.shape({
      city: PropTypes.object,
      title: PropTypes.string,
      type: PropTypes.string,
      coords: PropTypes.arrayOf(PropTypes.number),
      image: PropTypes.string,
      price: PropTypes.string,
      rate: PropTypes.number,
      isBookmarked: PropTypes.bool,
      isPremium: PropTypes.bool
    })).isRequired,
  };

  return WithActiveItem;

});

export default withActiveItem;
