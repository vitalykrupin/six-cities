import React, {PureComponent} from 'react';
import {CommentLength} from '../../constants';

const withValidated = (Component) => {
  class WithValidated extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isRadioPressed: false,
        isTextareaFilled: false,
        isValidated: false,
      };

      this._handleTextareaChange = this._handleTextareaChange.bind(this);
      this._handleRadioClick = this._handleRadioClick.bind(this);
      this._resetFormState = this._resetFormState.bind(this);
    }

    componentDidUpdate(prevState) {
      if (prevState !== this.state) {
        this._validationCheck();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onTextareaChange={this._handleTextareaChange}
          onRadioClick={this._handleRadioClick}
          isValidated={this.state.isValidated}
          resetFormState={this._resetFormState}
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

      if (evt.target.value.length >= CommentLength.MIN && evt.target.value.length <= CommentLength.MAX) {
        this.setState({
          isTextareaFilled: true,
        });
      } else {
        this.setState({
          isTextareaFilled: false,
        });
      }
    }

    _validationCheck() {
      if (this.state.isRadioPressed && this.state.isTextareaFilled) {
        this.setState({
          isValidated: true,
        });
      } else {
        this.setState({
          isValidated: false,
        });
      }
    }

    _resetFormState() {
      this.setState({
        isRadioPressed: false,
        isTextareaFilled: false,
        isValidated: false,
      });
    }
  }
  return WithValidated;
};

export default withValidated;
