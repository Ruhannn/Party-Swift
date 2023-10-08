import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
const Header = () => {
  const getNavLinkClass = ({ isActive }) => `
  transition-colors ${
    isActive
      ? "bg-[#1C64F2] rounded-lg text-white"
      : "bg-base-100 rounded-lg dark:bg-[#ff79c6]"
  }
`;
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDarkMode ? "dark" : "light");
    }
  }, []);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const NavLinks = (
    <>
      <NavLink to="/" className={getNavLinkClass}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/login" className={getNavLinkClass}>
        <li>
          <a>Log In</a>
        </li>
      </NavLink>
      <NavLink to="/signup" className={getNavLinkClass}>
        <li>
          <a>Sign Up</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar dark:bg-[#1a1b26] bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-base-100c  dark:bg-[#1a1b26] rounded-box gap-6 w-52">
            {NavLinks}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost normal-case dark:text-[#f8f8f2] text-xl">
          Party Swift
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  menu-horizontal gap-8 px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <button
          onClick={handleThemeSwitch}
          className="btn bg-transparent border-none dark:hover:bg-[#282a36]">
          {theme === "dark" ? <FaSun className="text-white" /> : <FaMoon />}
        </button>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {theme === "dark" ? (
                <img src="https://cdn.discordapp.com/attachments/1071386240252907530/1159863528178602014/CSblg2s.png?ex=65329216&is=65201d16&hm=c2d495cbda530a4c9f6a2b697ffe37b31796eba26dde9f73e3a16e644ff18f5c&" />
                
                ) : (
                  <img src="https://cdn.discordapp.com/attachments/1071386240252907530/1159863527847248034/bu8p9SX.png?ex=65329216&is=65201d16&hm=43db634799e0316e6bb955c35eb5d4b80c006dd43afccd55ad007c85f0502e04&" />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-[#282a36] dark:text-[#f8f8f2] rounded-box w-52">
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
