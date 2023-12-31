import { useEffect } from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Header from 'Layout/Header'
import ProductList from 'Layout/ProductList'
import { store } from 'redux/store'
function App() {
  const queryClient = new QueryClient()

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('sessionID')
    }
  }, [])

  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 12,
      button: {
        color: '#be5155',
        textTransform: 'none',
      },
    },
    palette: {
      primary: {
        light: '#dda0a8',
        main: '#be5155',
        contrastText: '#fff',
      },
      secondary: {
        light: '#e6b9bf',
        main: '#c65866',
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <ProductList />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
