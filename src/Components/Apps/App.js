import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
import UserSignUp from "../pages/UserSignUp";
import LandingPage from "../pages/LandingPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Login" element={<UserLogin />} />
          <Route exact path="/Signup" element={<UserSignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
