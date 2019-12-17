import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Link to='/friends'>Friends List</Link>{' '}
                <Link to='/'>Log In</Link>
            </div>
        );
    };
};

export default NavBar;