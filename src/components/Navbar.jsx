import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'

import {logo} from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack 
  direction="row" p={2} alignItems="center" 
  sx={{backgroundColor:"#000", position:"sticky",justifyContent:'space-between' }}
  >
    <Link to='/' style={{display:'flex',alignItems:'center' }}>
    <img src={logo} alt='logo' height={45}/>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar