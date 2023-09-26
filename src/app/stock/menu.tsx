import { Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Menu = () => {
  return (
    <div className='basic'>
        <Spacer scale={4}>
        <Text fontWeight={600} fontSize={24}>
            Stock Analytic
        </Text>
        <Text fontWeight={400} fontSize={14} color={"gray.500"}>
            Description
        </Text>
        </Spacer>
    </div>
  )
}

export default Menu