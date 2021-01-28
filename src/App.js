import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/AppBody/Sidebar/Sidebar";
import { Feed } from "./components/AppBody/Feed/Feed";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
