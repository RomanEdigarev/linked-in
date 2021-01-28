import "./App.css";
import React from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/AppBody/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className="app__body">
        <Sidebar />
      </div>
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
