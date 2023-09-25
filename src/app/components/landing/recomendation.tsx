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
    <div className="RecomendationLanding">
      <SimpleGrid
      width={'90%'}
        spacing={5}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {data ? (
          data.slice(0, 10).map((detail, index) => {
            return (
              <Card key={index} width={300}>
                <CardHeader>
                  <Flex gap={4}>
                  <Image src={(detail as any).icon_url} width={50} height={50} />
                    <div className="">
                    <Heading size="md">{(detail as any).code}</Heading>
                    <Heading size="sm">{(detail as any).name}</Heading>
                    </div>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text fontWeight={600}> Price : Rp.{priceFormat((detail as any).price)}</Text>
                  <Text color="telegram">Volume : {(detail as any).tradable_volume}</Text>
                </CardBody>
              </Card>
            );
          })
        ) : (
          <>Not Found</>
        )}
      </SimpleGrid>
    </div>
  );
};

export default RecomendationStockLanding;
