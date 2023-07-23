import React ,{useState,useEffect}from 'react'
import {FormGroup,FormControl,InputLabel,Input, Typography,Button,styled} from "@mui/material";
import { editUser, getUser } from '../services/Api';
import { useNavigate, useParams } from 'react-router-dom';
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
const EditUser = () => {
    const [user,setUser]= useState(intialValues)
    const navigate = useNavigate(); // useNavigate use for navigation 
    const {id}= useParams();      // use param is use for fetch the id for particular data
    useEffect(()=>{
           getUserData();
    },[])
    // get userData
    const getUserData=async()=>{
        let respnse =await getUser(id);
        console.log(respnse)
        setUser(respnse.data)
    }
    const onValueChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value})
        console.log("user data", user)
    }
    // edit user data 
    const addUserDetails=async()=>{
        await editUser(user,id);
        navigate('/all')
    }
  return (
<Container>
<Typography variant="h5">Edit User</Typography>
    <FormControl>
           <InputLabel>Name</InputLabel>
           <Input onChange={onValueChange} name="name" value={user.name}/>
    </FormControl>
    <FormControl>
           <InputLabel>Username</InputLabel>
           <Input onChange={onValueChange} name="username" value={user.username}/>
    </FormControl>
    <FormControl>
           <InputLabel>Email</InputLabel>
           <Input onChange={onValueChange} name="email" value={user.email}/>
    </FormControl>
    <FormControl>
           <InputLabel>Phone</InputLabel>
           <Input onChange={onValueChange} name="phone" value={user.phone}/>
    </FormControl>
    <FormControl>
        <Button onClick={addUserDetails} variant="contained">Edit User</Button>
    </FormControl>
</Container>
    )
}

export default EditUser