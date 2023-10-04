"use client";

import React, { useState } from "react";
import Sidebar from "../../components/dashboard/sidebar";
import Header from "../../components/dashboard/header";
import { Flex } from "@chakra-ui/react";
import Menu from "./menu";

export default function Dashboard({ params }: { params: { slug: string } }) {
  const [minimized, setMinimized] = useState(false);
  return (
    <div className="dashboard">
      <Flex>
        <Sidebar selected={1} minimized={(e: any) => setMinimized} />
        <div className="test">
          <Header minimized={minimized} />
          <Menu slug={params.slug}/>
        </div>
      </Flex>
    </div>
  );
}
