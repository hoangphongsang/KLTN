import React, { Component } from 'react';
import Mainitem from '../mainitem.component'
import Miniitem from '../miniitem.component';
import tintuc1 from '../../img/halanmu.jpg'
export default class Tintuc extends Component {
    render() {
        const title = "Đây là quang";
        const content = "đây là quang";
        return (
            <div>
                <Mainitem currentPath="/tintuc" img={tintuc1} title={title} content={content} />
                <Miniitem />
                <Miniitem />
            </div>
        )
    }
}