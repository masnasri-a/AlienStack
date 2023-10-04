"use client";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const IndexStock = () => {
  const [labels, setLabels] = useState<any[]>([]);
  const [prices, setPrices] = useState<any[]>([]);
  const [indexDetail, setIndexDetail] = useState({});
  useEffect(() => {
    fetch("/api/index-stock")
      .then((res) => res.json())
      .then((data) => {
        const points = data.data.result.points;
        points.map((detail: any, index: any) => {
          if (index % 4 == 0) {
            setLabels((prevItem) => [
              ...prevItem,
              formatTimestamp((detail as any).updateTime),
            ]);
            setPrices((prevItem) => [
              ...prevItem,
              Math.floor((detail as any).to_price),
            ]);
          }
        });
      });
    fetch("/api/ihsg")
      .then((res) => res.json())
      .then((data) => {
        setIndexDetail(data.data);
      });
  }, []);

  function formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    const year = date.getFullYear().toString().slice(-2); // Mengambil 2 digit terakhir tahun
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Bulan dimulai dari 0, jadi perlu ditambah 1
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
  };

  const datas = {
    labels,
    datasets: [
      {
        label: "Price",
        data: prices,
        borderColor: "rgb(48, 132, 255)",
      },
    ],
  };

  return (
    <Card>
      <CardHeader>
        <Flex justifyContent={"space-between"}>
          <Spacer scale={4}>
            <Text fontWeight={600}>{(indexDetail as any).shown_code}</Text>
            <Text fontWeight={400} fontSize={14} color={"gray.500"}>
              {(indexDetail as any).name}
            </Text>
          </Spacer>
          <Spacer scale={4}>
            <Flex justifyContent={"flex-end"} gap={2} alignItems={'center'}>
              <Badge variant={'solid'} colorScheme={'green'} borderRadius={'10'} height={'20px'} width={'45px'}> 2.25% </Badge>
              <Text fontWeight={600}>3 Month</Text>
            </Flex>
          </Spacer>
        </Flex>
      </CardHeader>
      <CardBody>
        <Line options={options} data={datas} />
      </CardBody>
    </Card>
  );
};

export default IndexStock;
