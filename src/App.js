import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Spinner from './components/UI/Spinner/Spinner';

const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));
const Orders = React.lazy(() => import('./containers/Orders/Orders'));
const Auth = React.lazy(() => import('./containers/Auth/Auth'));
const Logout = React.lazy(() => import('./containers/Auth/Logout/Logout'));

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to="/"/>
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/auth" component={Auth}/>
          <Redirect to="/"/>
        </Switch>
      );
    }

    return (
        <Layout>
          <React.Suspense fallback={<Spinner/>}>
          {routes}
          </React.Suspense>
        </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
