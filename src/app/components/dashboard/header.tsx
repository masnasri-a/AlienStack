"use client";
import React, { useEffect, useState } from "react";
import Search from "../modular/search";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiBell, FiBellOff } from "react-icons/fi";
import Profile from "../modular/profile";

const Header = (props: any) => {
  const [notification, setNotification] = useState([]);
  const [unreadNotif, setUnreadNotif] = useState(0);
  const [countNotif, setCountNotif] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    fetch("/api/notification")
      .then((res) => res.json())
      .then((data) => {
        setNotification(data.data.data.results);
        setUnreadNotif(data.data.data.unread);
        setCountNotif(data.data.data.count);
      });
  }, []);
  function formatDateTime(inputDateTime: string): string {
    const date = new Date(inputDateTime);
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Buat string dengan format jam:menit WIB
    const formattedDateTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} WIB`;
    
    return formattedDateTime;
  }

  function formatDate(inputDate: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className={`headerDashboard`}>
      <Flex
        height={"100%"}
        paddingLeft={`32px`}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box width={500}>
          <Search placeholder="Search Stock ..." />
        </Box>
        <Box>
          <Flex alignItems={"center"} gap={5}>
            <Button onClick={onOpen}>
              {unreadNotif == 0 ? (
                <Icon as={FiBellOff} />
              ) : (
                <Icon as={FiBell} />
              )}
            </Button>
            <Profile isActive={true} />
          </Flex>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay 
        
        />
        <ModalContent>
          <ModalHeader>List Notifications</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {countNotif != 0 ? (
              <Accordion allowToggle>
                {notification.map((items, index) => {
                  return (
                    <AccordionItem key={index}>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <Text fontWeight={600}>
                              {formatDate((items as any).datetime)}
                            </Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      {((items as any).results as any).map(
                        (detail: any, index: number) => {
                          return (
                            <AccordionPanel
                              cursor={"pointer"}
                              key={index}
                              padding={5}
                              pb={5}
                              marginBottom={3}
                              bg={`${detail.isOpened ? "white" : "blue.100"}`}
                              borderRadius={10}
                              borderBottom={"1px solid black"}
                            >
                              <Text fontWeight={600}>{detail.title}</Text>
                              <br />
                              <Flex justifyContent={'flex-end'}>
                                <Text fontSize={12}>{formatDateTime(detail.datetime)}</Text>
                              </Flex>
                            </AccordionPanel>
                          );
                        }
                      )}
                      {/* {(items as any).results.map((detail:any, index:any) => {
                       ; */}
                      {/* })} */}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : (
              <Text>Not Found</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Header;
