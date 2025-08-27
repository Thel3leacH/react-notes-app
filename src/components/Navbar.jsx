import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 py-4">
      <div>
        <Link to="/" className="bg-amber-500">
          Rag notes
        </Link>
      </div>
      <ul className="flex gap-9">
        <li>
          <Link to="/login" className="bg-violet-700">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="bg-pink-500">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
