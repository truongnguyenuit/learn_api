import React, { useEffect, useState } from 'react'
import { testApi } from '../api/apiRequest'

export default function HomePages(){
  console.log("day la homepage")

  const [dataApi,setDataApi]=useState(null)

  useEffect(()=>{
    getApi()
  },[])

  const getApi=async ()=>{
    let result= await testApi()
    setDataApi(result)
  }

  useEffect(()=>{
    console.log("data ne ", dataApi)
  },[dataApi])

  return (
    <div>
    HomePages
    
    {dataApi && (
      <div>
        {dataApi.data.map((value,index)=>{

          return (
            <div key={index}>
                <img src={value} alt="" />
            </div>
          )
        })}
      </div>
    )}
    
    </div>

  )
}
