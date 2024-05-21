import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainTable from "./components/MainTable";
import "./App.css";
import JobTitleTable from "./components/JobTitleTable";

const App = () => {
  return (
    <>
    <div>
    </div>
      <div className="container mt-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainTable />} />
          <Route path="/job-title/:year" element={<JobTitleTable />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
