import axios from "axios"

export const testApi=async()=>{
  try {
    const res =await axios.get('')
  } catch (error) {
    console.log(error.message)
  }
}