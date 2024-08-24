import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Calendar,
  Tag,
  Music,
  MapPin,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';


const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div>
        <header className="navbar bg-base-100 shadow-lg z-50 sticky top-0">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">dearDiary</span>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <button>
                  <Calendar /> Timeline
                </button>
              </li>
              <li>
                <button>
                  <Tag /> Tags
                </button>
              </li>
              <li>
                <button>
                  <MapPin /> Places
                </button>
              </li>
              <li>
                <button>
                  <Music /> Soundtrack
                </button>
              </li>
            </ul>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <button
              className="btn btn-ghost btn-circle"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src="/api/placeholder/100/100" alt="Profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <button>
                    <Settings /> Settings
                  </button>
                </li>
                <li>
                  <button>
                    <HelpCircle /> Help
                  </button>
                </li>
                <li>
                  <button>
                    <LogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default App
