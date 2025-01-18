import { AppBar,Button,IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='sticky'style={{backgroundColor:"black",borderRadius:"10px"}}>
            <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}style={{color:"white",fontFamily:"cursive"}}>The Blog App</Typography>
          <Link to='/addblog'>
          <Button variant='contained'style={{backgroundColor:"white", color:"black"}}>Add Blog</Button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to='/home'>
          <Button variant='contained'style={{backgroundColor:"white",color:"black"}}>Home</Button>
          </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar