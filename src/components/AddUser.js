import React ,{useState}from 'react'
import {FormGroup,FormControl,InputLabel,Input, Typography,Button,styled} from "@mui/material";
import { addUser } from '../services/Api';
const Container =styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
    margin-top : 20px
}

`
const intialValues={
    name:"",
    username:"",
    email:"",
    phone:""
}
const AddUser = () => {
    const [user,setUser]= useState(intialValues)
    // console.log("insital values are",user)
    const onValueChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
        console.log("user data", user)
    }
    const addUserDetails=async()=>{
        await addUser(user);
    }
  return (
<Container>
<Typography variant="h5">Add User</Typography>
    <FormControl>
           <InputLabel>Name</InputLabel>
           <Input onChange={onValueChange} name="name"/>
    </FormControl>
    <FormControl>
           <InputLabel>Username</InputLabel>
           <Input onChange={onValueChange} name="username"/>
    </FormControl>
    <FormControl>
           <InputLabel>Email</InputLabel>
           <Input onChange={onValueChange} name="email"/>
    </FormControl>
    <FormControl>
           <InputLabel>Phone</InputLabel>
           <Input onChange={onValueChange} name="phone"/>
    </FormControl>
    <FormControl>
        <Button onClick={addUserDetails} variant="contained">Add User</Button>
    </FormControl>
</Container>
    )
}

export default AddUser