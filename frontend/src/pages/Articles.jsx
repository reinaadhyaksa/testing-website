import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import ArticleForm from '../components/ArticleForm';

const Articles = ({ articles, loading }) => {
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredArticles = articles.filter(article =>
        article.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.deskripsi.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-24 pb-12">
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-4xl font-bold text-blue-800" data-aos="fade-up">
                            Artikel
                        </h1>
                        <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
                            Kumpulan artikel hukum dan informasi terkini dari notaris kami.
                        </p>
                    </div>

                    <div className="flex space-x-4 w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Cari artikel..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent w-full md:w-64"
                            data-aos="fade-up"
                        />
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition whitespace-nowrap"
                            data-aos="fade-up"
                        >
                            {showForm ? 'Tutup Form' : 'Tambah Artikel'}
                        </button>
                    </div>
                </div>

                {showForm && (
                    <div className="mb-12" data-aos="fade-up">
                        <ArticleForm onSuccess={() => setShowForm(false)} />
                    </div>
                )}

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                                <div className="h-48 bg-gray-200 rounded mb-4"></div>
                                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                ) : filteredArticles.length === 0 ? (
                    <div className="text-center py-12" data-aos="fade-up">
                        <h3 className="text-xl font-bold text-blue-800 mb-2">Tidak ada artikel yang ditemukan</h3>
                        <p className="text-gray-600">Coba gunakan kata kunci yang berbeda atau tambahkan artikel baru.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article) => (
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
            </section>
        </div>
    );
};

export default Articles;