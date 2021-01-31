import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './components/contexts/Auth'
import Bootstrap from './components/bootstrap'
import Home from './components/views/Home'
import Login from './components/views/Login'
import Upload from './components/views/Upload'


function App() {
  return (
    <AuthProvider>
      <Bootstrap>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/upload' component={Upload} />
        </Router>
      </Bootstrap>
    </AuthProvider>
  )
}

export default App
