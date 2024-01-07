import { Route, Routes } from "react-router";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import Navbar from "./Pages/Navbar/Navbar";
import Tracker from "./Pages/Tracker/Tracker";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </div>
  );
}

export default App;
