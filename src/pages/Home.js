import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link className='navbar-brand' to={"/home"}>Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link className='nav-link' to={"/home"}>Home</Link>
                </li>
                <li class="nav-item">
                  <Link className='nav-link' to={"/about"}>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      <main className='h3 mt-3'>
        <Outlet />
      </main>
      <footer className='p-5 mt-5 bg-primary text-light'>
        Home Footer
      </footer>
    </div>
  )
}

export default Home