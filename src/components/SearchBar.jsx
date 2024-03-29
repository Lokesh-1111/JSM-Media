import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import React from 'react'

const SearchBar = () => {

  const [searchTerm,setSearchTerm] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      // console.log(searchTerm);
      setSearchTerm('')
    }
  }

  return (
    <Paper
    component='form'
    onSubmit={handleSubmit}
    sx={{borderRadius:5,
    border:'1px solid #e3e3e3',
    Pl:4,
    boxShadow:'none',
    mr:{sm:5}}}
    >
        <input 
        className='search-bar'
        placeholder='search'
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}} 
        />
        <IconButton type='submit' sx={{p:'10px',color:'red'}}>
        <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar