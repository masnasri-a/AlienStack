import Image from 'next/image'
import React from 'react'
import Logo from '@/../public/Logo.png'
import Link from 'next/link'
import { Button, Stack } from '@chakra-ui/react'

const Header = () => {
    return (
        <div className="headerLanding">
            <Image src={Logo} alt={'logo'} width={120} />
            <div className="menus">
                <Link href={'#topPick'} >Top Pick</Link>
                <Link href={'#news'} >News</Link>
                <Link href={'#recomendation'} >Recomendation</Link>
                <Link href={'#contact'} >Contact</Link>
            </div>
            <div className="auth-button">
                <div className="login-btn">
                    <Stack direction='row' spacing={4} align='center'>
                        <Button colorScheme='telegram' variant='outline'>
                            Sign In
                        </Button>
                        <Button colorScheme='telegram' variant='solid'>
                            Sign Up
                        </Button>
                    </Stack>
                </div>
                <div className="register-btn"></div>
            </div>
        </div>
    )
}

export default Header