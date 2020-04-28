import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import quang from '../../img/quang.jpg'

import Miniitem from '../miniitem.component';
import './tintuc.css'

export default class Itemdetail extends Component {
    render() {
        return (
            <Container style={{ padding: '10px' }}>
                <h1 className="Title">"Haaland sẽ có giá 300 triệu euro trong vài năm tới"</h1>
                <p><b>Quang mat loz</b> đã đăng bài lúc 19:00</p>
                <p className="Content">
                    Cựu tiền đạo Christian Vieri dành những lời có cánh cho Erling Haaland. Ông cũng khẳng định giá trị chuyển nhượng của sao mai này sẽ tăng nhanh trong tương lai.
                    Cựu danh thủ Christian Vieri nhận định Haaland đang là tiền đạo hay nhất thế giới lúc này, "Bò mộng" cũng dự đoán chân sút 19 tuổi sẽ phá vỡ kỷ lục chuyển nhượng trong tương lai.
                    <br />
                    "Haaland là tiền đạo mạnh mẽ nhất. Cậu ấy đúng đắn khi quyết định đầu quân cho Dortmund. Đây chính là đội bóng lý tưởng để tài năng của Haaland phát triển. Vài năm tới, cậu ấy sẽ chuyển đến đội bóng lớn hơn với mức phí 200-300 triệu euro", Goal dẫn lời Vieri ngày 24/4.
                </p>

                <center>
                    <img src={quang} />
                    <figcaption>đây là khuôn mặt danh thủ Quangmatloz</figcaption>
                </center>
                <br />
                <p className="Content">
                    Erling Haaland là phát hiện thú vị của bóng đá thế giới ở mùa này. Tiền đạo sinh năm 2000 lập hat-trick trong trận ra mắt đấu trường Champions League khi còn khoác áo Salzburg. Những màn trình diễn ấn tượng trong màu áo Salzburg giúp Haaland vào tầm ngắm của hàng loạt đại gia châu Âu như Man United, Real Madrid.
                    <br />
                    Trong kỳ chuyển nhượng mùa đông 2019, Haaland quyết định chuyển sang Dortmund với mức giá 20 triệu euro. Tại đội bóng vùng Ruhr, chân sút người Na Uy hòa nhập nhanh và trở thành mắt xích không thể thiếu trên hàng công. Anh ghi 12 bàn và có 2 đường kiến tạo chỉ sau 11 trận, nổi bật nhất là cú đúp vào lưới PSG tại vòng knock-out Champions League.
                    <br />
                    Haaland là chân sút đầu tiên tại châu Âu cán mốc 40 bàn thắng ở mùa này. Hiện tại, anh được trang Transfermarkt định giá 72 triệu bảng, cao gấp 16 lần so với thời điểm đầu mùa giải.
                </p>
                <Miniitem />
            </Container>

        )
    }
}