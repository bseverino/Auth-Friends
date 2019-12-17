import React from 'react';

import { axiosWithAuth } from '../../utils';

import FriendCard from './FriendCard';

class FriendsList extends React.Component {
    state = {
        friends: [],
        friend: {
            name: '',
            age: '',
            email: ''
        },
        isFetching: false
    };

    componentDidMount() {
        this.getFriends();
    };

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err));
    };

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    };

    addFriend = e => {
        e.preventDefault();
        this.setState({ isFetching: true });
        axiosWithAuth()
            .post('/friends', this.state.friend)
            .then(res => {
                this.setState({
                    friends: res.data,
                    friend: {
                        name: '',
                        age: '',
                        email: ''
                    },
                    isFetching: false
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        console.log(this.state.friends);

        return (
            <div>
                <form onSubmit={this.addFriend}>
                    <label>Name:{' '}
                        <input
                            type='text'
                            name='name'
                            value={this.state.friend.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>Age:{' '}
                        <input
                            type='number'
                            name='age'
                            value={this.state.friend.age}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>Email:{' '}
                        <input
                            type='email'
                            name='email'
                            value={this.state.friend.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Add Friend</button>
                </form>
                {this.state.friends.map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        );
    };
};

export default FriendsList;