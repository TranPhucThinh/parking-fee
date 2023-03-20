import { useEffect, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import Cookies from 'universal-cookie'

import logo from '../logo.jpg'

const Header = () => {
  const location = useLocation()
  const [isLogin, setIsLogin] = useState(false)

  const cookies = new Cookies()
  const tokenAccess = cookies.get('tokenAccess')

  useEffect(() => {
    if (tokenAccess) {
      setIsLogin(true)
    }
  }, [tokenAccess])

  if (location.pathname === '/login' || location.pathname === '/register') {
    return null
  }

  return (
    <header className="space-two-side fixed h-24 w-full bg-white shadow-md flex items-center justify-between">
      <div className="min-w-[96px] w-24 h-auto">
        <img className="max-w-full h-auto" src={logo} alt="logo" />
      </div>
      <input
        type="text"
        className="h-10 w-[40%] md:w-[60%] input__field"
        placeholder="Tìm kiếm..."
      />
      {isLogin ? (
        // <div className="relative">
        <div className="lg:hover:cursor-pointer border-2 border-solid border-black rounded-full p-1">
          <BiUser className="text-2xl" />
        </div>
      ) : (
        // <div className="absolute bg-gray-400 w-32 right-0 translate-x-1/2">
        // <p className="text-center">Đăng xuất</p>
        // </div>
        // </div>
        <div>
          <Link to="/login">
            <p className="uppercase font-semibold mobile:text-sm sm:text-base text-center">
              đăng nhập
            </p>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
