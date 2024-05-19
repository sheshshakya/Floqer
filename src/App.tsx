import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainTable from "./components/MainTable";
import Error from "./components/Error";
import "./App.css";
import JobTitleTable from "./components/JobTitleTable";
import ChatBot from "./components/Chat/ChatBot";

const App = () => {
  return (
    <>
    <div>
      <ChatBot />
    </div>
      <div className="container mt-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainTable />} />
          <Route path="/job-title/:year" element={<JobTitleTable />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
