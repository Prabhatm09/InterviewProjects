// Import necessary modules and components
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// Define the Layout component
function Layout() {
  // Initialize router and check if the user is logged in
  const router = useRouter();

  // Check for the presence of window before accessing localStorage
  const isLoggedIn =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("isLoggedIn"));

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
