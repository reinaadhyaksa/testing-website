const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div data-aos="fade-up">
                        <h3 className="text-xl font-bold mb-4">NotarisPro</h3>
                        <p className="text-blue-100">
                            Layanan notaris profesional dengan pendekatan ramah dan solusi hukum yang terpercaya.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-blue-100 hover:text-white transition">Home</a></li>
                            <li><a href="/about" className="text-blue-100 hover:text-white transition">Tentang Saya</a></li>
                            <li><a href="/services" className="text-blue-100 hover:text-white transition">Layanan</a></li>
                            <li><a href="/portfolio" className="text-blue-100 hover:text-white transition">Portfolio</a></li>
                            <li><a href="/contact" className="text-blue-100 hover:text-white transition">Kontak</a></li>
                        </ul>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
                        <address className="text-blue-100 not-italic">
                            <p>Jl. Notaris No. 123</p>
                            <p>Kota Hukum, 12345</p>
                            <p>Email: info@notarispro.com</p>
                            <p>Telp: (021) 123-4567</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-100">
                    <p>&copy; {new Date().getFullYear()} NotarisPro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;