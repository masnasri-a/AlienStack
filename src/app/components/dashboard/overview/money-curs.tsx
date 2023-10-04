import ColorFormat from "@/app/util/color-text";
import formatCurrencyIDR from "@/app/util/currency-format";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MoneyCurs = () => {
  const example = {
    err_code: "EC0000000",
    err_message: "APPROVED/OK",
    result: {
      idr_rates: [
        {
          code: "USD/IDR",
          name: "USD/IDR",
          price: 15488.5,
          change: 164.5,
          change_pct: 0.0107348,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033026088-USD_IDR.png",
        },
        {
          code: "EUR/IDR",
          name: "EUR/IDR",
          price: 16327.5,
          change: -65.0,
          change_pct: -0.003965228,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033229864-EUR_IDR.png",
        },
        {
          code: "JPY/IDR",
          name: "JPY/IDR",
          price: 103.66,
          change: 0.02,
          change_pct: 0.0001929757,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033260786-JPY_IDR.png",
        },
        {
          code: "CHF/IDR",
          name: "CHF/IDR",
          price: 16924.35,
          change: -231.1,
          change_pct: -0.01347094,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033203349-CFP_IDR.png",
        },
        {
          code: "CNY/IDR",
          name: "CNY/IDR",
          price: 2121.4,
          change: 34.5,
          change_pct: 0.0165317,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033218257-CNY_IDR.png",
        },
        {
          code: "CAD/IDR",
          name: "CAD/IDR",
          price: 11406.9,
          change: 170.2,
          change_pct: 0.0151468,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033186346-CAD_IDR.png",
        },
        {
          code: "SGD/IDR",
          name: "SGD/IDR",
          price: 11330.91,
          change: 114.44,
          change_pct: 0.01020285,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033277385-SGD_IDR.png",
        },
        {
          code: "AUD/IDR",
          name: "AUD/IDR",
          price: 9963.45,
          change: 196.7,
          change_pct: 0.02013976,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033173061-AUD_IDR.png",
        },
      ],
      usd_rates: [
        {
          code: "USD/IDR",
          name: "USD/IDR",
          price: 15488.5,
          change: 164.5,
          change_pct: 0.0107348,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033026088-USD_IDR.png",
        },
        {
          code: "USD/GBP",
          name: "USD/GBP",
          price: 0.82,
          change: 0.02,
          change_pct: 0.025,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033632030-USD_GBP.png",
        },
        {
          code: "EUR/USD",
          name: "EUR/USD",
          price: 1.06,
          change: -0.01,
          change_pct: -0.009345794,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601034050346-EUR_USD.png",
        },
        {
          code: "USD/EUR",
          name: "USD/EUR",
          price: 0.95,
          change: 0.02,
          change_pct: 0.02150538,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033748677-USD_EUR.png",
        },
        {
          code: "GBP/USD",
          name: "GBP/USD",
          price: 1.22,
          change: -0.03,
          change_pct: -0.024,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601034037711-GBP_USD.png",
        },
        {
          code: "USD/JPY",
          name: "USD/JPY",
          price: 149.38,
          change: 1.55,
          change_pct: 0.01048502,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033761377-USD_JPY.png",
        },
        {
          code: "USD/CHF",
          name: "USD/CHF",
          price: 0.92,
          change: 0.03,
          change_pct: 0.03370787,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033775218-USD_CFP.png",
        },
        {
          code: "USD/CNY",
          name: "USD/CNY",
          price: 7.3,
          change: -0.04,
          change_pct: -0.005449591,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033651561-USD_CNY.png",
        },
        {
          code: "USD/CAD",
          name: "USD/CAD",
          price: 1.36,
          change: 0.0,
          change_pct: 0,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033728847-USD_CAD.png",
        },
        {
          code: "USD/SGD",
          name: "USD/SGD",
          price: 1.37,
          change: 0.0,
          change_pct: 0,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033796511-USD_SGD.png",
        },
        {
          code: "USD/AUD",
          name: "USD/AUD",
          price: 1.555,
          change: -0.015,
          change_pct: -0.00955414,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033815374-USD_AUD.png",
        },
      ],
      other_currency_rates: [
        {
          code: "EUR/GBP",
          name: "EUR/GBP",
          price: 0.87,
          change: 0.01,
          change_pct: 0.01162791,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601034064849-EUR_GBP.png",
        },
        {
          code: "EUR/CHF",
          name: "EUR/CHF",
          price: 0.97,
          change: 0.01,
          change_pct: 0.01041667,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601034088117-EUR_CHF.png",
        },
        {
          code: "GBP/CHF",
          name: "GBP/CHF",
          price: 1.12,
          change: 0.01,
          change_pct: 0.009009009,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601033992598-GBP_CHF.png",
        },
        {
          code: "EUR/CNY",
          name: "EUR/CNY",
          price: 7.72,
          change: -0.14,
          change_pct: -0.0178117,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601034079174-EUR_CNY.png",
        },
        {
          code: "GBP/EUR",
          name: "GBP/EUR",
          price: 1.15,
          change: -0.015,
          change_pct: -0.01287554,
          icon_url:
            "https://ajaib-files.s3-ap-southeast-1.amazonaws.com/bank/1601034024735-GBP_CNY.png",
        },
      ],
    },
    count: 0,
  };
  return (
    <div>
      <Card width={"98%"}>
        <CardHeader>
          <Text fontWeight={600}>Money Curs</Text>
        </CardHeader>
        <CardBody>
          <SimpleGrid minChildWidth="240px" spacing="40px">
            {example.result.idr_rates.map((detail, index) => {
              return (
                <Box
                  height="80px"
                  key={index}
                  padding={"10px"}
                  borderWidth={"1px"}
                  borderRadius={"10px"}
                >
                  <Flex justifyContent={'space-between'}>
                    <div className="tests">
                      <Flex alignItems={"center"} gap={2}>
                        <Image
                          src={detail.icon_url}
                          alt="images"
                          width={10}
                          height={7}
                        />
                        <Text fontWeight={500}>{detail.name}</Text>
                      </Flex>
                      <Text marginTop={'10px'}>{formatCurrencyIDR(detail.price)}</Text>
                    </div>
                    {ColorFormat(detail.change)}
                  </Flex>
                </Box>
              );
            })}
          </SimpleGrid>
        </CardBody>
      </Card>
    </div>
  );
};

export default MoneyCurs;
