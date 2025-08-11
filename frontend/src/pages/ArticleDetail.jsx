import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaUser } from 'react-icons/fa';

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/articles/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setArticle(data);
            } catch (err) {
                console.error('Error fetching article:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    if (loading) {
        return (
            <div className="pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/2 mb-8"></div>
                        <div className="h-64 bg-gray-200 rounded mb-6"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <div className="bg-red-100 text-red-800 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">Error loading article</h2>
                        <p>{error}</p>
                        <Link to="/articles" className="text-blue-600 hover:underline mt-4 inline-block">
                            Back to articles
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h2 className="text-xl font-bold text-blue-800 mb-4">Article not found</h2>
                        <Link to="/articles" className="text-green-600 hover:underline">
                            Back to articles
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    to="/articles"
                    className="flex items-center text-blue-800 hover:text-green-600 mb-6 transition"
                >
                    <FaArrowLeft className="mr-2" /> Back to Articles
                </Link>

                <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    {article.gambar_url && (
                        <img
                            src={article.gambar_url}
                            alt={article.judul}
                            className="w-full h-64 md:h-80 object-cover"
                        />
                    )}

                    <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                            <div className="flex items-center mr-4">
                                <FaUser className="mr-2" />
                                <span>{article.penulis}</span>
                            </div>
                            <div className="flex items-center">
                                <FaCalendarAlt className="mr-2" />
                                <span>{formatDate(article.tanggal_upload)}</span>
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold text-blue-800 mb-4">{article.judul}</h1>
                        <p className="text-lg text-gray-600 mb-6">{article.deskripsi}</p>

                        <div className="prose max-w-none">
                            {article.isi.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ArticleDetail;