import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Recipes from "./pages/RecipeApp/Recipe";
import RecipeDetail from "./pages/RecipeApp/RecipeDetail";
//import RecipeByLetters from "./pages/RecipeApp/RecipesByLetters";
import { initializeFirebase, loginWithGoogle } from "./utils/firebaseUtils";
import { useEffect } from "react";
import Login from "./pages/login/Login";
import { getUser } from "./utils/firebaseUtils";
import Home from "./pages/home/Home";
export const UserContext = React.createContext({});
function App() {
  useEffect(() => {
    initializeFirebase();
  });
  const user = getUser();
  return (
    <>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path={"/recipe/:id"} element={<RecipeDetail />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/home"} element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
