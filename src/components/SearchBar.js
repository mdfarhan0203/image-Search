import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchItem,emptyImage } from '../redux/action/index';



export default function SearchBar() {
  const dispatch=useDispatch()
  const [input, setInput] = useState('')

  const hadlerSubmit = (event) => {
    event.preventDefault()
    dispatch(searchItem(input))
    dispatch(emptyImage())
    console.log(input)
  }

  return (
    <div className='search-bar'>
      <form onSubmit={hadlerSubmit}>
        <input
          type='text'
          className='search-bar-input'
          placeholder='Search High resolution images'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </div>
  )
}
