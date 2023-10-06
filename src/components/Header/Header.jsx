import { Link } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <Link to="/">
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to="/login">
        <li>
          <a>Log In</a>
        </li>
      </Link>
      <Link to="/signup">
        <li>
          <a>Sign Up</a>
        </li>
      </Link>
      <Link to="">
        <li>
          <a></a>
        </li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Party Swift</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://cdn.discordapp.com/attachments/1071386240252907530/1159863528178602014/CSblg2s.png?ex=65329216&is=65201d16&hm=c2d495cbda530a4c9f6a2b697ffe37b31796eba26dde9f73e3a16e644ff18f5c&" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
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
