import React from 'react';

import Container from '@material-ui/core/Container';

import Navbar from '../../components/Navbar'
import Book from '../../components/Book'
import FloatAddButton from '../../components/FloatAddButton'

export default function Home() {
    return (
        <>
            <Navbar />

            <Container maxWidth="sm">
                <Book
                    title="Clean Code"
                    author="Robert Cecil Martin"
                    description="Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento."
                    image="https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX374_BO1,204,203,200_.jpg"
                />
            </Container>

            <FloatAddButton />
        </>
    );
};