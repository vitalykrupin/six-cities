import * as React from 'react';
import {Redirect} from 'react-router-dom';

const withPrivateRoute = (Component, data) => {
  class WithPrivateRoute extends React.PureComponent {
    render() {
      if (!data.name) {
        return <Redirect to="/login" />;
      }

      return <Component/>;
    }
  }
  return WithPrivateRoute;
};

export default withPrivateRoute;
