import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[70px] bg-[rgba(1,1,1,0.8)] border-b border-gray-900 z-50">
        <div className="relative h-[70px] max-w-[1000px] w-full mx-auto flex px-8 items-center justify-between">
          <span className="logo">
            <a href="#" className="text-2xl font-medium text-[var(--nav-text)]">Cafes</a>
          </span>
          <div className="menu">
            <ul className="flex items-center">
              <li className="mx-1">
                <a href="#home" className="relative text-[17px] font-medium text-[var(--nav-text)] px-2 py-2 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mx-1">
                <a href="#about" className="relative text-[17px] font-medium text-[var(--nav-text)] px-2 py-2 hover:text-white">
                  About
                </a>
              </li>
              <li className="mx-1">
                <a href="#contact" className="relative text-[17px] font-medium text-[var(--nav-text)] px-2 py-2 hover:text-white">
                  Contact
                </a>
              </li>
              <li className="mx-1">
                <a href="#services" className="relative text-[17px] font-medium text-[var(--nav-text)] px-2 py-2 hover:text-white">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-search">
            <div className="search-box mx-1 h-10 w-10 flex items-center justify-center relative">
              <a href="#" id="search" className="text-2xl cursor-pointer text-[var(--nav-text)] flex items-center justify-center w-full h-full mx-[5px] ml-[20px] hover:text-white">
                <i data-feather="search"></i>
              </a>
              <a href="#" id="garis-tiga" className="text-2xl cursor-pointer text-[var(--nav-text)] flex items-center justify-center w-full h-full mx-[5px] ml-[20px] hover:text-white">
                <i data-feather="menu"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section
        className="min-h-screen flex items-center bg-center bg-no-repeat bg-cover"
        id="home"
        style={{ backgroundImage: "url('../assets/header-bg.jpg')" }}
      >
        <main className="content">
          <h1>
            Welcome to <span>Cafes</span>
          </h1>
          <p>
            Discover the best cafes in Indonesia with us. From cozy coffee shops to
            trendy cafes, we have it all. Explore our curated list of cafes and find
            your new favorite spot to enjoy a cup of coffee.
          </p>
          <a href="#about" className="button1">
            Menu
          </a>
        </main>
      </section>
    </>
    )
}