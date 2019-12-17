import React from 'react';
import { NavbarBrand, Navbar, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = props => {
    return (
        <Navbar color='light'>
            <NavbarBrand className='logo' onClick={() => props.history.push('/friends')}>F{' '}•{' '}R{' '}•{' '}I{' '}•{' '}E{' '}•{' '}N{' '}•{' '}D{' '}•{' '}S</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink href='#' onClick={() => props.history.push('/friends')}>Friends List</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#' onClick={() => props.history.push('/')}>Log In</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default NavBar;