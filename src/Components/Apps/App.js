import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
