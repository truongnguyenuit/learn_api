import React, { useEffect } from 'react'
import { testApi } from '../api/apiRequest'

export default function HomePages(){
  // console.log("day la homepage")

  useEffect(()=>{
    getApi()
  },[])

  const getApi=async ()=>{
    await testApi()
  }

  return (
    <div>HomePages</div>
  )
}
