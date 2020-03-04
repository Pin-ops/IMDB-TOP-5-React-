import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Category(props) {
    return (
        <div>
            <Card style={{ width: '250px' }} className="mx-2">
                <Card.Img variant="top" src={props.image} width="250px" height="250px" />
                <Card.Body>
                    <Card.Title>{props.category}</Card.Title>
                    <Card.Text>
                       {props.description}
                    </Card.Text>
                    <Button variant="primary">Top 5</Button>
                </Card.Body>
        </Card>
    </div>
    )
}

export default Category
