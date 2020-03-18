import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import { Container, CardColumns } from 'react-bootstrap';

class Home extends Component {
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
                        heading='Food'
                        title='Food related resources.'
                        description='Brief description of food related resources available.'
                        link='/food-resources'
                    />

                    <CategoryCard 
                        heading='COVID-19'
                        title='COVID-19 Testing'
                        description='Brief description of COVID-19 related resources available.'
                        link='/covid-resources'
                    />

                    <CategoryCard 
                        heading='Something'
                        title='Something Title'
                        description='Brief description of Something'
                        link='/some-resources'
                    />

                    <CategoryCard 
                        heading='Something'
                        title='Something Title'
                        description='Brief description of Something'
                        link='/some-resources'
                    />

                </CardColumns>
            </Container>
        );
    }
}

export default Home;