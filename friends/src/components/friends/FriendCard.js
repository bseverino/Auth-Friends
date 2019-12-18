import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Col, Card, CardHeader, CardBody, CardText, Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

import { axiosWithAuth } from '../../utils';

import Chandler from '../../img/friends/chandler.png';
import Joey from '../../img/friends/joey.jpg';
import Monica from '../../img/friends/monica.jpg';
import Phoebe from '../../img/friends/phoebe.jpg';
import Rachel from '../../img/friends/rachel.jpg';
import Ross from '../../img/friends/ross.jpg';

class FriendCard extends React.Component {
    state = {
        friend: {
            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email
        },
        isEditing: false,
        isFetching: false
    };

    toggleEdit = () => {
        this.setState({
            isEditing: true
        })
    };

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    editFriend = e => {
        e.preventDefault();
        this.setState({ isFetching: true });
        axiosWithAuth()
            .put(`/friends/${this.props.friend.id}`, this.state.friend)
            .then(res => {
                this.props.updateFriends(res.data);
                this.setState({
                    isEditing: false,
                    isFetching: false
                })
            })
            .catch(err => console.log(err));
    };

    deleteFriend = name => {
        confirmAlert({
            title: 'Warning',
            message: `Are you sure you wish to delete ${name}?`,
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        this.setState({ isFetching: true });
                        axiosWithAuth()
                            .delete(`/friends/${this.props.friend.id}`)
                            .then(res => {
                                this.props.updateFriends(res.data);
                            })
                            .catch(err => console.log(err));
                    }
                },
                {
                    label: 'No'
                }
            ]
        });
    };

    render() {
        return (
            <Col className='friend-container' sm='12' md='6' lg='4'>
                {!this.state.isEditing ? (
                <Card className='friend-card'>
                    <CardHeader>
                        <h4 className='friend-name'>{this.props.friend.name}</h4>
                    </CardHeader>                    
                    <CardBody>
                        <img
                            className='portrait'
                            src={
                                this.props.friend.name.includes('Chandler') ? Chandler :
                                this.props.friend.name.includes('Joey') ? Joey :
                                this.props.friend.name.includes('Monica') ? Monica :
                                this.props.friend.name.includes('Phoebe') ? Phoebe :
                                this.props.friend.name.includes('Rachel') ? Rachel :
                                this.props.friend.name.includes('Ross') ? Ross :
                                'http://lorempixel.com/220/220/abstract'
                            }
                        />         
                        <CardText>{this.props.friend.age} years old</CardText>
                        <CardText>{this.props.friend.email}</CardText>
                        <Button onClick={() => this.setState({ isEditing: true })}>Edit</Button>{' '}
                        <Button color='danger' onClick={() => this.deleteFriend(this.props.friend.name)}>Delete</Button>
                    </CardBody>
                </Card>
                ) : (
                    <Form onSubmit={this.editFriend}>
                        <FormGroup>
                            <Label for='name'>Name</Label>
                            <Input
                                type='text'
                                name='name'
                                id='name'
                                value={this.state.friend.name}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='age'>Age</Label>
                            <Input
                                type='number'
                                name='age'
                                id='age'
                                value={this.state.friend.age}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input
                                type='email'
                                name='email'
                                id='email'
                                value={this.state.friend.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <Button>Submit</Button>{' '}
                        <Button right color='danger' onClick={() => this.setState({ isEditing: false })}>Cancel</Button>
                        {' '}{this.state.isFetching && <Spinner size='sm' color='secondary' />}
                    </Form>
                )}
            </Col>
        );
    };
};

export default FriendCard;