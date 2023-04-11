import { Provider } from 'react-redux';
import { Box } from '@mui/material'
import Home from './Home'
import { store } from './store/store';
import { ThemeProvider } from './theme'

function App() {
  return (
    <Provider store={store}>
      <Box sx={{backgroundColor:"#fff", height:"100vh"}}>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </Box>
    </Provider>
  )
}

export default App
