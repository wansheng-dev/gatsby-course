import React from 'react'
import Navbar from './Navbar'

import '../styles/global.css'

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear()
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer>
        <p>Copyright {currentYear} Web Developer</p>
      </footer>
    </div>
  )
}
