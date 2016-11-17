import React from 'react'
import Link from 'react-router/lib/Link'

const App = ({children}) => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default App
