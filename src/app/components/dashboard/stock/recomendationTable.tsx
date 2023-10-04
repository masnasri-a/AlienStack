import formatCurrencyIDR from "@/app/util/currency-format";
import {
  Card,
  Flex,
  Image,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const RecomendationTable = () => {
  const example = {
    count: 684,
    results: [
      {
        code: "AALI",
        name: "Astra Agro Lestari Tbk.",
        price: 7375,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "buy",
        special_notations: [],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/AALI_7aac1f27-b01a-41ea-a7a8-d1818748bbb6.png",
      },
      {
        code: "ABBA",
        name: "Mahaka Media Tbk.",
        price: 77,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "buy",
        special_notations: [
          {
            code: "E",
            description:
              "Laporan keuangan terakhir menunjukkan ekuitas negatif",
          },
          {
            code: "X",
            description: "Efek Bersifat Ekuitas Dalam Pemantauan Khusus",
          },
        ],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ABBA_7c3ac7b1-f516-477f-8725-cf36d9791c18.png",
      },
      {
        code: "ABDA",
        name: "Asuransi Bina Dana Arta Tbk.",
        price: 6100,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "sell",
        special_notations: [
          {
            code: "X",
            description: "Efek Bersifat Ekuitas Dalam Pemantauan Khusus",
          },
        ],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ABDA_b9dcde18-3201-4937-b92e-3b85718cbb57.png",
      },
      {
        code: "ABMM",
        name: "ABM Investama Tbk.",
        price: 3760,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "sell",
        special_notations: [],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ABMM_a8045c8c-5d6d-4bae-aabe-840941d54cba.png",
      },
      {
        code: "ABMM",
        name: "ABM Investama Tbk.",
        price: 3760,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "sell",
        special_notations: [],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ABMM_a8045c8c-5d6d-4bae-aabe-840941d54cba.png",
      },{
        code: "ABBA",
        name: "Mahaka Media Tbk.",
        price: 77,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "buy",
        special_notations: [
          {
            code: "E",
            description:
              "Laporan keuangan terakhir menunjukkan ekuitas negatif",
          },
          {
            code: "X",
            description: "Efek Bersifat Ekuitas Dalam Pemantauan Khusus",
          },
        ],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ABBA_7c3ac7b1-f516-477f-8725-cf36d9791c18.png",
      },
      {
        code: "ABDA",
        name: "Asuransi Bina Dana Arta Tbk.",
        price: 6100,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "sell",
        special_notations: [
          {
            code: "X",
            description: "Efek Bersifat Ekuitas Dalam Pemantauan Khusus",
          },
        ],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ABDA_b9dcde18-3201-4937-b92e-3b85718cbb57.png",
      },{
        code: "ABBA",
        name: "Mahaka Media Tbk.",
        price: 77,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "buy",
        special_notations: [
          {
            code: "E",
            description:
              "Laporan keuangan terakhir menunjukkan ekuitas negatif",
          },
          {
            code: "X",
            description: "Efek Bersifat Ekuitas Dalam Pemantauan Khusus",
          },
        ],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ABBA_7c3ac7b1-f516-477f-8725-cf36d9791c18.png",
      },
      {
        code: "ABDA",
        name: "Asuransi Bina Dana Arta Tbk.",
        price: 6100,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "sell",
        special_notations: [
          {
            code: "X",
            description: "Efek Bersifat Ekuitas Dalam Pemantauan Khusus",
          },
        ],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ABDA_b9dcde18-3201-4937-b92e-3b85718cbb57.png",
      },
      {
        code: "ABDA",
        name: "Asuransi Bina Dana Arta Tbk.",
        price: 6100,
        change: 0,
        change_pct: 0,
        is_group: false,
        is_watchlisted: false,
        tradable_volume: 0,
        rating: "sell",
        special_notations: [
          {
            code: "X",
            description: "Efek Bersifat Ekuitas Dalam Pemantauan Khusus",
          },
        ],
        icon_url:
          "https://ajaib-e-ipo.oss-ap-southeast-5.aliyuncs.com/ABDA_b9dcde18-3201-4937-b92e-3b85718cbb57.png",
      },
    ],
    next: "/api/v1/stock/discovery/group/member/?group_code=ALL&page=2&page_size=30",
    previous: null,
    total_pages: 23,
  };
  return (
    <div>
      <Card width={"80vw"}>
        <TableContainer>
          <Table>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead textAlign={"start"}>
              <Tr>
                <Th width={"20px"}>No</Th>
                <Th>Asset</Th>
                <Th>Volume</Th>
                <Th>Rating</Th>
                <Th>Price Today</Th>
                <Th>Change</Th>
              </Tr>
            </Thead>
            <Tbody>
              {example.results.map((detail, index) => {
                return (
                  <Tr key={index} className="hoverCard">
                    <Td>{index + 1}</Td>
                    <Td>
                      <Flex alignItems={'center'} gap={2}>
                        <Image src={detail.icon_url} alt="logo" width={25} />
                        <Tooltip label={detail.name}>
                          <Link fontWeight={500} href={`/stock/${detail.code}`}>{detail.code}</Link>
                        </Tooltip>
                      </Flex>
                    </Td>
                    <Td>{detail.tradable_volume}</Td>
                    <Td>{detail.rating}</Td>
                    <Td>{formatCurrencyIDR(detail.price)}</Td>
                    <Td>{formatCurrencyIDR(detail.change)}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default RecomendationTable;
