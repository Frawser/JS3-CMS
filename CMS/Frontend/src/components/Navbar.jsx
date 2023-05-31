import React from "react";
import { BsFire } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {

  const { token, updateToken } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("http://localhost:7777/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data) {
          setUser(data);
        }
        setIsLoggedIn(!!token);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);


  const handleLogout = () => {
    updateToken(null);
    navigate("/");
  };


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container d-flex">
        <Link to="/" className="navbar-brand">
          <BsFire />
          <span>Fruit Master</span>
        </Link>

        <ul className="navbar-nav mb-1 mb-lg-0">
          {isLoggedIn ? (
            <>
              <li><NavLink to="/products" className="btn btn-primary mx-2">Products</NavLink></li>
              <li><NavLink to="/create" className="btn btn-primary mx-2">Add</NavLink></li>
              <li><NavLink to="/create" onClick={handleLogout} className="btn btn-primary mx-2">Logout</NavLink></li>
            </>
          ) : (
            <>
            <li><NavLink to="/products" className="btn btn-primary mx-2">Products</NavLink></li>
            <li><NavLink to="/login" className="btn btn-primary mx-2">Login</NavLink></li>   
            </>
          )}
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
