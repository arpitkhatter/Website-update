import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import IDPublicProfile from './Components/InteriorDesigner/IDPublicProfile';
import IDProfile from './Components/InteriorDesigner/IDProfileCreation';
import ClientSettings from './Components/Client/ClientSettings';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import ClientSignUp from './Components/Auth/ClientSignUp';
import Timelines from './Components/Client/Timelines';
import ClientGrid from './Components/Client/ClientGrid';
import IDSignUp from './Components/Auth/IDSignUp';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import './App.css';

class App extends Component {

  state = {
    isAuthenticated: false,
    isAuthenticating:true,
    user: null
  }

  setAuthStatus = authenticated =>  {
    this.setState({isAuthenticated: authenticated});
  }

  setUser = user => {
    this.setState({ user : user});
  }
    
  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      this.setUser(user);
    } catch(error) {
      console.log(error);
    }
    this.setState({ isAuthenticating:false });
  }

  PrivateRoute ({component: Component, authed, forward, authProps , ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} auth={authProps}/>
          : <Redirect to={{pathname: forward, state: {from: props.location}}} />}
      />
    )
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }

    return (
            !this.state.isAuthenticating && 
            <div className="App">
              <Router>
                <div>
                  <div className = "head">
                    <Navbar auth={authProps}/>
                  </div>
                  <div className = "body">
                    <Switch>
                      <Route exact path="/" render={(props) => <Home />} />
                      <Route exact path="/howitworks" render={(props) => <HowItWorks />} />
                      <Route exact path="/idpprofile/:id" render={(props) => <IDPublicProfile {...props} auth={authProps} />} />
                      <this.PrivateRoute authed = {!this.state.isAuthenticated} path = '/idhello' forward = '/idprofile' component={IDSignUp} authProps={authProps}/>
                      <this.PrivateRoute authed = {this.state.isAuthenticated} path = '/idprofile' forward = '/idhello' component={IDProfile} authProps={authProps}/>
                      <this.PrivateRoute authed = {!this.state.isAuthenticated} path = '/hello' forward = '/home' component={ClientSignUp} authProps={authProps}/>
                      <this.PrivateRoute authed = {this.state.isAuthenticated} path = '/home' forward = '/hello' component={ClientGrid}/>
                      <this.PrivateRoute authed = {this.state.isAuthenticated} path = '/project/settings' forward = '/hello' component={ClientSettings} authProps={authProps}/>
                      <this.PrivateRoute authed = {this.state.isAuthenticated} path = '/project/timelines' forward = '/hello' component={Timelines} authProps={authProps}/>
                    </Switch>
                  </div>
                  <Footer/>
                </div>
              </Router>
            </div>
    );
  }
}

export default App;