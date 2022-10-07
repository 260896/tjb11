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
        <div className="picMenu">
            <Popup trigger={<a id="smLive" className="btn_sportsLive">
                <div className="picMenu_T">Cool-In<br />Live</div></a>}
                    modal
                    nested >
                    {close => (<div className="modal">
                        <div className="app-popup-container">
                            <section className="hover-container login">
                            
                                <div className="container">
                                    <div className="members_header">
                                        <h2 className="title-center">Đăng nhập</h2>
                                        <a className="btn_close" onClick={close}></a>
                                    </div>
                                </div>
                                <div className="body members_bottom">
                                {<>
                                    <Content />
                                </>}
                                </div>
                            </section>
                        </div>
                    
                </div>)}
            </Popup>
            <a className="btn_videoCasino">
                <div className="picMenu_T" style={{fontSize:"13px"}}>
                    ĐỐI TÁC<br />LALIGA
                </div>
            </a>
            <Popup trigger={<a id="aTvpd" className="btn_freeMovie">
                <div className="picMenu_T">Phim <br />Miễn Phí</div></a>}
                    modal
                    nested >
                    {close => (<div className="modal">
                        <div className="app-popup-container">
                            <section className="hover-container login">
                            
                                <div className="container">
                                    <div className="members_header">
                                        <h2 className="title-center">Đăng nhập</h2>
                                        <a className="btn_close" onClick={close}></a>
                                    </div>
                                </div>
                                <div className="body members_bottom">
                                {<>
                                    <Content />
                                </>}
                                </div>
                            </section>
                        </div>
                    
                </div>)}
            </Popup>
        
        </div>
    );
}

export default topMenu;