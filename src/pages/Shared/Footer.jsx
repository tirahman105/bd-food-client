import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
      

        <footer className="bg-light py-3">
   
      <div className="bg-dark text-light py-2">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-center align-items-center">
                <p className="mb-0 me-3">Follow us on:</p>
                <div className='d-flex'>
                <p href="#" className="me-2 text-primary"><FaFacebook /></p>
                <p href="#" className="me-2 text-info"><FaTwitter /></p>
                <p href="#" className="me-2 text-danger"><FaInstagram /></p>
                </div>
              </div>
              <p className="text-center mt-2 mb-0">© 2023 BD Food. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
    );
};

export default Footer;