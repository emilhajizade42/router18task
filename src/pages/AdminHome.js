import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AdminHome() {
  return (
    <div>
        <nav>
            <h1>Admin page</h1>
            <hr/>
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

export default AdminHome