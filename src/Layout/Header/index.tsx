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
            <div
              style={{
                border: '1px solid #ccc',
                borderRadius: '35px',
                display: 'flex',
                alignItems: 'center',
                width: '50%',
                margin: '20px',
              }}
            >
              <SearchIcon sx={{ color: 'gray', marginLeft: 2 }} />
              <InputBase
                placeholder="Searching for..."
                style={{
                  color: 'gray',
                  width: '100%',
                  padding: '8px',
                }}
              />

              <Button
                variant="contained"
                sx={{
                  height: '50px',
                  borderRadius: '0 15px 15px 0',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Search
                </Typography>
              </Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
