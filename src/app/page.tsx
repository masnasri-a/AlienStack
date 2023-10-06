"use client"

import Header from './components/landing/header'
import { Box, Button, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Table, TableContainer, Tbody, Td, Tr, VStack, useDisclosure } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import TopPickSlider from './components/landing/top-pick'
import ListNews from './components/landing/list-news'
import RecomendationStockLanding from './components/landing/recomendation'
import Contact from './components/landing/contact'
import Footer from './components/landing/footer'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';

export default function Home() {
  const [search, setSearch] = useState<string>('')
  const [searchDebounce] = useDebounce(search, 1000);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [listStock, setListStock] = useState([])

  const searchStock = (param: string) => {
    fetch('/api/list-stock?stock=' + param).then((res) => res.json())
      .then((data) => {
        setListStock(data.response.data);
        console.log(data.response.data);

      })
  }
  useEffect(() => {
    searchStock(searchDebounce)
  }, [searchDebounce])
  return (
    <div className='bodyLanding'>
      <Header />
      <p className="headingLanding">
        Make Better Investment
        <br />
        Decision With Alternative Data
      </p>
      <VStack spacing={3} align='center'>
        <span>
          Get the inside scoop on companies like never before.
          <br />
          Complete your due diligence with AlienStock
        </span>
        <InputGroup marginTop={20} bg={'white'} marginBottom={20} size='md' width={'40%'}>
          <InputLeftElement height={'40px'}>
            <Icon as={FiSearch} />
          </InputLeftElement>
          <Input
            pr='4.5rem'
            placeholder='Search Stocks'
            onClick={onOpen}
          />
          <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
              <ModalBody>
                <InputGroup bg={'white'} marginTop={'20px'} size='md' width={'100%'}>
                  <InputLeftElement height={'40px'}>
                    <Icon as={FiSearch} />
                  </InputLeftElement>
                  <Input
                    pr='4.5rem'
                    placeholder='Search Stocks'
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
                <TableContainer>
                  <Table variant='simple'>
                    <Tbody>
                      {
                        !listStock?
                        (<Tr>
                          <Td>
                            ...
                          </Td>
                        </Tr>):
                        (
                          listStock.map((detail: any, index: any) => {
                            return <Tr key={index}>
                              <Td>
                                <Link href={`/stock/${detail.Code}`} >
                                {detail.Code} - {detail.Name}
                                </Link>
                              </Td>
                            </Tr>
                          })
                        )
                      }
                    </Tbody>
                  </Table>
                </TableContainer>
              </ModalBody>
            </ModalContent>
          </Modal>
          {/* <InputRightElement width='4.5rem'>
            <Button size='md' colorScheme='telegram' onClick={() => console.log('hehe')
            }>
              <span>Search</span>
            </Button>
          </InputRightElement> */}
        </InputGroup>

      </VStack>
      <div className="topPick" id='topPick'>
        <TopPickSlider />
      </div>
      <ListNews />
      <RecomendationStockLanding />
      <Contact />
      <Footer />
    </div>
  )
}
