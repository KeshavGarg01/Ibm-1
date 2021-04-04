import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Dropdown from 'react-bootstrap/Dropdown'

export const HomeScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading,error, userInfo, userRole } = userLogin

    useEffect(()=> {
        if(!userInfo) {
            history.push('/login')
        }
        
    }, [dispatch, history, userInfo])


    return (
        <>
        <h1 style={{"text-align": "center"}}>Dashboard</h1>
        { loading ? (<Loader>Loading....</Loader>) : error ? <Message variant='danger'>{error}</Message> :
        <div>
        
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  Menu
  </Dropdown.Toggle>

  <Dropdown.Menu show>
  <Dropdown.Item href="#/action-1">Unlock and Teach Sessions</Dropdown.Item>
            <Dropdown.Item href="/cohort">Manage Curriculum</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Conduct Assessment</Dropdown.Item>
            <Dropdown.Item href="#/action-1">View students’ performance</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        
        <h1 style={{"text-align": "center"}}>Welcome to smart kaksha..</h1>
        <h1 style={{"text-align": "center"}}>{userRole} Dashboard</h1>
    </div> }
    </>
    ) 
}

export default HomeScreen