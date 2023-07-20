import React from 'react'
import {AppBar,Toolbar, Typography,styled} from "@mui/material";
import {NavLink} from "react-router-dom";
const Header= styled(AppBar)`
background:primary;
`
const Tabs= styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none
`
const Navbar = () => {
  return (
<Header position='static'>
    <Toolbar>
        <Tabs to="/">Crud App</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/add">Add User</Tabs>
    </Toolbar>
</Header>
    )
}

export default Navbar