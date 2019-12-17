import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Form onSubmit={this.login}>
                        <FormGroup>
                            <Label for='username'>Username</Label>
                            <Input
                                type='text'
                                name='username'
                                id='username'
                                value={this.state.credentials.username}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input
                                type='password'
                                name='password'
                                id='password'
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button>Log In</Button>{' '}
                        {this.state.isFetching && <p>Logging in...</p>}
                    </Form>
                </Col>
            </Row>
        );
    };
};

export default Login;