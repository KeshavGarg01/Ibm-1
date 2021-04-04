import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header' 
import { Container } from 'react-bootstrap'
import CohortScreen from './screens/CohortScreen'
import LoginScreen from './screens/LoginScreen'
import CourseScreen from './screens/CourseScreen'
import SessionScreen from './screens/SessionScreen'
import SessionSectionScreen from './screens/SessionSectionsScreen'
import ContentScreen from './screens/ContentScreen'
import HomeScreen from './screens/HomeScreen'
const  App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/cohort' component={CohortScreen} />
          <Route path='/courses' component={CourseScreen} />
          <Route path='/sessions' component={SessionScreen} />
          <Route path='/sections' component={SessionSectionScreen} />
          <Route path='/content' component={ContentScreen} />
          <Route path='/home' component={HomeScreen} />
        </Container>
      </main>
      
    </Router>
  )
}

export default App
