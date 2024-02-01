import { Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
   
   
   <Navbar className='border-b-2'>
    <Link to ='/'
      className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        Hitendra's 
        <span  className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
        Blog
        </span>
        </Link>
        <form>
            <TextInput type ="text"
            placeholder='search here'
            rightIcon={AiOutlineSearch}
            >

            </TextInput>
        </form>
      </Navbar>
    )
}
