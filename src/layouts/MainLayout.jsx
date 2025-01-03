import React, {useEffect} from 'react'
import { Link, Outlet } from 'react-router'

const MainLayout = () => {
    useEffect(() => {
          document.documentElement.setAttribute('dir', 'ltr')
          document.documentElement.setAttribute('lang', 'eng')
    }, [])
  return (
    <div>
        <nav className='flex flex-col items-center justify-center'>
            <Link to='/ar'>Switch to arabic</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default MainLayout