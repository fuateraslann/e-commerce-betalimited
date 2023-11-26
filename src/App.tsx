import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from 'Layout/Header'
import './App.css'
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
      button: {
        textTransform: 'none',
      },
    },
    palette: {
      primary: {
        light: '#f44336',
        main: '#c1135cd6',
        dark: '#c1135ba',
        contrastText: '#fff',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          Learn React
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
