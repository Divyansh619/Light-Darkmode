import React, { useState, usestate } from 'react'
import Content from './Content'
import Navbar from './Navbar'

const App = () => {
  const [dark, setDark] = useState(false)
  console.log(dark);
  return (
    <div>
      <Navbar setDark={setDark} dark={dark} />
      <Content dark={dark} />

    </div>
  )
}

export default App