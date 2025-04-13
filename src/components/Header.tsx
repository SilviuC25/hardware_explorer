"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar openSidebar={() => setIsSidebarOpen(true)} isSidebarOpen={isSidebarOpen} />

      {isSidebarOpen && <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />}
    </>
  );
}
