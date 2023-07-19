import React from 'react'
import { useSelector } from 'react-redux'




export default function ImageList() {
  const image11 = useSelector((state) => state.reduce.images)

  return (
    <div className='image-list'>
    {image11 && image11.map((image,index)=>{
       return <li key={index}> <img className='img' src={image.urls.small} alt={image.alt_description} /></li>
      })}
    </div>
  )
}


