"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Navbar = ({ onTabChange }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("currentUser"));
  //   const user = useSelector(selectUser);
  useEffect(() => {
    // Check if user is logged in on mount
    // Retrieve user data from localStorage if needed
    if (isLoggedIn && !user) {
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));
      if (storedUser) {
        // Dispatch the user to the Redux store
        // You may need to have a setUser action in your userSlice
        dispatch(setUser(storedUser));
      }
    }
  }, [isLoggedIn, user, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    router.push("/");
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
