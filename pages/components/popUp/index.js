import react from "react";
import Link from "next/link";
import Image from "next/image";
import Favicon from 'react-favicon'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

function PopUp () {
    const closePopup = () =>{
        document.getElementsByClassName("App")[0].style.display ='none';
    }
    return (
        <>
        <div className="App ">
            <Tabs>
                <TabList>
                    <Tab>
                        <p>Lịch thi đấu World Cup Qatar 2022</p>
                    </Tab>
                    <Tab>
                        <p>CLB VIP Siêu Cấp</p>
                    </Tab>
                    <Tab>
                        <p>Chia sẻ Facebook nhận thưởng miễn phí</p>
                    </Tab>
                    <Tab>
                        <p>Hạn mức rút tiền 10 tỷ mỗi ngày</p>
                    </Tab>
                    <Tab>
                        <p>Góc cảnh báo</p>
                    </Tab>
                    <div className="popUpLogo">
                        {/* <div className="img">
                            <img src="https://csi.20icipp.com/img/static/desktop/brand/new88/logo.png" />
                        </div> */}
                    </div>
                </TabList>

                <TabPanel>
                    <img src="https://csi.20icipp.com/img/new88/floatingads/fe856def-4839-4043-b924-1e5f8511bee3.jpg" />

                </TabPanel>
                <TabPanel>
                    <img src="https://csi.20icipp.com/img/new88/floatingads/a37c39e5-77cd-4090-9f1a-f0b0b283ce84.jpg" />
                </TabPanel>
                <TabPanel>
                    <img src="https://csi.20icipp.com/img/new88/floatingads/2954e843-cc55-4454-970d-67146f8defe7.jpg" />
                </TabPanel>
                <TabPanel>
                    <img src="https://csi.20icipp.com/img/new88/floatingads/bd7e9d99-812c-4396-86ee-d823c495ec9c.jpg" />
                </TabPanel>
                <TabPanel>
                    <img src="https://csi.20icipp.com/img/new88/floatingads/15b679fd-31f9-4653-9947-79b2ebdf14dc.jpg" />
                </TabPanel>
                <div className="closePopUp" onClick={closePopup}><a>&times;</a></div>
                

            </Tabs>
        </div></>
    )
}
export default PopUp;