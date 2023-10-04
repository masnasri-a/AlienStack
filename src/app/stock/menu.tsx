import { Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import RecomendationTable from '../components/dashboard/stock/recomendationTable'

const Menu = () => {
 
  return (
    <div className='basic'>
        <Spacer scale={4}>
        <Text fontWeight={600} fontSize={24}>
            Most Popular Stock
        </Text>
        <Text fontWeight={400} fontSize={14} color={"gray.500"}>
            Result for our stock pick and recomendation
        </Text>
        <Flex marginTop={'20px'} gap={'3%'} marginBottom={'20px'} width={'100%'}>
          <RecomendationTable/>
        </Flex>
        </Spacer>
    </div>
  )
}

export default Menu