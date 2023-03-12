import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

export const Container = styled.div`
  height: 300px;
  background-color: pink;
  overflow: hidden;
`;
export const CarouselImg = styled.img`
  width: 50%;
`;

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    //   autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <Container>
          <CarouselImg src="../img/santaclaus.jpg"></CarouselImg>
        </Container>
        <Container>
          <CarouselImg src="../img/santaclauses.jpg"></CarouselImg>
        </Container>
        <Container>
          <CarouselImg src="../img/tennis.jpg"></CarouselImg>
        </Container>
      </Slider>
    </div>
  );
}
