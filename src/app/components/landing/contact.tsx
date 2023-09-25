import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Contact = () => {
  const Map = dynamic(() => import("./maps"), {
    loading: () => <p>loading...</p>,
    ssr: false,
  });
  return (
    <div className="contact" id="contact">
      <div className="leftSide">
      <Stack spacing={4}>
        <Text fontSize={24} fontWeight={600}>Get It Touch.</Text>
        <Text color={"gray.600"}>
        Welcome to our contact page! We want to hear from you. <br /> We are ready to answer your questions, receive feedback, or assist with anything you need. <br /> Please reach out to us.
        </Text>
          <div className="name">
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </div>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
          <Textarea placeholder='Here is a sample placeholder' />
          </FormControl>
          <br />
          <Button colorScheme="telegram" variant="solid">
            Send Message
          </Button>
        </Stack>
      </div>
      <div className="rightSide">
        <Map />
      </div>
    </div>
  );
};

export default Contact;
