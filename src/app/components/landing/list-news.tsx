"use client";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const ListNews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/online-news")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.results);
      });
  }, []);

  const formattedDate = (originalDate: string) => {
    return format(new Date(originalDate), "dd MMMM yyyy. HH:mm");
  };
  return (
    <Card className="cardNewsLanding">
      <CardHeader title="Popular News">
        <p>Popular News</p>
      </CardHeader>
      <CardBody>
        {data ? (
          data.slice(0, 10).map((detail: any, index: number) => {
            return (
              <Link href={detail.link} key={index}>
                <div className="cardOnlineNews">
                  <Card className="detailCard">
                    <Flex>
                      <div className="images">
                        <Image
                          src={detail.img_url}
                          width={150}
                          height={100}
                          objectFit={"cover"}
                          borderRadius={10}
                        />
                      </div>
                      <div className="rightSide">
                        <div className="headTitle">
                          <p className="titleNews">{detail.title}</p>
                          {/* <div className="category"></div> */}
                          <Badge variant="subtle" height={"min-content"} colorScheme="green">
                            {detail.type}
                          </Badge>
                        </div>
                        <div className="dates">
                          {formattedDate(detail.pub_date)}{" "}
                          <span> - {detail.source}</span>
                        </div>
                      </div>
                    </Flex>
                  </Card>
                </div>
              </Link>
            );
          })
        ) : (
          <p>Not Found</p>
        )}
      </CardBody>
    </Card>
  );
};

export default ListNews;
