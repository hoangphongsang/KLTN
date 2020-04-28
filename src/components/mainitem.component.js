import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardLink
} from 'reactstrap';


export default class Mainitem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            < div >
                <Card>
                    <Link to={this.props.currentPath + "/detail"}>
                        <CardImg top width="100%" src={this.props.img} style={{ width: "100%", height: "70%", padding: "10px" }} />
                    </Link>

                    <CardBody>
                        <CardLink tag={Link} to={this.props.currentPath + "/detail"} style={{ color: "black" }}>
                            <h3>{this.props.title}</h3>
                        </CardLink>

                        <CardText>{this.props.content}</CardText>
                    </CardBody>
                </Card>

            </div >
        )
    }
}