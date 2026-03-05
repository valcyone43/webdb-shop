import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Search, Menu } from 'lucide-react'
import Home from './pages/home'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="fixed top-0 left-0 w-full h-[70px] bg-black/80 border-b border-[rgb(29,29,29)] z-[99999]">
        <div className="relative h-[70px] max-w-[1000px] w-full mx-auto flex px-[30px] items-center justify-between">
          <span className="logo">
            <a href="#" className="text-[25px] font-medium text-[#f77124] no-underline">
              Cafes
            </a>
          </span>
          <div className="menu">
            <ul className="flex items-center">
              <li className="list-none mx-[5px]">
                <a href="#home" className="nav-link relative text-[17px] font-medium text-[#f77124] p-[10px] no-underline hover:text-white">
                  Home
                </a>
              </li>
              <li className="list-none mx-[5px]">
                <a href="#about" className="nav-link relative text-[17px] font-medium text-[#f77124] p-[10px] no-underline hover:text-white">
                  About
                </a>
              </li>
              <li className="list-none mx-[5px]">
                <a href="#contact" className="nav-link relative text-[17px] font-medium text-[#f77124] p-[10px] no-underline hover:text-white">
                  Contact
                </a>
              </li>
              <li className="list-none mx-[5px]">
                <a href="#services" className="nav-link relative text-[17px] font-medium text-[#f77124] p-[10px] no-underline hover:text-white">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-search">
            <div className="mx-[5px] h-10 w-10 flex items-center justify-center relative">
              <a href="#" id="search" className="text-[22px] text-[#f77124] flex items-center justify-center w-full h-full ml-5 cursor-pointer hover:text-white">
                <Search />
              </a>
              <a href="#" id="garis-tiga" className="text-[22px] text-[#f77124] flex items-center justify-center w-full h-full mx-[5px] cursor-pointer hover:text-white">
                <Menu />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}