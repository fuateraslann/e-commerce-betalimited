import {
  AppBar,
  Toolbar,
  InputBase,
  Grid,
  Typography,
  Button,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Logo from 'assets/logo-dark.png'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} sm={3}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: '50px', marginRight: '10px' }}
            />
          </Grid>
          <Grid item xs={6} sm={9} sx={{ textAlign: 'center' }}>
            <SearchBar />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
