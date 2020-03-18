import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class CategoryCard extends Component {
    render() {
        const { heading, title, description, link } = this.props;
        return (
                <Card 
                    className="text-center" 
                    border='secondary' 
                    style={{ 
                        width: '18rem',
                        margin: '2rem'
                    }}>
                    <Card.Header 
                        style={{fontSize:'20px'}}>
                            {heading}
                    </Card.Header>
                    <Card.Body className='d-flex flex-column'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        {/* The LinkContainer is what actually needs CSS applied to be moved/placed at the bottom of the card.
                        The LinkContainer wraps the bootstrap button to make it function as a Link from React-Router. */}
                        <LinkContainer to={link} className='mt-auto'>
                            <Button>Go!</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
        );
    }
}

export default CategoryCard;