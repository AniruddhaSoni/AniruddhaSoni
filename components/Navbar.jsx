export default function Navbar() {
  return (
    <div className="sticky navbar bg-base-100 justify-center">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>RESUME</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>SKILLS</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
