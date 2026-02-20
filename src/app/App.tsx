import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Courses from './pages/Courses.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import Workshop from './pages/Workshop.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}