import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Workshop from './pages/Workshop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Apply from './pages/Apply';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}
