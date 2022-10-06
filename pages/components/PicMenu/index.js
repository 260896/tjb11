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
            <Popup modal trigger={
                <a id="smLive" className="btn_sportsLive">
                    <div className="picMenu_T">Cool-In<br />Live</div>
                </a>
                }>
                {close => <Content close={close} />}
            </Popup>
            <a className="btn_videoCasino">
                <div className="picMenu_T" style={{fontSize:"13px"}}>
                    
                        ĐỐI TÁC<br />LALIGA
                    
                </div>
            </a>
            <Popup modal trigger={
                <a id="aTvpd" className="btn_freeMovie">
                    <div className="picMenu_T">Phim <br />Miễn Phí</div>
                </a>
                }>
                {close => <Content close={close} />}
            </Popup>
        
        </div>
    );
}

export default topMenu;