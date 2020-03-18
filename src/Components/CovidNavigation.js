import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import { Container, CardColumns } from 'react-bootstrap';

class CovidCategory extends Component {
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
                        heading='COVID-19 Testing Sites'
                        title='Places where COVID-19 Testing is done'
                        description='Placeholder text: List of locations and facilities that perform testing for COVID-19'
                        link='/covid-resources/testing-centers'
                    />

                </CardColumns>
            </Container>
        );
    }
}

export default CovidCategory;