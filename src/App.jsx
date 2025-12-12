import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Markets from './pages/Markets';
import MarketDetail from './pages/MarketDetail';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/markets/:slug" element={<MarketDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:slug" element={<LocationDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<BlogPost />} />
            <Route path="/blog" element={<Insights />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
