

import React from 'react'
import { Stack, Box} from '@mui/material'
import {colors} from'../../constants/colors'
import { Link } from 'react-router-dom'
import './navbar.css'
import { SearchBar} from '../'

const Navbar = () => {
  return (
    <Stack 
    direction={'row'} 
    alignItems={'center'} 
    justifyContent={'space-between'}
    padding={1}
    sx={{position: 'sticky', top: 0,zIndex:999 , background: colors.primary}}
    >
        <Link to={'/'}> 
        <h4 className='logo' >Amonof-Tube</h4>
        </Link> 
        < SearchBar/>
        <Box/>
    </Stack>
  )
}

export default Navbar