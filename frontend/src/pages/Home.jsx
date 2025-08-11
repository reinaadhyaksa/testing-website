import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import ServiceCard from '../components/ServiceCard';

const Home = ({ articles, loading }) => {
    const services = [
        {
            title: "Pembuatan Akta Notaris",
            description: "Layanan pembuatan berbagai jenis akta notaris dengan proses yang cepat dan terpercaya.",
            icon: "📝"
        },
        {
            title: "Legalisasi Dokumen",
            description: "Legalisasi dokumen-dokumen penting untuk keperluan hukum dan administrasi.",
            icon: "🖋️"
        },
        {
            title: "Konsultasi Hukum",
            description: "Konsultasi masalah hukum dengan notaris berpengalaman di bidangnya.",
            icon: "⚖️"
        }
    ];

    return (
        <div className="pt-24 pb-12">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
                            Layanan Notaris <span className="text-green-600">Profesional</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Memberikan solusi hukum yang terpercaya dengan pendekatan yang ramah dan profesional.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                to="/services"
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
                            >
                                Layanan Kami
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-6 py-3 rounded-lg transition"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2" data-aos="fade-left">
                        <img
                            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Notaris"
                            className="rounded-lg shadow-xl w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12" data-aos="fade-up">
                        Layanan Kami
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-blue-800" data-aos="fade-up">
                            Artikel Terbaru
                        </h2>
                        <Link
                            to="/articles"
                            className="text-green-600 hover:text-green-700 transition"
                            data-aos="fade-up"
                        >
                            Lihat Semua →
                        </Link>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                                    <div className="h-48 bg-gray-200 rounded mb-4"></div>
                                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    ) : articles.length === 0 ? (
                        <div className="text-center py-12" data-aos="fade-up">
                            <h3 className="text-xl font-bold text-blue-800 mb-2">Tidak ada artikel tersedia</h3>
                            <p className="text-gray-600">Silakan coba lagi nanti atau hubungi administrator.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {articles.slice(0, 3).map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    id={article.id}
                                    title={article.judul}
                                    description={article.deskripsi}
                                    imageUrl={article.gambar_url}
                                    date={article.tanggal_upload}
                                    author={article.penulis}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
                        Butuh Bantuan Hukum?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi terbaik untuk kebutuhan hukum Anda.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg transition"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;