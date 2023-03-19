import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'

import logo from '../logo.jpg'

const Header = () => {
  const location = useLocation()
  const [isLogin, setIsLogin] = useState(true)

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
        <div className="lg:hover:cursor-pointer border-2 border-solid border-black rounded-full p-1">
          <BiUser className="text-2xl" />
        </div>
      ) : (
        <div>
          <p className="uppercase font-semibold mobile:text-sm sm:text-base text-center">
            đăng nhập
          </p>
        </div>
      )}
    </header>
  )
}

export default Header
