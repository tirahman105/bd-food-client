import React from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Home></Home>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;