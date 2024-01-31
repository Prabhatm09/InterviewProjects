import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = ({ onTabChange }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if window is defined before accessing localStorage
    if (typeof window !== "undefined") {
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));

      if (storedIsLoggedIn && storedUser) {
        setIsLoggedIn(true);
        setUser(storedUser);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUser(null);
    router.push({
      pathname: "/",
    });
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-semibold">
          <a>Logo</a>
        </div>
        <div className="flex space-x-4">
          {!isLoggedIn ? (
            <>
              <a
                className="text-white cursor-pointer"
                onClick={() => onTabChange("login")}
              >
                Login
              </a>

              <a
                className="text-white cursor-pointer"
                onClick={() => onTabChange("signup")}
              >
                Sign Up
              </a>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <p className="text-white">Welcome, {user.username}</p>
              <button onClick={handleLogout} className="text-white">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
