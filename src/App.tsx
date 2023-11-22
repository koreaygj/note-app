import "./App.css";
import Sidebar from "./layout/sidebar/Sidebar";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home/Home";
import ErrorPage from "./routes/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>{" "}
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/*" element={<Navigate to={"/404"} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
