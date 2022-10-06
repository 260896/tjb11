import React from 'react';
import Image from "next/image";
import Link from "next/link"
import  { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  
library.add( faMagnifyingGlass );
import Popup from "reactjs-popup";
import Content from "../popUp/Sigin"

function topMenu(props) {
    return (
        <div className="headerIn">

            <a className="btn_setFavor" onclick="AddFavoriteLocal('Thao tác thêm mục yêu thích bị thất bại, sử dụng tổ hợp phím Ctrl + D để thêm vào');">
                <div className="divPrompt">Thêm yêu thích</div>
            </a>

            <div className="impNews important_div hidden" style={{display:"none"}}>
                <div className="icon_impNews">Chú ý：</div>
                <div id="divImport1" className="showib"></div>
            </div>
            <div id="divNotLogined" className="headIn_R">
                <Popup modal trigger={
                    <input className="btn_register" type="button" value="Đăng Ký" />
                }>
                    {close => <Content close={close} />}
                </Popup>
                <input id="txtUser" className="signIn_ID uppercase" type="text" placeholder="ID / Điện thoại" onkeydown="SubmitEnterIndex(event);" maxlength="11" onclick={()=> GetV2E(this.value)}/* "this.value = GetV2E(this.value);" */ onkeyup="this.value = GetV2E(this.value);" onafterpaste="this.value = GetV2E(this.value);"
                onblur="this.value = GetV2E(this.value);" />
                <div className="passwordBox">
                    <input id="txtPassword" className="signIn_PW" type="password" placeholder="Mật khẩu" onkeydown="SubmitEnterIndex(event);" onclick="this.value = GetV2E(this.value);" onkeyup="this.value = GetV2E(this.value);" onafterpaste="this.value = GetV2E(this.value);"
                    onblur="this.value = GetV2E(this.value);" />
                    <div className="btn_questionMark" onclick="layerForgotword()">
                        <div className="divPrompt">Quên mật khẩu</div>
                    </div>
                </div>
                <input className="btn_signIn" type="button" value="Đăng nhập" onclick="UserPassIsEmpty();" />
            </div>
            <div id="divLogined" className="headIn_R hidden" style={{display:"none"}}>
                <div id="lteLevel" className="memLevel_1">Cấp Bạc</div>
                <div id="account" className="memID"><span></span>
                    <div id="nickName" className="divPrompt"></div>
                </div>
                <div id="accountChoice" className="memPoints" onclick="PlatinfoNew()">
                    <div className="btn_memP mainPonits">$ 0</div>
                    <div id="memberPointShow" className="memP_list" style={{display:"none"}}>
                        <div className="memP_list_3">
                            <ul>
                                <li className="memP_listtitle">THỂ THAO</li>
                            </ul>
                            
                            <ul className="list_line">
                                <li className="memP_listT">KU Thể Thao</li>
                                <li className="memP_listIn nbbPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">CMD</li>
                                <li className="memP_listIn cmdPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">PINNACLE</li>
                                <li className="memP_listIn pinPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">SABA</li>
                                <li className="memP_listIn sbPonits"></li>
                            </ul>
                            <ul>
                                <li className="memP_listT">AI</li>
                                <li className="memP_listIn aiPonits"></li>
                            </ul>
                            <ul>
                                <li className="memP_listtitle">XỔ SỐ</li>
                            </ul>
                            <ul>
                                <li className="memP_listT">THA Xổ Số</li>
                                <li className="memP_listIn colorPonits"></li>
                            </ul>
                            <ul>
                                <li className="memP_listtitle">E-SPORTS</li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">IM Esports</li>
                                <li className="memP_listIn imPonits"></li>
                            </ul>
                            <ul>
                                <li className="memP_listT">AVIA Gaming</li>
                                <li className="memP_listIn aviaPonits"></li>
                            </ul>
                            <ul>
                                <li className="memP_listtitle">ĐỐI KHÁNG</li>
                            </ul>
                            <ul>
                                <li className="memP_listT">V8 Đối Kháng</li>
                                <li className="memP_listIn lcPonits"></li>
                            </ul>
                        </div>
                        <div className="memP_list_3">
                            <ul>
                                <li className="memP_listtitle">LIVE CASINO</li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">KU Casino</li>
                                <li className="memP_listIn kuPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">AG Casino</li>
                                <li className="memP_listIn agPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">BBIN Casino</li>
                                <li className="memP_listIn bbinPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">DG Casino</li>
                                <li className="memP_listIn dgPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">SA Casino</li>
                                <li className="memP_listIn saPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">WM Casino</li>
                                <li className="memP_listIn wmPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">AES Casino</li>
                                <li className="memP_listIn aesPonits"></li>
                            </ul>
                            <ul>
                                <li className="memP_listT">EVO Casino</li>
                                <li className="memP_listIn evoPonits"></li>
                            </ul>
                            <ul>
                                <li className="memP_listtitle">LIVE</li>
                            </ul>
                            <ul>
                                <li className="memP_listT">COOL-IN LIVE</li>
                                <li className="memP_listIn smPonits"></li>
                            </ul>
                        </div>
                        <div className="memP_list_3">
                            <ul>
                                <li className="memP_listtitle">GAMES</li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">3D Games</li>
                                <li className="memP_listIn cnfPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">DS Games</li>
                                <li className="memP_listIn dsPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">KS Games</li>
                                <li className="memP_listIn ksPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">PS Games</li>
                                <li className="memP_listIn psPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">BNG Games</li>
                                <li className="memP_listIn bngPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">PG Games</li>
                                <li className="memP_listIn pgPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">KA Games</li>
                                <li className="memP_listIn kaPonits"></li>
                            </ul>
                            <ul className="list_line">
                                <li className="memP_listT">FTG Games</li>
                                <li className="memP_listIn ftgPonits"></li>
                            </ul>
                            <ul>
                                <li className="memP_listT">AT Games</li>
                                <li className="memP_listIn atPonits"></li>
                            </ul>

                            <ul>
                                <li className="memP_listtitle">Ví khuyến mãi</li>
                            </ul>
                            <ul>
                                <li className="memP_listT">Ví bạn bè</li>
                                <li className="memP_listIn frenPonits"></li>
                            </ul>

                        </div>
                        <div className="memP_bottom">
                            <div className="memp_bottom_L2">

                                <ul className="memP_Love memP_Total_FZ">
                                    <li className="memP_listT">Quà tặng miễn phí</li>
                                    <li className="memP_listIn lovePonits"></li>
                                </ul>

                                <ul className="memP_Total memP_Total_FZ">
                                    <li className="memP_listT">Tổng số điểm</li>
                                    <li className="memP_listIn AllPonits"></li>
                                </ul>
                            </div>
                            <input className="btn_memP_turnBack2" type="button" value="Chuyển hết về tài khoản chính" onclick="WReturnPoint()" />
                        </div>

                        <a className="maintain" style={{display:"none"}}>Đang bảo trì</a>
                    </div>


                </div>
                <a id="aMypurse" className="btn_memTransfer">
                    <div className="divPrompt">Chuyển quỹ</div>
                </a>
                <a id="aKscz" className="btn_memDeposit">
                    <div className="divPrompt">Nạp tiền</div>
                </a>
                <a id="aKscz2" className="btn_memWithdraw">
                    <div className="divPrompt">Rút tiền</div>
                </a>
                <a id="aHyzx" className="btn_member">
                    <div className="divPrompt">Hội viên</div>
                </a>
                <a id="aMail" href="javascript:openNewWindowAutoHeightName('/Aspx/Grxx.aspx',1002,674);" className="btn_memMail">
                    <div className="divPrompt">Trung tâm tin nhắn</div>
                </a>
                <a href="javascript:End();" className="btn_memSignOut">
                    <div className="divPrompt">Đăng xuất</div>
                </a>
            </div>
        </div>
    );
}

export default topMenu;