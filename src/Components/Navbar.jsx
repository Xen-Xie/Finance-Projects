import React from 'react'
import {Button, Link, Navbar,NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react"
import { form } from '@heroui/theme'

function NavbarArea() {
  return (
    <>
        <Navbar shouldHideOnScroll isBlurred={false} className='bg-transparent' maxWidth='xl'>
            <NavbarBrand>
                <div className='w-25'>
                    <img src="logo.svg" alt="" />
                </div>
                

            </NavbarBrand>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <Button as={Link} color='primary' variant='bordered' radius='full'>
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    </>
  )
}

export default NavbarArea