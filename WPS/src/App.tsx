import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import WebsiteDesign from "./pages/WebsiteDesign";
import SocialMedia from "./pages/SocialMedia";
import Reels from "./pages/Reels";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <section className="page-width flex min-h-[70vh] flex-col items-center justify-center pt-[140px] text-center">
      <p className="t-eyebrow text-mut2">404</p>
      <h1 className="t-h2 mt-5 text-fg">This page moved, or never existed.</h1>
      <p className="t-lede mt-6 max-w-[420px] text-mut">
        Let's get you back to something useful.
      </p>
      <Link to="/" className="btn btn-primary mt-10">
        Back to Home
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services/website-design" element={<WebsiteDesign />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/reels" element={<Reels />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
