import React, { useEffect } from 'react'
import { testApi } from '../api/apiRequest'

export default function HomePages(){

  useEffect(()=>{
    getApi)
  },[])

  const getApi=async ()=>{
    await testApi()
  }

  return (
    <div>HomePages</div>
  )
}
