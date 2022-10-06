import React from 'react';
import Image from "next/image";
import Link from "next/link"
import  { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  
library.add( faMagnifyingGlass );
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "../Banner/carousel";


function topMenu(props) {
    return (
        <div className="banner">
            {
                <>
                <Carousel />
                </>
            }
            <div className="customerServ">
                <ul onclick="javascript:openNewWindowGetWidth(0)">
                    <li className="btn_CS_24h">
                        <span className="CS_T">Hỗ trợ</span>
                    </li>
                </ul>
                <ul id="aViber">
                    <li className="btn_CS_viber"><span id="spanViber" className="CS_T">Viber</span>
                    </li>
                </ul>
                <ul id="btn_openCall" onclick="openHdfw2(5);">
                    <li className="btn_CS_callBack"><span className="CS_T">Đìện thoại</span><span className="CS_T_NG">Đang bảo trì</span>
                    </li>
                </ul>
                <ul onclick="openNewWindowAutoHeightName('/Aspx/Xsjx_ydxz.aspx',1024,790)">
                    <li className="btn_CS_remote"><span className="CS_T">Hỗ trợ xa</span>
                    </li>
                </ul>
                <ul onclick="openNewWindowAutoHeightName('/Aspx/Gglist.aspx', 1010, 730)">
                    <li className="btn_CS_newsNotic"><span className="CS_T">Thông báo</span>
                    </li>
                </ul>
            </div>
            <div className="runMsgArea">
                <div className="runMsg">
                    <div className="icon_runMsg"></div>
                        <div id="runMsgDiv">
                            <div className="marquee" onmouseout="play(this)" onmousemove="pause(this)" style={{fontSize:"16px"}}>
                            <table style={{animationDuration: "94.85s"}}>
                                <tbody>
                                    <tr >
                                        <td style={{whiteSpace:"nowrap"}}>
                                            <a data-id="5392">
                                                <span style={{fontFamily:"Times New Roman,Times,serif"}}>
                                                    <strong>Đối tác duy nhất của giải Laliga ở khu vực Châu Á, hội tụ những Dealer phát bài gợi cảm và nổi tiếng đến từ nhiều quốc gia khác nhau, nơi duy nhất ở Châu Á mở cửa tham quan hiện trường thực tế, trang mạng giải trí trực tuyến đỉnh cao, 24h luôn đồng hành cùng quý khách!</strong>
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default topMenu;