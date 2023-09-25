"use client";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format } from "date-fns";

const TopPickSlider = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("/api/ipo")
      .then((res) => res.json())
      .then((data) => {
        setResult(data.data.results);
      });
  }, []);

  const formattedDate = (originalDate: string) => {
    return format(new Date(originalDate), "dd MMMM yyyy");
  };

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
        {result.map((detail, index) => {
          return (
            <div className="gaps" key={index}>
              <Card className="cards">
                <CardHeader>
                  <Flex justifyContent={"space-between"}>
                    <Flex gap={5}>
                      <Image
                        src={(detail as any).icon_url}
                        alt="logo"
                        width={"50px"}
                        height={"50px"}
                        objectFit={"cover"}
                      ></Image>
                      <Box>
                        <Heading size="md">{(detail as any).code}</Heading>
                        <Text>{(detail as any).company}</Text>
                      </Box>
                    </Flex>
                    <Box>
                      <Badge
                        variant="subtle"
                        borderRadius={"10px"}
                        width={"50px"}
                        margin={"auto"}
                        height={"20px"}
                        textAlign={"center"}
                        colorScheme="linkedin"
                      >
                        <Text>{(detail as any).type}</Text>
                      </Badge>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>{(detail as any).business}</Text>
                  <Text fontWeight={600}>
                    {" "}
                    {formattedDate((detail as any).eipo_start_at)}
                  </Text>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopPickSlider;
