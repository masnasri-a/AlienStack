"use client";

import React, { useState } from 'react'
import Headers from '../components/auth/headers'
import { Box, Button, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { FiSearch, FiMail, FiEye, FiEyeOff } from 'react-icons/fi'
import Link from 'next/link';


export default function Login() {
    const [show, setShow] = React.useState(false)
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    const handleClick = () => setShow(!show)
    return (
        <div className='onlyScreen'>
            <Headers />
            <div className="container">
                <div className="cardSignIn">
                    <div className="heads">
                        <div className="signUp">
                            <p>Already have an account?</p>
                            <Link href={'/login'}><span>Sign In</span></Link>
                        </div>
                    </div>

                    <p className='headingTitle'>Welcome to AlienStock! Lets get you started.</p>
                    <Stack spacing={5}>

                        <span className='subHeadingTitle'>Sign up with your google account.</span>
                        <Button leftIcon={<FcGoogle />} variant='outline' height={'40px'} width={'100%'} borderRadius={'10px'}>
                            Sign Up with google
                        </Button>
                        <p className='or'>or</p>
                        <InputGroup size='md'>
                            <Input placeholder={'Email Address'} />
                        </InputGroup>


                        <InputGroup size='md'>
                            <Input placeholder={'Full Name'} />
                        </InputGroup>


                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <InputRightElement >
                                <Button colorScheme='whiteAlpha' onClick={handleClick}>
                                    {show ?

                                        <Icon as={FiEyeOff} color={'gray.500'} />
                                        :
                                        <Icon as={FiEye} color={'gray.500'} />
                                    }
                                </Button>
                            </InputRightElement>
                        </InputGroup>


                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password again'
                                onChange={(e) => setRepassword(e.target.value)}
                                isInvalid={password != repassword && repassword != ""}
                            />
                            <InputRightElement >
                                <Button colorScheme='whiteAlpha' onClick={handleClick}>
                                    {show ?

                                        <Icon as={FiEyeOff} color={'gray.500'} />
                                        :
                                        <Icon as={FiEye} color={'gray.500'} />
                                    }
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {
                            password == repassword && password != "" ?
                                <Button variant='solid' colorScheme='telegram' height={'40px'} width={'100%'} borderRadius={'10px'}>
                                    Sign Up
                                </Button> :
                                <Box as={'button'} disabled bgColor={'telegram.100'} color={'white'} height={'40px'} borderRadius={'10px'}>
                                    Sign Up
                                </Box>
                        }

                        <p className='forget'>Forgot Password? <span>Reset Now</span></p>

                    </Stack>


                </div>
            </div>
        </div>
    )
}
