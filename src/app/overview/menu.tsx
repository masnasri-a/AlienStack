import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import IndexStock from "../components/dashboard/overview/index-stock";

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
        <Flex>
        <Box width={"60%"}>
          <IndexStock />
        </Box>
        </Flex>
      </Spacer>
    </div>
  );
};

export default Menu;
