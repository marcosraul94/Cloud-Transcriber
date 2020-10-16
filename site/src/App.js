import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './components/contexts/Auth'
import Home from './components/views/Home'
import Login from './components/views/Login'


function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Router>
    </AuthProvider>
  )
}

export default App
