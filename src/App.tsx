import "./App.css";
import VerificationScreen from "./screens/Verification/VerificationScreen";
import Login from "./screens/Login/Login";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Footer />
      <Routes>
        <Route path="/" element={<VerificationScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
