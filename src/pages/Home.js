import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <nav>
            <h1>Home</h1>
            <Link to={"/home"}>home</Link>
            <Link to={"/about"}>about</Link>
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer>
            Salam
        </footer>
    </div>
  )
}

export default Home