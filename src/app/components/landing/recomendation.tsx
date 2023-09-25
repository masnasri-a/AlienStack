"use client";
import {
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const RecomendationStockLanding = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/top-value-stock")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.results);
        setData(data.data.results);
      });
  }, []);

  const priceFormat = (price: number) => {
    return new Intl.NumberFormat("id-ID").format(price);
  };

  return (
    <>
      <Flex>
        <Text id="recomendation" fontWeight={600} fontSize={24}>
          Recomendation
        </Text>
      </Flex>
      <div className="RecomendationLanding">
        <SimpleGrid
          width={"80%"}
          spacing={5}
          templateColumns="repeat(auto-fill, minmax(20%, 1fr))"
        >
          {data ? (
            data.slice(0, 12).map((detail, index) => {
              return (
                <Card key={index} width={300}>
                  <CardHeader>
                    <Flex gap={4}>
                      <Image
                        alt="test"
                        src={(detail as any).icon_url}
                        width={50}
                        height={50}
                      />
                      <div className="">
                        <Heading size="md">{(detail as any).code}</Heading>
                        <Heading size="sm" color={"gray.500"}>
                          {(detail as any).name}
                        </Heading>
                      </div>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text fontWeight={600}>
                      {" "}
                      Price : Rp.{priceFormat((detail as any).price)}
                    </Text>
                    <Text color="telegram">
                      Volume : {(detail as any).tradable_volume}
                    </Text>
                  </CardBody>
                </Card>
              );
            })
          ) : (
            <>Not Found</>
          )}
        </SimpleGrid>
      </div>
    </>
  );
};

export default RecomendationStockLanding;
