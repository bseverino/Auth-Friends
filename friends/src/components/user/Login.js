import React from 'react';

import { axiosWithAuth } from '../../utils';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''            
        },
        isFetching: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.setState({ isFetching: true });
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/friends');
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <form onSubmit={this.login}>
                <label>Name:{' '}
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                </label>
                <label>Password:{' '}
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                </label>
                <button>Log In</button>{' '}
                {this.state.isFetching && <p>Logging in...</p>}
            </form>
        );
    };
};

export default Login;