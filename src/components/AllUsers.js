import React ,{useEffect,useState} from 'react'
import { deleteUser, getUsers } from '../services/Api'
import { Table, TableHead,TableBody,TableRow,TableCell ,styled, Button} from '@mui/material'
import { Tab } from '@mui/base'
import { Link } from 'react-router-dom'
const StyledTable= styled(Table)`
width:90%;
margin:50px auto 0px auto;
`

const Thead = styled(TableRow)`
background:#000;
& > th{
  color: #fff;
  font-size: 20px;
}
`
const TBody = styled(TableRow)`
& > td{
  font-size: 20px;
}
`
const AllUsers = () => {
  const [users, setUsers]=useState([])

useEffect(()=>{
     getUsersDetails();
},[])
// get user details
const getUsersDetails=async()=>{
  let response = await getUsers();
  setUsers(response.data)
}
// delete data
const deleteUserData=async(id)=>{
   await deleteUser(id)
   getUsersDetails()
   
}
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Phone</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
          {
            users.map(user=>(
               <TBody>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' style={{marginRight:10}} component={Link} to ={`/edit/${user.id}`}>Edit</Button>
                  <Button variant="contained" color='secondary' onClick={()=>deleteUserData(user.id)}>Delete</Button>
                </TableCell>
               </TBody>
          ))
          }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers