import "./App.css";
import Navbar from "./Components/Navbar";
import TopBannner from "./Components/TopBannner";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import AllCourses from "./Pages/AllCourses";
import Ebooks from "./Pages/Ebooks";
import ProblemSolving from "./Pages/ProblemSolving";
import Blogs from "./Pages/Blogs";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import MyProfile from "./Pages/MyProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/problemsolving" element={<ProblemSolving />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/dashboard" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
