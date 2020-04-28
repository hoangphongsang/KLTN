import React, { Component } from 'react';
import Mainitem from '../mainitem.component'
import Miniitem from '../miniitem.component';
import sach1 from '../../img/sach1.jpg'

export default class Sach extends Component {

    render() {
        const title = "Cha giàu cha nghèo";
        const content = "đây là cuốn sách....";
        return (
            <div>
                <Mainitem currentPath="/sach" img={sach1} title={title} content={content} />
                <Miniitem />
                <Miniitem />
            </div >

        )
    }
}