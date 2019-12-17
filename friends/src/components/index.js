import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import PrivateRoute from './PrivateRoute';
import NavBar from './NavBar';
import Login from './user/Login';
import FriendsList from './friends/FriendsList';

class App extends React.Component {
  render() {
    return (
      <>
        <Route path='/' component={NavBar} />
        <Container>        
          <Route exact path='/' component={Login} />
          <PrivateRoute path='/friends' component={FriendsList} />
        </Container>
      </>
    );
  }
}

export default App;
