import React, { useEffect, useState } from 'react'
import { testApi } from '../api/apiRequest'

export default function HomePages(){
  // console.log("day la homepage")
  const [data,setData]=useState
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
