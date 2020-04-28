import React from 'react';
import img from '../img/quang.jpg';
import './miniitem.css';
import { Container, Row, Col } from 'reactstrap';

const Miniitem = () => {
    return (
        <div>
            <div className="line"></div>
            <Row lg='3'>
                <Col lg="3" md="3">
                    <img src={img} className="img" alt="hihi"></img>
                </Col>
                <Col lg="9" md="9">
                    <h3>That is title</h3>
                    <p>The margin property sets the margins for an element, and is a shorthand property for the following properties:</p>
                </Col>
            </Row>
            <div className="line"></div>

        </div>
    );
};

export default Miniitem;