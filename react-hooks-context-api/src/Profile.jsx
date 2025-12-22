import React, { useContext } from 'react'
import Welcome from './Welcome'
import Course from './Course'
import { UserContext } from './UserContext'


function Profile() {
  const user = useContext(UserContext);
  return (
    <div>
      <Welcome />
      <Course/>
    </div>
  )
}

export default Profile