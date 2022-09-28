import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
import UserSignUp from "../pages/UserSignUp";
import LandingPage from "../pages/LandingPage";
import NavBar from "../MuiComponents/NavBar";
// import PrivateRoute from "../../PrivateRoute";
// import { AuthProvider } from "../../Auth";

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<UserLogin />} />
        <Route exact path="/Signup" element={<UserSignUp />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>

      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
