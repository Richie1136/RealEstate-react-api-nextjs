import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header>
      <div>Real Estate App</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetups</Link>
          </li>
          <li>
            <Link href='/newmeetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default NavBar