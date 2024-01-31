"use client";
// Import necessary modules and components
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Use next/router instead of next/navigation

// Define the Layout component
function Layout() {
  // Initialize router
  const router = useRouter();

  // State to track user login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for the presence of window before accessing localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(storedIsLoggedIn === "true");
    }
  }, []);

  // Redirect to the login page if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  // Render the components if the user is logged in
  return (
    <>
      {isLoggedIn && (
        <>
          <Navbar />
          <Hero />
          <Footer />
        </>
      )}
    </>
  );
}

// Export the Layout component
export default Layout;
