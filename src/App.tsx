import { createTheme, ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from 'Layout/Header'
import './App.css'

function App() {
  const queryClient = new QueryClient()

  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 12,
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
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App
