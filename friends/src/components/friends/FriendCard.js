import React from 'react';
import { Col, Card, CardHeader, CardBody, CardText } from 'reactstrap';

class FriendCard extends React.Component {
    render() {
        return (
            <Col className='friend-card' sm='12' md='6' lg='4'>
                <Card>
                    <CardHeader>
                        <h4 className='friend-name'>{this.props.friend.name}</h4>
                    </CardHeader>
                    <CardBody>                        
                        <CardText>Age: {this.props.friend.age}</CardText>
                        <CardText>Email: {this.props.friend.email}</CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    };
};

export default FriendCard;