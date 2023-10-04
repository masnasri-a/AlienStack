import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import IndexStock from "../components/dashboard/overview/index-stock";
import Globalndex from "../components/dashboard/overview/global-index";
import MoneyCurs from "../components/dashboard/overview/money-curs";

const Menu = () => {
  return (
    <div className="basic">
      <Spacer scale={4}>
        <Text fontWeight={600} fontSize={24}>
          Overview
        </Text>
        <Text fontWeight={400} fontSize={14} color={"gray.500"}>
          Description
        </Text>
        <Flex marginTop={'20px'} gap={'3%'} marginBottom={'20px'}>
          <Box width={"60%"}>
            <IndexStock />
          </Box>
          <Box width={'35%'}>
            <Globalndex/>
          </Box>
        </Flex>
        
        <MoneyCurs/>
      </Spacer>
    </div>
  );
};

export default Menu;
