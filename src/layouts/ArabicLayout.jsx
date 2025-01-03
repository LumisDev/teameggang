import React, {useEffect} from 'react'
import { Outlet, Link } from 'react-router'

const ArabicLayout = () => {
    useEffect(() => {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'ar')
    }, [])
    
  return (
    <div className='font-arabic'>
        <nav className='flex flex-col items-center justify-center'>
            <Link to='/'>Switch to english</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default ArabicLayout