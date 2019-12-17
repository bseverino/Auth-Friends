import React from 'react';

import { axiosWithAuth } from '../../utils';

import FriendCard from './FriendCard';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

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

    render() {
        console.log(this.state.friends);

        return (
            <div>
                {this.state.friends.map(friend => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        );
    };
};

export default FriendsList;