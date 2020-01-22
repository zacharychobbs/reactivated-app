import React from 'react'
import ReactDOM from 'react-dom'
import { AuthProvider } from '@contexts/AuthContext'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import App from './App'
import './index.css'

ReactDOM.render(
  <AuthProvider>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById('root'),
)
