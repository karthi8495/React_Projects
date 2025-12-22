import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function Welcome() {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h1>Welcome {user.name}</h1>
    </div>
  )
}

export default Welcome