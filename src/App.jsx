import { useState } from "react";
import "./App.css";
import Sidebar from "react-sidebar";
import { BrowserRouter, Link } from "react-router-dom";
import { SlideTabsExample } from "./assets/SlideTabsExample";

function App() {
  const [sidebarOpen, onSetSidebarOpen] = useState(false);

  return (
    <>
      <SlideTabsExample />
    </>
  );
}

export default App;
