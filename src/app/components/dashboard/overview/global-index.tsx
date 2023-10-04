"use client";
import ColorFormat from "@/app/util/color-text";
import formatCurrencyIDR from "@/app/util/currency-format";
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Globalndex = () => {
  const [viewAll, setViewAll] = useState(false);
  const example = {
    count: 12,
    results: [
      {
        vendor_code: "^COMP",
        shown_code: "COMP",
        name: "Nasdaq Composite Index",
        price: 13201.28,
        change: 0.0,
        change_pct: 0.0,
        update_time: 1695983412172,
      },
      {
        vendor_code: "^DAX",
        shown_code: "DAX",
        name: "Frankfurt Dax Index",
        price: 15443.32,
        change: 119.82,
        change_pct: 0.00782,
        update_time: 1695978900175,
      },
      {
        vendor_code: "^DJIA",
        shown_code: "DJIA",
        name: "Dow Jones Industrial Average",
        price: 33666.34,
        change: 0.0,
        change_pct: 0.0,
        update_time: 1695983412193,
      },
      {
        vendor_code: "^FTSE100",
        shown_code: "FTSE100",
        name: "FTSE 100 Index",
        price: 7659.61,
        change: 57.76,
        change_pct: 0.0076,
        update_time: 1695978900195,
      },
      {
        vendor_code: "^HSI",
        shown_code: "HSI",
        name: "HangSeng Index",
        price: 17826.19,
        change: 453.16,
        change_pct: 0.02608,
        update_time: 1695975300212,
      },
      {
        vendor_code: "^KOSPI",
        shown_code: "KOSPI",
        name: "Seoul Composite Index",
        price: 2465.07,
        change: 2.1,
        change_pct: 0.00085,
        update_time: 1695932100205,
      },
      {
        vendor_code: "^N225",
        shown_code: "N225",
        name: "Tokyo Nikkei 225",
        price: 31857.62,
        change: -14.9,
        change_pct: -0.00047,
        update_time: 1695971700430,
      },
      {
        vendor_code: "^NDX",
        shown_code: "NDX",
        name: "Nasdaq 100 Index",
        price: 14702.77,
        change: 0.0,
        change_pct: 0.0,
        update_time: 1695983412248,
      },
      {
        vendor_code: "^NYSE",
        shown_code: "NYSE",
        name: "NYSE Composite Index",
        price: 15478.07,
        change: 0.0,
        change_pct: 0.0,
        update_time: 1695983412263,
      },
      {
        vendor_code: "^S&P500",
        shown_code: "S&P500",
        name: "Standard & Poor`s 500",
        price: 4299.7,
        change: 25.19,
        change_pct: 0.00589,
        update_time: 1695942900266,
      },
      {
        vendor_code: "^SSE",
        shown_code: "SSE",
        name: "Shanghai Composite Index",
        price: 3110.48,
        change: 3.16,
        change_pct: 0.00102,
        update_time: 1695939300271,
      },
      {
        vendor_code: "^STI",
        shown_code: "STI",
        name: "Singapore Straits Time",
        price: 3222.4,
        change: 15.41,
        change_pct: 0.00481,
        update_time: 1695978900287,
      },
    ],
    next: null,
    previous: null,
    total_pages: 1,
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={600}>Global Index</Text>
            <Text
              cursor={"pointer"}
              color={"blue.600"}
              onClick={() => setViewAll(!viewAll)}
            >
              {viewAll ? "Minimize" : "View All"}
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <TableContainer>
            <Table variant={"simple"}>
              <Thead>
                <Tr>
                  <Th>Company</Th>
                  <Th>Price</Th>
                  <Th>Change</Th>
                </Tr>
              </Thead>
              <Tbody>
                {viewAll ? (
                  <>
                    {example.results.map((detail, index) => {
                      return (
                        <Tr key={index}>
                          <Td>
                            <Text fontWeight={500}>{detail.shown_code}</Text>
                          </Td>
                          <Td>{detail.price}</Td>
                          <Td>
                            {detail.change < 0 ? (
                              <Text color={"red.600"}>{detail.change}</Text>
                            ) : (
                              <Text color={"green.600"}>{detail.change}</Text>
                            )}
                          </Td>
                        </Tr>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {example.results.slice(0, 7).map((detail, index) => {
                      return (
                        <Tr key={index}>
                          <Td>
                            <Text fontWeight={500}>{detail.shown_code}</Text>
                          </Td>
                          <Td>{formatCurrencyIDR(Math.floor(detail.price))}</Td>
                          <Td>
                            {ColorFormat(detail.change)}
                          </Td>
                        </Tr>
                      );
                    })}
                  </>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default Globalndex;
