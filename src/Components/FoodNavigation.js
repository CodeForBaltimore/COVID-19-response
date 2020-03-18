import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import { Container, CardColumns } from 'react-bootstrap';

class FoodNavigation extends Component {
    render() {
        return (
            <Container className='flex'>
                <CardColumns style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',

                    }}>
                    <CategoryCard 
                        heading='Food Distribution Sites'
                        title='Places where food is distributed.'
                        description='Placeholder text: Need to find somewhere for food distribution? Here is a list and location 
                            of places where food is being distributed.'
                        link='/food-resources/food-distribution'
                    />

                    <CategoryCard 
                        heading='Restaurants'
                        title='Restaraunts offering services.'
                        description='Placeholder text: List of restaurants that are still operating, 
                        including offering take out and/or delivery.'
                        link='/food-resources/restaurant-info'
                    />

                </CardColumns>
            </Container>
        );
    }
}

export default FoodNavigation;