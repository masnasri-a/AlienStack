"use client";

import React from 'react'
import Headers from '../components/auth/headers'
import { Button, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { FiSearch, FiMail, FiEye, FiEyeOff } from 'react-icons/fi'
import Link from 'next/link';


export default function Login() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <div className='onlyScreen'>
            <Headers />
            <div className="container">
                <div className="cardSignIn">
                    <div className="heads">
                        <div className="signUp">
                            <p>Have no account?</p>
                            <Link href={'/register'} ><span>Sign Up</span></Link>
                        </div>
                    </div>

                    <p className='headingTitle'>Welcome to AlienStock! Lets get you started.</p>
                    <Stack spacing={5}>

                        <span className='subHeadingTitle'>Login with your google account.</span>
                        <Button leftIcon={<FcGoogle />} variant='outline' height={'40px'} width={'100%'} borderRadius={'10px'}>
                            Log in with google
                        </Button>
                        <p className='or'>or</p>
                        <InputGroup size='md'>
                            <Input placeholder={'Email Address'} />
                        </InputGroup>

                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
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
                        <Button variant='solid' colorScheme='telegram' height={'40px'} width={'100%'} borderRadius={'10px'}>
                            Log In
                        </Button>
                        <p className='forget'>Forgot Password? <span>Reset Now</span></p>

                    </Stack>


                </div>
            </div>
        </div>
    )
}
