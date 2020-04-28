import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

//Home
import Home from './components/home.component';
//Tintuc
import Tintuc from './components/tintuc/tintuc.component';
import Tintucdetail from './components/tintuc/tintucdetail'
//Sach
import Sach from './components/sach/sach.component';
//Music
import Music from './components/music.component';

import Navbars from './components/navbar.component';
//import Item from './components/sach.item.component';
import Sachdetail from './components/sach/sach.detailitem';

export default class Mainrouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbars />
                <br />
                <Container >
                    <Route path="/" exact component={Home} />
                    <Route path="/tintuc" exact component={Tintuc} />
                    <Route path="/sach" exact component={Sach} />
                    <Route path="/sach/detail" exact component={Sachdetail} />
                    <Route path="/tintuc/detail" exact component={Tintucdetail} />
                    <Route path="/music" exact component={Music} />
                </Container>
            </BrowserRouter>
        )
    }
}