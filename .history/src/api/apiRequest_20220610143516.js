import axios from "axios"

export const testApi=async()=>{
  try {
    consr res =await axios.get('')
  } catch (error) {
    console.log(error.message)
  }
}