"use client";

import { useState } from "react";
import LoginForm from "@/components/login";
import SignupForm from "@/components/signup";
import Navbar from "@/components/navbar";
import Carousel from "@/components/imageCarosuel";

export default function Home() {
  const [activeTab, setActiveTab] = useState("login");

  const switchTabFromNavbar = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="bg-gray-100">
        <Navbar onTabChange={switchTabFromNavbar} />
        <div className="container mx-auto min-h-screen flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Carousel />
          </div>
          <div className="md:w-1/2  ">
            <div className="tabsContainer flex flex-col  items-center justify-center  h-full">
              <div className="tabs flex mb-4"></div>
              <div className="tabContent p-6 bg-white rounded-md shadow-2xl border border-blue-600">
                {activeTab === "login" && <LoginForm />}
                {activeTab === "signup" && (
                  <SignupForm setActiveTab={setActiveTab} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
