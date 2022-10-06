import React from 'react';
import Image from "next/image";
import Link from "next/link"
import  { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  
library.add( faMagnifyingGlass );
import Popup from "reactjs-popup";
import Content from "../popUp/Sigin"

function Menu(props) {
    return (
        <div className="mainNav_In">
            <Image
                className="logo" 
                src="https://www.tjb11.net/images/TS77/in/logo_2.svg"
                width={200}
                height={100}
                alt=""
            />
            <ul className="navList">
                
                <li className="divSport"> 
                    <a id="sportid" className="btn_gameBanner" href="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sportid',3,3);">THỂ THAO</a>
                    <div className="gameBanner gameBanner sportGame" style={{display:"none"}}>  
                        <div className="gameBanner_wrapper">
                            <Popup modal trigger={
                                <div id="nbb" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'nbb',3, 1);">  
                                    <span className="gameBanner_hot"></span>
                                    <div className="SG_banner01"></div>
                                    
                                    <div className="gameBanner_logo">
                                        
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={100}
                                                height={50}
                                                src="https://www.tjb11.net/images/main/cn/KUxOSASUNA.png"
                                                data-src="https://www.tjb11.net/images/main/cn/KUxOSASUNA.png"
                                                className="sml"
                                                alt=""
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">KU THỂ THAO</div>
                                        
                                    </div>
                                    
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="nbb_new" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'nbb_new',3, 1);">
                                    <div className="SG_banner02"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={100}
                                                height={50}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_THA2.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <span className="listName" style={{paddingTop:"10px", marginBottom:"-20px", }}>THA THỂ THAO</span>
                                        <span className="listName" style={{fontSize:"13px", paddingTop:"20px", lineHeight:"13px"}}>(Bản cổ điển KU)</span>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <a id="aBall" className="GB_list GB_list-test noborder" href="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aBall',3,1);">
                                    <div className="SG_banner03"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={100}
                                                height={50}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_THA2.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">THA THỂ THAO</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </a>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="sb" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sb',3, 1);">
                                    <div className="SG_banner04"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={100}
                                                height={50}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_SABA.png"
                                                alt=""
                                                className="sml"
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">SABA</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="sportAG" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sportAG',3, 1);">
                                    <div className="SG_banner05"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={100}
                                                height={50}
                                                src="https://www.tjb11.net/images/main/cn/in/logo_AG.png"
                                                alt=""
                                                className="sml"
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">AG</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="pin" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'pin',3, 1);">
                                    <div className="SG_banner07"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={100}
                                                height={50}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_PIN.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">PINNACLE</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="cmd" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'cmd',3, 1);">
                                    <div className="SG_banner06"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={100}
                                                height={50}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_CMD.png"
                                                alt=""
                                                className="sml"
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">CMD</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="ai" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ai',3, 1);">
                                    <div className="SG_banner08"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={100}
                                                height={50}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_AI_2.png"
                                                alt=""
                                                className="sml"
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">AI</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="sportBBIN" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sportBBIN',3, 1);">
                                    <div className="SG_banner_test10"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={100}
                                                height={50}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_BBIN.png"
                                                alt=""
                                                className="sml"
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">BBIN</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div className="GB_list GB_list gameBanner_soon off">
                                    <div className="SG_banner_notice">
                                        <div className="gameBanner_logo">
                                            <div className="img_logo">
                                                <Image
                                                    width={200}
                                                    height={100}
                                                    src="https://www.tjb11.net/images/main/logo_noticeSport.png"
                                                    alt=""
                                                    className="sml"
                                                />
                                            </div>
                                            <div className="gameBanner_logo_title">SẮP RA MẮT</div>
                                        </div>
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                        </div>
                    </div>
                    
                </li>
                <li className="topMenu_line"></li>
                <li className="KU_W">
                    <a id="kunav" className="casino_ku uppercase" target="kunav5" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'kunav',3, 1);">KU Casino</a>
                </li>
                <li className="topMenu_line"></li>
                <li className="divCasino">
                    <a className="btn_gameBanner">LIVE CASINO</a>
                    <div className="gameBanner gameBanner liveGame" style={{display:"none"}}> 
                        <div className="gameBanner_wrapper">
                            <Popup modal trigger={
                                <div id="ag" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ag',3, 1);"> 
                                    <div className="LG_banner01"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_AG.png"
                                                alt=""
                                                className="sml"
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">AG</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="ku" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ku',3, 1);">
                                    <span className="gameBanner_tableAnchor"></span>
                                    <div className="LG_banner02"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_KUCasino.png"
                                                className="sml"
                                                alt=""
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">KU CASINO</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="evo" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'evo',3, 1);">
                                    <div className="LG_banner03"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_EVO.svg"
                                                alt=""
                                                className="sml"
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">EVO</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="dg" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'dg',3, 1);">
                                    <div className="LG_banner04"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_DG.png"
                                                alt=""
                                                className="sml"
                                            />
                                            </div>
                                        <div className="gameBanner_logo_title">DG</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="bbin" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'bbin',3, 1);">
                                    <div className="LG_banner05"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_BBIN.png"
                                                className="sml"
                                                alt=""
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">BBIN</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="wm" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'wm',3, 1);">
                                    <div className="LG_banner06"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_WM.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">WM</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="aes" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aes',3, 1);">
                                    <div className="LG_banner07"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_AES_1.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">AES</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="sa" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sa',3, 1);">
                                    <div className="LG_banner08"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_SA.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">SA</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                        </div>
                    </div>
                </li>
                <li className="topMenu_line"></li>
                <li className="divElect">
                    <a className="btn_gameBanner">GAMES</a>
                    <div className="gameBanner gameBanner electronicGame">
                        <div className="gameBanner_wrapper">
                            <Popup modal trigger={
                                <div id="ftg" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ftg',3, 1);">
                                    <div className="EG_banner01"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/logo_FTG.svg"
                                                alt=""
                                                className="sml"
                                            /></div>
                                        <div className="gameBanner_logo_title">FTG</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="aCNF" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aCNF',3, 1);">
                                    <span className="gameBanner_hot"></span>
                                    <div className="EG_banner02"></div> 
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_KUCasino.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">3D</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="at" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'at',3, 1);">
                                    <span className="gameBanner_new"></span>
                                    <div className="EG_banner03"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_AT.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">AT</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="pg" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'pg',3, 1);">
                                    <div className="EG_banner04"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_PG.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">PG</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="bng" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'bng',3, 1);">
                                    <div className="EG_banner05"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_BNG.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">BNG</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="ka" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ka',3, 1);">
                                    <div className="EG_banner06"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_KA.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">KA</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="ds" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ds',3, 1);">
                                    <div className="EG_banner07"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_DS.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">DS</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="ps" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ps',3, 1);">
                                    <div className="EG_banner08"></div> 
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_PS.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">PS</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>                   
                        </div>
                    </div>                
                </li>
                <li className="topMenu_line"></li>
                <li className="divColor">
                    <a className="btn_colorBanner">XỔ SỐ</a>
                    <div className="gameBanner gameBanner ballGame"> 
                        <div className="gameBanner_wrapper">
                            <Popup modal trigger={
                                <div id="bbinBall" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'bbinBall',3, 1);"> 
                                    <div className="BG_banner01"></div> 
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_BBIN.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">BBIN</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="aColor" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aColor',3, 1);">
                                    <span className="gameBanner_hot"></span>
                                    <div className="BG_banner02"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_KUCasino.png" 
                                                style={{ width: "94px", height: "53px" }}
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">THA XỔ SỐ</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div className="GB_list GB_list-test gameBanner_soon off">
                                    <div className="BG_banner03"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_ball_grey.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">SẮP RA MẮT</div>
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                        </div>
                    </div>
                </li>
                <li className="topMenu_line"></li>
                <li className="divEsport">
                    <a className="btn_gameBanner">E-SPORTS</a>
                    <div className="gameBanner gameBanner ESportGame" style={{display:"none"}}> 
                        <div className="gameBanner_wrapper">
                            <Popup modal trigger={
                                <div id="im" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'im',3, 1);">  
                                    <div className="ES_banner01"></div>  
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_IM.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">IM</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="avia" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'avia',3, 1);">
                                    <div className="ES_banner02"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_AVIA.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">AVIA</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="sbEsport" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'sbEsport',3, 1);">
                                    <div className="ES_banner03"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_SABA.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">SABA</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                        </div>
                    </div>
                </li>
                <li className="topMenu_line"></li>                
                <li className="divFish">
                    <a className="btn_gameBanner">BẮN CÁ</a>
                    <div className="gameBanner gameBanner fishGame" style={{display:"none"}}> 
                        <div className="gameBanner_wrapper">
                            <Popup modal trigger={
                                <div id="kaFish" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'kaFish',3, 1);">
                                    <div className="FG_banner01"></div>
                                    <div className="gameBanner_logo-test">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={40}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_KA.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">KA</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="ks" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'ks',3, 1);">
                                    <div className="FG_banner02"></div>
                                    <div className="gameBanner_logo-test">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_KS.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">KS</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="dsFish" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'dsFish',3, 1);"> 
                                    <div className="FG_banner03"></div> 
                                    <div className="gameBanner_logo-test">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_DS.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">DS</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="aCNFFish" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aCNFFish',3, 1);">
                                    <div className="gameBanner_hot"></div>
                                    <div className="FG_banner04"></div>
                                    <div className="gameBanner_logo-test">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_KUCasino.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">3D</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="lcFish" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'lcFish',3, 1);">
                                    <span className="gameBanner_new"></span>
                                    <div className="FG_banner05"></div>
                                    <div className="gameBanner_logo-test">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_LC.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">V8</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div> 
                                }>
                                {close => <Content close={close} />}
                            </Popup>           
                        </div>
                    </div>
                </li>
                <li className="topMenu_line"></li>
                <li className="divChess">
                    <a className="btn_gameBanner">ĐỐI KHÁNG</a>
                    <div className="gameBanner gameBanner chessGame" style={{display:"none"}}>
                        <div className="gameBanner_wrapper">
                            <Popup modal trigger={
                                <div id="lc" className="GB_list GB_list" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'lc',3, 1);">  
                                    <div className="CG_banner01"></div> 
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_LC.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">V8</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div id="aCNFChess" className="GB_list GB_list-test" onclick="javascript:fnGetTip('Xin hãy đăng nhập trước！', 'aCNFChess',3, 1);"> 
                                    <span className="gameBanner_hot"></span>
                                    <div className="CG_banner02"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_KUCasino.png"
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">3D</div>
                                    </div>
                                    <div className="gameBanner_maintain">
                                        <div className="gameBanner_maintain_icon"></div>
                                        Đang bảo trì
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={
                                <div className="GB_list GB_list-test gameBanner_soon off"> 
                                    <div className="CG_banner03"></div>
                                    <div className="gameBanner_logo">
                                        <div className="gameBanner_logo_img">
                                            <Image
                                                width={200}
                                                height={100}
                                                src="https://www.tjb11.net/images/main/yn/in/logo_chess_grey.png" 
                                                alt=""
                                                className="sml"
                                            />
                                        </div>
                                        <div className="gameBanner_logo_title">SẮP RA MẮT</div>
                                    </div>
                                </div>
                                }>
                                {close => <Content close={close} />}
                            </Popup>
                        </div>
                    </div>
                </li>
                
                <li className="topMenu_line"></li>
                <li style={{minWidth:"65px"}}>
                    <a href="javascript:openNewWindowAutoHeightName('/Aspx/Hdzq.aspx', 870, 800);" className="t_offer">ƯU ĐÃI</a>
                </li>
                
                <li className="topMenu_line"></li>
                <li style={{minWidth:"85px"}}>
                    <a href="javascript:openNewWindowAutoHeightName('/Aspx/MobileBets.aspx', 1003, 703);" className="icon_phoneApp">Tải APP</a>
                </li>
            </ul>
            
            <div className="wc_banner">
                <a href="javascript:openNewWindowAutoHeightName('/Aspx/WorldCup.aspx?type=a', 850, 799);">
                    <Image width={93} height={52} src="https://www.tjb11.net/images/main/yn/wc_banner.png" alt=""/>
                </a>
            </div>
            
        </div>
    );
}

export default Menu;