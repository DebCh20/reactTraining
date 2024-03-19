import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Passport() {
  return (
    <>
    <h1>Welcome to the passport page</h1>
    <div>
    <Link to='/passport/regular'>
        <button type="button" class="btn btn-outline-primary m-2">Regular</button>
    </Link>
    <Link to='/passport/tatkal'>
        <button type="button" class="btn btn-outline-primary m-2">Tatkal</button>
    </Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Passport