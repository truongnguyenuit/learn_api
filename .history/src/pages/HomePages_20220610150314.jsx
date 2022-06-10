import React, { useEffect, useState } from 'react'
import { testApi } from '../api/apiRequest'

export default function HomePages(){
  // console.log("day la homepage")
  const [data,setData]=useState(null)

  useEffect(()=>{
    getApi()
  },[])

  const getApi=async ()=>{
    let result= await testApi()
    setData(result)
  }

  useEffect

  return (
    <div>HomePages</div>
  )
}
