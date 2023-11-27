import { AppBar, Toolbar, Grid } from '@mui/material'
import Logo from 'assets/logo-dark.png'
import SearchBar from './SearchBar'
import { CartModal } from 'components'
const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={4} sm={4}>
            <img
              src={Logo}
              alt="Logo"
              style={{ height: '50px', marginRight: '10px' }}
            />
          </Grid>
          <Grid item xs={7} sm={6} sx={{ textAlign: 'center' }}>
            <SearchBar />
          </Grid>
          <Grid item xs={1} sm={2}>
            <CartModal />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
