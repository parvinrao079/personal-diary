import { MapPin, Settings, HelpCircle, LogOut, Tag } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import darkLogo from '../../assets/personal-diary-logo-dark-theme.svg';
import lightLogo from '../../assets/personal-diary-logo-light-theme.svg';

const Header = () => {
  const [logo, setLogo] = useState(lightLogo);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setLogo(isDarkMode ? lightLogo : darkLogo);
  }, []);

  const handleThemeChange = (event) => {
    if (event.target.checked) {
      document.documentElement.classList.add('dark');
      setLogo(lightLogo); // Show light logo when dark mode is on
    } else {
      document.documentElement.classList.remove('dark');
      setLogo(darkLogo); // Show dark logo when light mode is on
    }
  };

  return (
    <div>
      <header className="navbar bg-base-200 shadow-lg z-50 sticky top-0 px-auto">
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
        <div className="flex-1 px-14 mx-2 flex items-center">
          <img src={logo} alt="Logo" className="h-32 w-18 mr-6" />
          <span className="text-4xl font-bold">dearDiary</span>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
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
          </ul>
        </div>
        <div className="flex-none gap-10">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="light"
                onChange={handleThemeChange}
              />

              {/* sun icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <div className="dropdown dropdown-end pr-20">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Profile"
                />
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
  );
};

export default Header;
