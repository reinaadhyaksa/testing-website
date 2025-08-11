import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(err.message);
        setArticles([]); // Ensure articles is always an array
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header />
      <main className="flex-grow">
        {error && (
          <div className="bg-red-100 text-red-800 p-4 text-center">
            Error loading articles: {error}
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home articles={articles} loading={loading} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles articles={articles} loading={loading} />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;