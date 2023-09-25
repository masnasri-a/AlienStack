"use client";

import React, { useState } from "react";
import Sidebar from "../components/dashboard/sidebar";
import Header from "../components/dashboard/header";
import { Flex, Stack } from "@chakra-ui/react";

export default function Dashboard() {
  const [minimized, setMinimized] = useState(false);
  return (
    <div className="dashboard">
      <Flex>
        <Sidebar minimized={(e: any) => setMinimized} />
        <div className="test">
          <Header minimized={minimized} />
          asd
        </div>
      </Flex>
    </div>
  );
}
