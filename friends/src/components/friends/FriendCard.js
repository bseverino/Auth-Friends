import React from 'react';

class FriendCard extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.friend.name}</h3>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
            </div>
        );
    };
};

export default FriendCard;