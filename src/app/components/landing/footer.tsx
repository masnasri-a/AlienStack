import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Logo from "@/../public/Logo-White.svg";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <div>
      <Card>
        <CardBody bgColor={"black"} color={"white"} paddingRight={20}>
          <Stack spacing={3}>
            <Flex alignItems={"center"} justifyContent={'center'} gap={1}>
              <Image alt="Logo" src={Logo} width={50} />
              <Text fontWeight={700}>AlienStock Inc.</Text>
            </Flex>
            <Flex justifyContent={'center'}>
            <Text fontWeight={400} textAlign={'center'}  fontSize={12} color={"gray.200"}>
              Get the inside scoop on companies like never before. <br />
              Complete your due diligence with AlienStock
            </Text>
            </Flex>
          </Stack>
        </CardBody>
        <hr />
        <CardFooter className="footerCard" bgColor={"black"} color={"white"}>
          <Text fontSize={12}>
            Ⓒ {currentYear} AlienStock Inc. All right reserved
          </Text>
          <HStack>
            <Button colorScheme="instagram">
              <FaFacebook />
            </Button>
            <Button colorScheme="instagram">
              <FaTwitter />
            </Button>
            <Button colorScheme="instagram">
              {" "}
              <FaInstagram />
            </Button>
          </HStack>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Footer;
