import { Route, Routes } from "react-router";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
