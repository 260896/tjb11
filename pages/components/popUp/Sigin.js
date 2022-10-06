import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faRefresh } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
function close(){
    const closePopup = () =>{
        document.getElementsByClassName("modal")[0].style.display ='none';
    }
    return(
        <div className="modal">
            <div className="app-popup-container">
                <section className="hover-container login">
                   
                    <div className="container">
                        <div className="members_header">
                            <h2 className="title-center">Đăng nhập</h2>
                            <div className="btn_close" onClick={closePopup}></div>
                        </div>
                        <div className="body members_bottom">
                            <div className="member_info">
                                <div className="input_info ">
                                    <div className="input_title">Tài khoản đại lý</div>
                                    <input name="txtAgent" type="text" maxlength="10" id="txtAgent" className="input_box uppercase" autocomplete="off" onblur="checkAgent(this)" placeholder="Bỏ qua nếu không có đại lý giới thiệu" />
                                </div>
                                <div className="input_info">
                                    <div className="input_title">Tài khoản</div>
                                    <input name="txtAccounts" maxlength="10" id="txtAccounts" type="text" className="input_box uppercase" autocomplete="off" data-checkkeyword="{&quot;tip&quot;:&quot;Font_txtAccountsBlur_NotOK&quot;,&quot;clear&quot;:0,&quot;dir&quot;:1,&quot;max&quot;:1}" placeholder="4 ~ 10 ký tự chữ và số" />
                                </div>
                                <div className="input_info">
                                    <div className="input_title">Biệt danh</div>
                                    <input name="txtTitle" type="text" id="txtTitle" className="input_box" data-checkkeyword="{&quot;tip&quot;:&quot;Font_txtTitleBlur_NotOK&quot;,&quot;clear&quot;:0,&quot;dir&quot;:1,&quot;max&quot;:1}" placeholder="Nhập tối đa 8 ký tự" maxlength="8" />
                                </div>
                                <div className="input_info">
                                    <div className="input_title">Mật khẩu</div>
                                    <div className="formPrompt" id="formPrompt">
                                        <span className="red_t">Mật khẩu tối đa 10 ký tự !</span>
                                    </div>
                                    <input name="txtPassword" type="text" maxlength="10" id="txtPassword" data-checkkeyword="{&quot;tip&quot;:&quot;Font_txtAccountPasswordBlur_NotOK&quot;,&quot;clear&quot;:1,&quot;dir&quot;:1,&quot;checkSimple&quot;:1,&quot;max&quot;:1}" className="input_box"
                                    placeholder="6 ~ 10 ký tự chữ và số" />
                                    <div className="btn_bankEye" onclick="btnPwdEye('txtPassword')">
                                        <a className="icon_bankEye" href="javascript:void(0)"></a>
                                    </div>
                                </div>
                                <div className="voice_prompt voice_promptPass" style={{backgroundImage:"none",paddingLeft:"7px",height: "20px",marginTop: "3px"}}>
                                    <div id="txtPassword_tip" className="hidden" style={{color: "#000", fontSize: "14px",lineHeight: "20px"}}>
                                        <span id="txtimg" style={{display: "inline-block", width: "12px", height: "12px", position: "absolute",marginTop: "4px",backgroundImage: "url(https://www.tjb11.net/images/main/bubble.png)", backgroundPosition: "0 -70px"}}>

                                        </span>
                                        <span style={{marginLeft: "18px",lineHeight:"20px"}}>6 ~ 10 ký tự chữ và số</span>
                                    </div>
                                </div>
                            </div>

                            <div className="verification" style={{borderBottom:"none"}}>
                                <div className="input_info" style={{marginTop: "0"}}>
                                    <div className="input_title">Điện thoại di động</div>
                                        <input
                                            type="text"
                                            id="txtPhoto" onkeydown="return SubmitEnter(event);"
                                            className="input_box" style={{paddingRight: "67px"}} value=" " maxlength="10" />
                                        <div className="divMsg">
                                            <input type="button" id="btnSendCode" value="Gửi mã" className="btn_message hidden msg1" />
                                            <input type="button" id="btnSendVoice" value="Tiếng nói" className="btn_voice  msg1" />
                                            <input type="button" value="Gửi lại" className="Resend_ver_code hidden msg2" style={{cursor: "default",width: "88px"}} />
                                            <div className="VER_seconds hidden msg2">
                                                <span id="SecondSendCode"></span>
                                                <span style={{color: "#555555"}}>&nbsp;s</span>
                                            </div>
                                            <input type="button" value="Gửi lại" className="Resend_ver_code on hidden msg3" />
                                            <div className="btn_verification hidden msg4">Đã xác nhận</div>
                                            <input type="button" id="btnContactCS" value="Liên hệ hỗ trợ" className="Resend_ver_code on hidden msg5" />
                                        </div>
                                        {/* <div id="captchaModal" className="modal">
                                            <div className="slidercaptcha card">
                                                <div className="card-header">
                                                    <span>Xác nhận bảo mật</span>
                                                    <span className="close fa fa-times" style={{float:"right",cursor:"pointer",fontSize:"18px"}}></span>
                                                </div>
                                                <div className="card-body">
                                                    <div id="captcha" style={{position: "relative", width: "280px", margin: "0px auto"}}>
                                                        <canvas width={278} height={150}></canvas><i className="refreshIcon fa fa-redo"></i>
                                                        <canvas width={48} height={150} className="block"></canvas>
                                                        <div className="sliderContainer">
                                                            <div className="sliderbg"></div>
                                                            <div className="sliderMask">
                                                                <div className="slider">
                                                                    <i className="fa fa-arrow-right sliderIcon"></i>
                                                                </div>
                                                            </div>
                                                            <span className="sliderText" data-text="Trượt qua phải ghép hình">Trượt qua phải ghép hình</span>
                                                        </div>
                                                    </div>
                                                    <div className="input_info captchaNumber" style={{display:"none"}}>
                                                        <div className="input_title" style={{lineHeight:"0px",marginBottom:"8px"}}>
                                                            <Image id="captchaImg" src="" alt=""/>
                                                            <i class="refresh-button"></i>
                                                        </div>
                                                        <input
                                                            id="txtCaptcha"
                                                            spellcheck="false"
                                                            style={{height:"50px"}}
                                                            onkeydown="return SubmitEnter(event);"
                                                            type="text" class="input_box" autocomplete="off" maxlength="4" placeholder="Mã xác nhận" />
                                                        <input
                                                            type="button"
                                                            style={{height:"50px"}} value="Gửi" className="btn_confirm_captcha " disabled="disabled " />
                                                        <br />
                                                        <span class="captcha_error ">Mã xác nhận sai</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div style={{minHeight:"4px",margin:"3px 0"}}>
                                        <div className="voice_prompt voice_promptMsg hidden ">Mã xác nhận đã gửi, vui lòng kiểm tra điện thoại.</div>
                                        <div className="voice_prompt voice_promptMsg2 hidden ">Cuộc gọi đang được thực hiện, vui lòng chú ý điện thoại để nhận mã.</div>
                                    </div>
                                    <div className="input_info " style={{marginTop:"0px"}}>
                                        <div className="input_title ">Mã xác nhận</div>
                                        <input type="text " id="txtPhoneCode " className="input_box " style={{paddingRight: "67px"}} maxlength="4" />
                                        <a href="javascript:void(0) " className="btn_ver_code code1 ">Xác nhận</a>
                                        <a href="javascript:fnCodeP2() " className="btn_ver_code code2 hidden on ">Xác nhận</a>
                                        <a href="javascript:void(0) " className="btn_ver_code btn_ver_code_ok hidden code3 "></a>
                                    </div>
                                </div>


                                <div className="join_norm">
                                    <div className="norm_phonemessage">
                                        <div id="f_isPhoneMsg" className="icon_checkbox on"></div>
                                        <div className="check_text">Nhận thông tin khuyến mãi qua tin nhắn điện thoại</div>
                                    </div>
                                    <div className="norm_clause" style={{marginTop: "10px"}}>
                                        <div id="ckb1" className="icon_checkbox on"></div>
                                        <div className="check_text">
                                            <p>Tôi đã đủ 18 tuổi , đồng ý tuân thủ quy tắc đặt cược và<span className="norm_service" onclick="showTnC()"><br />điều khoản hội viên</span> </p>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="button"
                                    value="Điền hoàn tất"
                                    className="btn_SentOut tempBtn"
                                    onclick="fnSubmitAdd1P2(); return false;"
                                    disabled="disabled" 
                                    style={{
                                        marginBottom:"10px"
                                    }}
                                    />
                            </div>
                        </div>
                </section>
            </div>
        </div>
    )
}
export default close;
