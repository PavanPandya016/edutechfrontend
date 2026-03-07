import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

// Components
import ScrollToTop from './components/ScrollToTop.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Courses from './pages/Courses.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import BlogEditor from './pages/BlogEditor.jsx';
import Workshop from './pages/Workshop.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Apply from './pages/Apply.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/editor" element={<BlogEditor />} />
        <Route path="/blog/editor/:id" element={<BlogEditor />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}