import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { Context } from '../globalContext/globalContext';
import { routes } from '../helpers/routes';
import AuthScreen from './auth/screens/AuthScreen';
import { GlobalStyle } from './genericComponents/goblalStyled';
import HomeScreen from './home/screens/HomeScreen';
import RegistrationScreen from './registration/screens/RegistrationScreen';




function AuthRoute({ ...rest }) {
  const { isAuth } = rest;

  if (isAuth) {
    return (
      <Route {...rest} />
    );
  } else {
    return <Redirect to={routes.AUTH} />;
  }

}

export default function App() {

  const {
    state: { token }
  } = useContext(Context);

  return (
    <>
      <GlobalStyle/>
      <Router>
        <Switch>

          <Route path={routes.AUTH} component={AuthScreen} />
          <AuthRoute exact path={routes.HOME} isAuth={token} component={HomeScreen} />
          <AuthRoute  path={routes.REGISTER} isAuth={token } component={RegistrationScreen} />
          <AuthRoute  path={routes.EDIT} isAuth={token} component={RegistrationScreen} />


        </Switch>
      </Router>
    </>
  )
}
