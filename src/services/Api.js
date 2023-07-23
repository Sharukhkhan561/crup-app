import axios from "axios";
 const API_URL="http://localhost:3002/users"
export const addUser=async(data)=>{
    try {
        return await axios.post(API_URL, data);
    } catch (error) {
        console.log("error while calling API",error.message)
    }
}
// get Allusers details
export const getUsers=async()=>{
    try {
        return await axios.get(API_URL)
    } catch (error) {
        console.log(error)
    }
}
// get user detail api
export const getUser=async(data)=>{
    try {
        return await axios.get(`${API_URL}/${data}`)
    } catch (error) {
        console.log(error)
    }
}
// edit api
export const editUser=async(data,id)=>{
    try {
        return await axios.put(`${API_URL}/${id}`,data)
    } catch (error) {
        console.log(error)
    }
}
//delete api
export const deleteUser=async(id)=>{
    try {
        return await axios.delete(`${API_URL}/${id}`)
    } catch (error) {
        console.log(error)
    }
}