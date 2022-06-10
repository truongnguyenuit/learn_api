import axios from "axios"

export const testApi=async()=>{
  try {
    const res =await axios.get('https://reqres.in/api/users?page=2')
    console.log("day la res cua test api ", res.data)
    return res.data
  } catch (error) {
    console.log(error.message)
  }
  
}