"use client";

import React, { useState } from "react";
import Sidebar from "../components/dashboard/sidebar";
import Header from "../components/dashboard/header";
import { Flex } from "@chakra-ui/react";
import Menu from "./menu";

export default function Dashboard() {
  const [minimized, setMinimized] = useState(false);
  return (
    <div className="dashboard">
      <Flex>
        <Sidebar minimized={(e: any) => setMinimized} />
        <div className="test">
          <Header minimized={minimized} />
          <Menu/>
        </div>
      </Flex>
    </div>
  );
}
