import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import { Navbar,VideoDetail,Feed,SearchFeed,ChannelDetail} from './components'

const App = () => (
  <BrowserRouter>
  <Box sx={{backgroundColor:'black'}}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/VideoDetail/:id" element={<VideoDetail />} />
      {/* <Route path="/ChannnelDetail/:id" element={<ChannelDetail />} /> */}
      <Route path="/Search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  </Box>
  </BrowserRouter>
)

export default App