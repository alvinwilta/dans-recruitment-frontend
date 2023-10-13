import DefaultTemplate from "./components/DefaultTemplate";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, JobPortal, Login, Register } from "./pages";
import JobDetail from "./components/JobDetail";

function App() {
  return (
    <div className="App bg-dark">
      <DefaultTemplate>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs" element={<JobPortal />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
          </Routes>
        </Router>
      </DefaultTemplate>
    </div>
  );
}

export default App;
