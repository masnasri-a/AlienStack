"use client";
import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "@/../public/Logo.svg";
import {
  FiBook,
  FiDivideCircle,
  FiDollarSign,
  FiGrid,
  FiLogOut,
  FiMaximize2,
  FiMinimize2,
  FiSmile,
  FiTrendingUp,
} from "react-icons/fi";
import Image from "next/image";

const Sidebar = (props: any) => {
  const [active, setActive] = useState(0);
  const [minimize, setMinimize] = useState(false);
  const menu = [
    {
      icon: FiGrid,
      title: "Overview",
      slug: "overview",
    },
    {
      icon: FiTrendingUp,
      title: "Stock Analytic",
      slug: "stock",
    },
    {
      icon: FiDollarSign,
      title: "Price Prediction",
      slug: "price",
    },
    {
      icon: FiSmile,
      title: "Sentiment Analytic",
      slug: "sentiment",
    },
    {
      icon: FiBook,
      title: "Market News",
      slug: "news",
    },
    {
      icon: FiDivideCircle,
      title: "Money Calculator",
      slug: "calculator",
    },
  ];
  return (
    <div className={`sidebar ${minimize ? "minimized" : "maximized"}`}>
      <Flex
        justifyContent={"space-between"}
        padding={"18px"}
        marginBottom={4}
        transition={"1s"}
      >
        <Link href="/dashboard">
          <Flex alignItems={"center"} gap={2}>
            <Image src={Logo} alt="Logo" width={50} />
            <Text fontWeight={700} fontSize={20}>
              {minimize ? "" : "AlienStack"}
            </Text>
          </Flex>
        </Link>
        <Button
          onClick={() => {
            props.minimized(!minimize);
            setMinimize(!minimize);
          }}
          bg={"transparent"}
        >
          {minimize ? (
            <>
              <FiMinimize2 />
            </>
          ) : (
            <>
              <FiMaximize2 />
            </>
          )}
        </Button>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"85vh"}
      >
        <Spacer scale={4}>
          {menu.map((detail, index) => {
            return (
              <div
                key={index}
                className={`menuSelected ${
                  active == index ? "menuActive" : ""
                }`}
                onClick={() => setActive(index)}
              >
                <Flex gap={2} alignItems={"center"} paddingLeft={4}>
                  <Icon as={(detail as any).icon} />
                  <span>{!minimize ? (detail as any).title : ""}</span>
                </Flex>
              </div>
            );
          })}
        </Spacer>
        <Flex justifyContent={"center"} alignItems={"flex-end"}>
          <Button
            leftIcon={<FiLogOut />}
            bg={`${minimize ? "transparent" : "gray.200"}`}
          >
            <Text align={"center"}>{minimize ? null : "Logout"}</Text>
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Sidebar;
