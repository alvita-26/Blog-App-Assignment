import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Link to="/" style={{color:'whte', textdecoration:'none',marginRight:'auto'}}><Typography variant="h6" component="div" > BLOG APP</Typography> </Link>&nbsp;
            <Link to="/home" >
            <Button variant="contained" color="error">HOME</Button>
            </Link> &nbsp; 
            <Link to="/add" >
            <Button variant="contained" color="error">ADD BLOG</Button>
            </Link> &nbsp; 
            

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar