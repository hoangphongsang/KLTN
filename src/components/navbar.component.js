import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';



export default class Navbars extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/tintuc">
                                Tin tuc
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/sach">Sach</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/music">Music</NavLink>
                        </NavItem>
                    </Nav>

                </Navbar>
            </div>

        );
    }
}