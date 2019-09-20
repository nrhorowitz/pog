import React from 'react';
import Landing from '../Landing';
import Login from '../Login';
import SignUp from '../SignUp';
import CreateRoom from '../CreateRoom';
import Room from '../Room';
import Dashboard from '../Dashboard';

import Loading from '../Loading';

import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import firebase from '../Firebase';

import '../../css/index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
        }
        this.renderView = this.renderView.bind(this);
    }

    componentWillMount() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          
        } else {

        }
        this.setState({loading: false});
      });
    }

    renderView(name, pathInput=" ") {
        if (name === "Landing") {
            return (
                <Landing
                    firebase = {firebase}
                ></Landing>
            )
        } else if (name === "Login") {
            return (
                <Login
                    firebase = {firebase}
                ></Login>
            )
        } else if (name === "SignUp") {
            return (
                <SignUp
                    firebase = {firebase}
                ></SignUp>
            )
        } else if (name === "CreateRoom") {
          return (
              <CreateRoom
                  firebase = {firebase}
              ></CreateRoom>
          )
        } else if (name === "Room") {
          const pathInputId = pathInput.location.search.split('=')[1];
          return (
              <Room
                  firebase = {firebase}
                  roomId = {pathInputId}
              ></Room>
          )
      } else if (name === "Dashboard") {
        return (
            <Dashboard
                firebase = {firebase}
            ></Dashboard>
        )
      }
    }

    render() {
      console.log(firebase.auth().currentUser);
      if (this.state.loading) {
        return (
          <Loading></Loading>
        )
      } else {
        return (
          <div>
            <Router>
              <Switch>
                <Route exact path="/" component={() => this.renderView("Landing")} />
                <Route exact path="/login" component={() => this.renderView("Login")} />
                <Route exact path="/signup" component={() => this.renderView("SignUp")} />
                <Route exact path="/createroom" component={() => this.renderView("CreateRoom")} />
                <Route exact path="/room" component={(id) => this.renderView("Room", id)} />
                <Route exact path="/dashboard" component={() => this.renderView("Dashboard")} />


              </Switch>
            </Router>
          </div>
        )
      }
    }
}

export default App;