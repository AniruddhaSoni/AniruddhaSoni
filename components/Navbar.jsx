export default function Navbar() {
  return (
    <div className="sticky top-0 w-full bg-neutral">
      <div className=" navbar bg-neutral  lg:w-10/12 m-auto justify-between">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>HOME</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">ABOUT</a>
              </li>
              <li>
                <a>RESUME</a>
              </li>
              <li>
                <a>SKILLS</a>
              </li>
              <li>
                <a>PROJECTS</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-accent normal-case text-xl">
            Aniruddh Soni
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>RESUME</a>
            </li>
            <li>
              <a>SKILLS</a>
            </li>
            <li>
              <a>PROJECTS</a>
            </li>
          </ul>
        </div>
        <div className=" navbar-end">
          <a className="btn-accent btn btn-outline">CONTACT</a>
        </div>
      </div>
    </div>
  );
}
