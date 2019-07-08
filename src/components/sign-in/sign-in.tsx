import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Operation} from '../../reducer/user/user';
import {getAuthError} from '../../reducer/user/selectors';
import {User} from '../../types';

interface Props {
  user: User,
  history: {push: (path: string) => void},
  authError: string,
  submitForm: ({rating: number, comment: string}, id: number) => void
}

class SignIn extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.user.name) {
      const {history} = this.props;
      history.push(`/`);
    }
  }

  render() {
    const {authError} = this.props;

    return <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post" onSubmit={(evt) => {
            evt.preventDefault();
            const data = new FormData(evt.currentTarget);
            this._handleFormSubmit(data.get(`email`), data.get(`password`));
          }}>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input" type="email" name="email" placeholder="Email" required={true}/>
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input className="login__input form__input" type="password" name="password" placeholder="Password" required={true}/>
            </div>
            {this._getErrorElement(authError)}
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>;
  }

  _handleFormSubmit(email, password) {
    this.props.submitForm(email, password);
  }

  _getErrorElement(authError) {
    return authError ? <span className="login__error" style={{
      display: `block`,
    }}>{authError}</span> : ``;
  }
}

const mapStateToProps = (state) => ({
  authError: getAuthError(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (email, password) => dispatch(Operation.authorizeUser(email, password)),
});

export {SignIn};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SignIn));
