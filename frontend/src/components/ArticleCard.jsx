import { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, description, imageUrl, date, author }) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition" data-aos="fade-up">
            <img
                src={imageUrl || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-2">
                    {formatDate(date)}
                </span>
                <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Oleh: {author}</span>
                    <Link
                        to={`/articles/${id}`}
                        className="text-green-600 hover:text-green-700 text-sm font-medium transition"
                    >
                        Baca Selengkapnya →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;