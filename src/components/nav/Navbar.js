import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
    </div>
  );
};

export default Navbar;
