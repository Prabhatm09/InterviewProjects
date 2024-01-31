// components/Signup.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Signup = ({ setActiveTab }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the window object is defined before accessing localStorage
    if (typeof window !== "undefined") {
      // Retrieve existing users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if the username is already taken
      if (storedUsers.some((user) => user.username === username)) {
        // Handle username already taken
        return;
      }

      const newErrors = {};
      if (!username.trim()) {
        newErrors.username = "Username is required";
      }
      if (!email.trim()) {
        newErrors.email = "Email is required";
      }
      if (!password.trim()) {
        newErrors.password = "Password is required";
      }

      if (Object.keys(newErrors).length === 0) {
        console.log("Signing up...", { username, email, password });
        // Switch the tab to "login" after successful signup
        setActiveTab("login");
      } else {
        setErrors(newErrors);
      }

      // Create a new user object
      const newUser = { username, email, password };

      // Save the new user to localStorage
      localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));

      // Dispatch the user to the Redux store
      dispatch(setUser(newUser));
      router.push("/");
    }
  };

  return (
    <>
      <h1>SignUp Page</h1>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password:
            </label>
            <div className="flex relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <span
                onClick={handleTogglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
