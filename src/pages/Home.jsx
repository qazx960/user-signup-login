import React, { useState } from 'react'

export const Home = () => {
    const [name, setName] = useState('')
  return (
    <h1>
     Welcome {name ? name : 'User'}
    </h1>
  )
}
