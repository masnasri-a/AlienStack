import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopPickSlider = () => {
  const result = [1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3.3,

    // slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="topPickSlider">
      <Slider {...settings}>
        {result.map((index, detail) => {
          return (
            <div className="gaps"  key={index}>
              <Card className="cards">
                <CardHeader>
                  <Heading size="md"> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    View a summary of all your customers over the last month.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button>View here</Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopPickSlider;
