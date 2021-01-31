import "./App.css";
import React, { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/AppBody/Sidebar/Sidebar";
import { Feed } from "./components/AppBody/Feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/slices/userSlice";
import { Login } from "./components/Login/Login";
import { auth } from "./lib/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout);
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
