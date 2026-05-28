import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UXCaseStudies from "./pages/UXCaseStudies";
import FrontendProjects from "./pages/FrontendProjects";
import UXDetail from "./pages/UXDetail";
import FrontendDetail from "./pages/FrontendDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppShell() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ux-case-studies" element={<UXCaseStudies />} />
        <Route path="/ux-case-studies/:id" element={<UXDetail />} />
        <Route path="/frontend-projects" element={<FrontendProjects />} />
        <Route path="/frontend-projects/:id" element={<FrontendDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
