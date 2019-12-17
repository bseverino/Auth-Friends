import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import NavBar from './NavBar';
import Login from './user/Login';
import FriendsList from './friends/FriendsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/friends' component={FriendsList} />
      </div>
    );
  }
}

export default App;
