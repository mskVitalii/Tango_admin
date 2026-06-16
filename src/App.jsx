import React from "react";

import Statistics from "./pages/Statistics";
import AddFilm    from "./pages/AddFilm";
import AllFIlms   from "./pages/AllFilms";
import Users      from "./pages/Users";
import Register   from "./auth/register";
import Login      from "./auth/login";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

const styles = {
  divCont: {
      margin: '0vh 0vw'
  }
}

export function App() {
    return (
    <Router>
      <Navbar />

      <div style={styles.divCont}>
        <Routes>
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/add-film"   element={<AddFilm />} />
          <Route path="/films"      element={<AllFIlms />} />
          <Route path="/users"      element={<Users />} />

          <Route path="/login"      element={<Login />} />
          <Route path="/register"   element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;