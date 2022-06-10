import axios from "axios"

export const testApi=async()=>{
  try {
    const res =await axios.get('https://reqres.in/api/users?page=2')
    
  } catch (error) {
    console.log(error.message)
  }
}