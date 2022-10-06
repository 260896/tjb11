import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import TopHeader from "../components/TopHeader";
import Banner from "../components/Banner";
import PicMenu from "../components/PicMenu";
import OrtherLink from "../components/OrtherLink"
import Image from "next/image";

function HomePage(props) {
  return (
    <>
    <form id="form1">
        <div class="header">
            <TopHeader />
        </div>
        <div class="mainNav">
            <Menu />
        </div>
        <Banner />
        <PicMenu />
        <OrtherLink />
        <Footer />
    </form>
        
    </>
  );
}

export default HomePage;
