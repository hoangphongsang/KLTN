import React, { Component } from 'react';
import './sachdetail.css'
import Miniitem from '../miniitem.component'
export default class Itemdetail extends Component {
    render() {
        return (
            <div>
                <h2>Cha giàu cha nghèo - Robert T.Kyosaki & Sharon L.Lechter</h2>
                <p><b>Quang mat loz</b> đã đăng bài lúc 19:00</p>
                <iframe src="https://www.youtube.com/embed/_i3wY6j12Do" >
                </iframe>
                <Miniitem />
            </div>


        )
    }
}