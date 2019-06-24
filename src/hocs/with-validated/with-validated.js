import React, {PureComponent} from 'react';

const withValidated = (Component) => {
  class WithValidated extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isRadioPressed: false,
        isValidated: false,
      };

      this._handleTextareaChange = this._handleTextareaChange.bind(this);
      this._handleRadioClick = this._handleRadioClick.bind(this);
    }
    render() {
      return (
        <Component
          {...this.props}
          onTextareaChange={this._handleTextareaChange}
          onRadioClick={this._handleRadioClick}
          isValidated={this.state.isValidated}
        />
      );
    }

    _handleRadioClick() {
      this.setState({
        isRadioPressed: true,
      });
    }

    _handleTextareaChange(evt) {
      evt.preventDefault();

      if (evt.target.value.length >= 50 && evt.target.value.length <= 300) {
        if (this.state.isRadioPressed) {
          this.setState({
            isValidated: true,
          });
        }
      } else {
        this.setState({
          isValidated: false,
        });
      }
    }
  }
  return WithValidated;
};

export default withValidated;
