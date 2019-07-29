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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnj6Jkk4gd_awahyUBJkAVUc4V_O4-23VO5dvGPbk2A-M1-3rpA"
                alt="First slide"
                style={{ maxHeight: '350px' }}
              />
            </View>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img
                className="d-block w-100"
                src="https://www.thewrap.com/wp-content/uploads/2017/08/lameloball.jpg"
                alt="Second slide"
                style={{ maxHeight: '350px' }}
              />
            </View>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVJyJ-4_gKZmuZ8uyif54MDeCODXQ6IIXtY2nh9oK2SmuMrMn"
                alt="Third slide"
                style={{ maxHeight: '350px' }}
              />
            </View>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    </Container>
  );
};

export default CarouselPage;
