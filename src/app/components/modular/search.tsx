"use client"


import { Icon, Input, InputGroup, InputLeftAddon, InputLeftElement, Stack } from '@chakra-ui/react';
import React from 'react'
import { FiSearch } from 'react-icons/fi';
const Search = (props: any) => {
    return (
            <InputGroup size='md'>
                <InputLeftElement>
                    <Icon as={FiSearch} />
                </InputLeftElement>
                <Input placeholder={props.placeholder ? props.placeholder : 'Search .. '} bg={'white'}/>
            </InputGroup>
    )
}

export default Search