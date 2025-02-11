import React, { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const logout = () => {
        localStorage.clear('token');
        props.history.push('/');
    };

    return (        
        <Navbar className='nav-bar' color='dark' dark>
            <NavbarBrand className='logo mr-auto' onClick={() => props.history.push('/friends')}>
                F{' '}<span className='red'>•</span>{' '}R{' '}<span className='yellow'>•</span>{' '}I{' '}<span className='blue'>•</span>{' '}E{' '}<span className='red'>•</span>{' '}N{' '}<span className='yellow'>•</span>{' '}D{' '}<span className='blue'>•</span>{' '}S
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className='mr-2' />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href='#' onClick={() => {
                                props.history.push('/friends')
                                toggleNavbar();
                            }}>Friends List</NavLink>
                    </NavItem>
                    <NavItem>
                        {localStorage.getItem('token') ? (
                                <NavLink href='#' onClick={() => {
                                    logout();
                                    toggleNavbar();
                                }}>
                                    Log Out
                                </NavLink>
                            ) : (
                                <NavLink href='#' onClick={() => {
                                        props.history.push('/');
                                        toggleNavbar();
                                    }}>Log In
                                </NavLink>
                        )}
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;