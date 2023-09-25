"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/landing/header'
import { Button, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack, VStack } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import TopPickSlider from './components/landing/top-pick'
import ListNews from './components/landing/list-news'
import RecomendationStockLanding from './components/landing/recomendation'
import Contact from './components/landing/contact'
import Footer from './components/landing/footer'


export default function Home() {

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
          <InputLeftElement  height={'40px'}>
            <Icon as={FiSearch} />
          </InputLeftElement>
          <Input
            pr='4.5rem'
            placeholder='Search Stocks'
          />
          <InputRightElement width='4.5rem'>
            <Button size='md' colorScheme='telegram' onClick={() => console.log('hehe')
            }>
              <span>Search</span>
            </Button>
          </InputRightElement>
        </InputGroup>
      </VStack>
      <div className="topPick" id='topPick'>
      <TopPickSlider />
      </div>
      <ListNews />
      <RecomendationStockLanding />
      <Contact/>
      <Footer/>
    </div>
  )
}
