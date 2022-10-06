import React from 'react';
import Image from "next/image";
import Link from "next/link"
import  { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';  
library.add( faMagnifyingGlass );

function topMenu(props) {
    return (
        <div class="otherLink">
            <a id="aKfzx" href="javascript:openService('/Aspx/Kfzx.aspx')" class="btn_OL_service">Hỗ trợ</a>
            
            <a href="javascript:openNewWindowAutoHeightName('/Aspx/Xsjx_cjwt.aspx',1020,712)" class="btn_OL_help">Trợ giúp</a>
            
            <a href="javascript:openNewWindowAutoHeightName('../Activities/Active.aspx', 1024, 650)" class="btn_OL_active">Hậu trường hoạt động</a>
            <a id="aComplantBox" href="javascript:void(0);" class="btn_OL_complaint" onclick="PassengerChannel(2)">Hòm thư khiếu nại </a>
        </div>
    );
}

export default topMenu;