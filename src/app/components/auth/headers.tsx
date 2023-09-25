"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '@/../public/Logo.png'
import Search from '../modular/search'
import { BsFillBellFill, BsFillBellSlashFill } from 'react-icons/bs'
import Profile from '../modular/profile'

function Headers(props: any) {

    const [data, setData] = useState(null)
    // const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        fetch('/api/notification?numbers=22')
            .then((res) => res.json())
            .then((data) => {
                setData(data.data.data)
            }
            )
    }, [])

    return (
        <div className='headers'>
            <div className="leftSide">
                <Image src={Logo} width={150} alt='Logo' />
                <Search placeholder='Search Stock' />
            </div>
            <div className="rightSide">
                {
                    data ?
                        <div className='notifications'>
                            <BsFillBellFill id="icons" size={20} />
                        </div>
                        :
                        <div className='notifications'>
                            <BsFillBellSlashFill id="icons" size={20} />
                        </div>
                }
                <Profile isActive={true}/>
            </div>
        </div>
    )

}


export default Headers