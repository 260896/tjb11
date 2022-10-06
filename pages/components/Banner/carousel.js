import Carousel from "../Carousel/Carousel";

function Banner() {
    const data = [
        {
            image: "https://www.tjb11.net/pic2/PC_banner_VN.jpg",
          },
          {
            image: "https://www.tjb11.net/pic2/9_PC_VN.jpg",
          },
          {
            image: "https://www.tjb11.net/pic2/6_PC_VN.jpg",
          },
          {
            image: "https://www.tjb11.net/pic2/NO1PC_VN.jpg",
          },
          {
            image: "https://www.tjb11.net/pic2/3_PC_banner_KU_VN.jpg",
          },
          {
            image: "https://www.tjb11.net/pic2/7_PC_vn.jpg",
          },
          {
            image: "https://www.tjb11.net/pic2/提款PC_VN.jpg",
          },
    ];
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    return (
        <div className="banner">
            <div className="home-carousel">
                <div className="nrc-carousel">
                      <Carousel
                          data={data}
                          time={5000}
                          width="100%"
                          height="100%"
                          captionStyle={captionStyle}
                          // radius="10px"
                          slideNumber={false}
                          slideNumberStyle={slideNumberStyle}
                          // captionPosition="bottom"
                          automatic={true}
                          dots={true}
                          pauseIconColor="white"
                          pauseIconSize="50px"
                          slideBackgroundColor="darkgrey"
                          slideImageFit="cover"
                          // thumbnails={true}
                          // thumbnailWidth="100px"
                          style={{
                          textAlign: "center",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          }}
                      />
                </div>
            </div>
        </div>
    )
}
export default Banner