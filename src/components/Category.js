import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Category(props) {

    const {image,category,description, takeCategory} = props

    const getCategory = ()=>{
        takeCategory(category.toLowerCase());
    }
    return (
        <div>
            <Card style={{ width: '12vw' }} className="mx-2">
                <Card.Img variant="top" src={image} width="100%" height="250px" />
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Card.Text>
                       {description}
                    </Card.Text>
                    <Button onClick={getCategory} variant="primary">Top 5</Button>
                </Card.Body>
        </Card>
    </div>
    )
}

export default Category
