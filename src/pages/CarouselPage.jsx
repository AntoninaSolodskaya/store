import React from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  View,
  Container
} from "mdbreact";

const CarouselPage = () => {
  return (
    <Container>
      <Carousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                alt="First slide"
              />
            </View>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                alt="Second slide"
              />
            </View>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                alt="Third slide"
              />
            </View>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    </Container>
  );
};

export default CarouselPage;
