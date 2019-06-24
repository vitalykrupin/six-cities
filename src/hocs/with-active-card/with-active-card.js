import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveCard = ((Component) => {
  class WithActiveCard extends PureComponent {
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

  WithActiveCard.propTypes = {
    city: PropTypes.object,
  };

  return WithActiveCard;
});

export default withActiveCard;
