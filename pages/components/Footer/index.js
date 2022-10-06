import React from 'react';
import Image from "next/image";
import Link from "next/link"
import  { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  
library.add( faMagnifyingGlass );

function Menu(props) {
    return (
        <div className="footer">
            <div className="under_list">
                <ul className="footerLink">
                    <li>Giới thiệu</li>
                    <li className="linkline">|</li>
                    <li onclick="openNewWindowAutoHeightName('/Aspx/Bcxx.aspx?action=A', 1020, 700)">Điều khoản</li>
                    <li className="linkline">|</li>
                    <li className="browser" onclick="location.href='/DownLoad.aspx?id=2';">Trình duyệt THA</li>
                    <li className="linkline">|</li>
                    <li className="t_yellow" onclick="openNewWindowAutoHeightName('/Browser/B.aspx',800,700)">Link dự bị</li>
                    <li className="linkline">|</li>
                    <li className="ser_phone">Hotline：<span id="spanPhone">+63285395690</span></li>
                </ul>
                <div className="rightSwitch">
                    <div style={{color: "rgb(255, 255, 255)"}}>Sơ đồ trang mạng <span>|</span></div>
                    <div className="rightArrow rightArrowD"></div>
                </div>
            </div>
            <div className="btmGuild">
            <div className="guildM">
                <div className="leftGuidList vn"> 
                    <div className="guilList guilList-sport"> 
                        <div className="guilListT">
                            THỂ THAO
                            <div className="guilListImg">
                                <div className="icon_btmSports"></div>
                            </div>
                        </div>
                        <ul>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'nbb2',3,3);">
                                <a id="nbb2">KU</a>
                            </li>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'nbb_new2',3,3);">
                                <a id="nbb_new2">THA <span>(Bản cổ <br/> điển KU)</span></a>
                            </li>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aBall2',3,3);">
                                <a id="aBall2">THA</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sb2',3,3);">
                                <a id="sb2">SABA</a>
                            </li>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sportAG2',3,3);">
                                <a id="sportAG2">AG</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'pin2',3,3);">
                                <a id="pin2">PINNACLE</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'cmd2',3,3);">
                                <a id="cmd2">CMD</a>
                            </li>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ai2',3,3);">
                                <a id="ai2">AI</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'bbinsport2',3,3);">
                                <a id="bbinsport2">BBIN</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="guilList">
                        <div className="guilListT">
                            CASINO
                            <div className="guilListImg">
                                <div className="icon_btmReal"></div>
                            </div>
                        </div>
                        <ul>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ku2',3,3);">
                                <a id="ku2">KU</a>
                            </li>
                            
                                <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ag2',3,3);">
                                <a id="ag2">AG</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'dg2',3,3);">
                                <a id="dg2">DG</a>
                            </li>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sa2',3,3);">
                                <a id="sa2">SA</a>
                            </li>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'wm2',3,3);">
                                <a id="wm2">WM</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'bbin2',3,3);">
                                <a id="bbin2">BBIN</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aes2',3,3);">
                                <a id="aes2">AES</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'evo2',3,3);">
                                <a id="evo2">EVO</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="guilList">
                        <div className="guilListT">
                            GAMES
                            <div className="guilListImg">
                                <div className="icon_btmElect"></div>
                            </div>
                        </div>
                        <ul>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aCNF2',3,3);">
                                <a id="aCNF2">3D</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'bng2',3,3);">
                                <a id="bng2">BNG</a>
                            </li>                     
                            
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ps2',3,3);">
                                <a id="ps2">PS</a>
                            </li>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ds2',3,3);">
                                <a id="ds2">DS</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'pg2',3,3);">
                                <a id="pg2">PG</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ka2',3,3);">
                                <a id="ka2">KA</a>
                            </li>     
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ftg2',3,3);">
                                <a id="ftg2">FTG</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'at2',3,3);">
                                <a id="at2">AT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="guilList">
                        <div className="guilListT">
                            XỔ SỐ
                            <div className="guilListImg">
                                <div className="icon_btmLotto"></div>
                            </div>
                        </div>
                        <ul>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aColor2',3,3);">
                                <a id="aColor2"> THA</a>
                            </li>
                                
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'bbinBall2',3,3);">
                                <a id="bbinBall2">BBIN</a>
                            </li>
                            
                        </ul>
                    </div>
                    
                    <div className="guilList guilList-esport">
                        <div className="guilListT">
                            E-SPORTS
                            <div className="guilListImg">
                                <div className="icon_btmEsport"></div>
                            </div>
                        </div>
                        <ul>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'im2',3,3);">
                                <a id="im2"> IM</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'avia2',3,3);">
                                <a id="avia2"> AVIA</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sbEsport2',3,3);">
                                <a id="sbEsport2">SABA</a>
                            </li>
                                                    
                        </ul>
                    </div>
                    
                    <div className="guilList guilList-fish">
                        <div className="guilListT">
                            BẮN CÁ
                            <div className="guilListImg">
                                <div className="icon_btmFish"></div>
                            </div>
                        </div>
                        <ul>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aCNFFish2',3,3);">
                                <a id="aCNFFish2">3D</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'dsFish2',3,3);">
                                <a id="dsFish2">DS</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ks2',3,3);">
                                <a id="ks2">KS</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'kaFish2',3,3);">
                                <a id="kaFish2">KA</a>
                            </li>  
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'lcFish2',3,3);">
                                <a id="lcFish2">V8</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="guilList guilList-chess">
                        <div className="guilListT">
                            ĐỐI KHÁNG
                            <div className="guilListImg">
                                <div className="icon_btmBBO"></div>
                            </div>
                        </div>
                        <ul>
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aCNFChess2',3,3);">
                                <a id="aCNFChess2">3D</a>
                            </li>
                            
                            <li onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'lc2',3,3);">
                                <a id="lc2">V8</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="guilList">
                        <div className="guilListT">
                            Giới thiệu
                            <div className="guilListImg">
                                <div className="icon_btmHelp"></div>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <a onclick="openNewWindowAutoHeightName('/Aspx/Xsjx_cjwt.aspx', 1019, 771)">Trợ giúp</a>
                            </li>
                            <li>
                                <a id="aComplantBox2" onclick="PassengerChannel(4)">Khiếu nại</a>
                            </li>
                            <li>
                                <a onclick="javascript:openNewWindowGetWidth(0)">Hỗ trợ</a>
                            </li>
                            <li>
                                <a onclick="openNewWindowAutoHeightName('/Aspx/Gglist.aspx',1024,730);">Thông báo</a>
                            </li>
                            <li>
                                <a onclick="openNewWindowAutoHeightName('/Aspx/Gywm.aspx?action=2', 1019, 756)">Giới thiệu</a>
                            </li>
                            <li>
                                <a onclick="javascript:openNewWindowAutoHeightName('../Activities/Active.aspx', 1024, 650)">Hậu trường<br />hoạt động</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="rightMobile">
                    <div className="rq_box">
                        <div id="qrcode" style={{display:"block",margin:"auto",width:"100px"}}><canvas width="100" height="100"></canvas></div>
                    </div>
                    <div className="guilListT leftPhoneT">
                        <div className="icon_btmMobile"></div>
                        Bản điện thoại
                    </div>
                    <span>Tận hưởng mọi lúc<br />đặt cược kịp thời</span>
                </div>
            </div>
    </div>
    <input type="hidden" id="hiddenMajorDomoF" value="" />
    <div className="brandImg"></div>
    
    </div>
    );
}

export default Menu;