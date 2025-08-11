import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-800">
                        Notaris<span className="text-green-600">Pro</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="text-blue-800 hover:text-green-600 transition">Home</Link>
                        <Link to="/about" className="text-blue-800 hover:text-green-600 transition">Tentang Saya</Link>
                        <Link to="/services" className="text-blue-800 hover:text-green-600 transition">Layanan</Link>
                        <Link to="/portfolio" className="text-blue-800 hover:text-green-600 transition">Portfolio</Link>
                        <Link to="/contact" className="text-blue-800 hover:text-green-600 transition">Kontak</Link>
                        <Link to="/articles" className="text-blue-800 hover:text-green-600 transition">Artikel</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-blue-800 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-lg rounded-lg mt-4 p-4">
                        <nav className="flex flex-col space-y-4">
                            <Link to="/" className="text-blue-800 hover:text-green-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/about" className="text-blue-800 hover:text-green-600 transition" onClick={() => setIsOpen(false)}>Tentang Saya</Link>
                            <Link to="/services" className="text-blue-800 hover:text-green-600 transition" onClick={() => setIsOpen(false)}>Layanan</Link>
                            <Link to="/portfolio" className="text-blue-800 hover:text-green-600 transition" onClick={() => setIsOpen(false)}>Portfolio</Link>
                            <Link to="/contact" className="text-blue-800 hover:text-green-600 transition" onClick={() => setIsOpen(false)}>Kontak</Link>
                            <Link to="/articles" className="text-blue-800 hover:text-green-600 transition" onClick={() => setIsOpen(false)}>Artikel</Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;