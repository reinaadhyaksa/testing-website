import { FaArrowLeft, FaCalendarAlt, FaUserTie, FaCheckCircle } from 'react-icons/fa';

const PortfolioDetail = ({ item, onBack }) => {
    return (
        <div data-aos="fade-up">
            <button
                onClick={onBack}
                className="flex items-center text-blue-800 hover:text-green-600 mb-6 transition"
            >
                <FaArrowLeft className="mr-2" /> Back to Portfolio
            </button>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-96 object-cover"
                />

                <div className="p-6">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-4">
                        {item.category}
                    </span>

                    <h1 className="text-3xl font-bold text-blue-800 mb-4">{item.title}</h1>
                    <p className="text-lg text-gray-600 mb-6">{item.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                <FaUserTie className="mr-2 text-green-600" />
                                Client Details
                            </h2>
                            <div className="space-y-2">
                                <p><span className="font-medium">Client:</span> {item.details.client}</p>
                                <p className="flex items-center">
                                    <FaCalendarAlt className="mr-2 text-green-600" />
                                    <span className="font-medium">Date:</span> {item.details.date}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-blue-800 mb-4">Services Provided</h2>
                            <ul className="space-y-2">
                                {item.details.services.map((service, index) => (
                                    <li key={index} className="flex items-start">
                                        <FaCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {item.details.testimonial && (
                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-green-600">
                            <h3 className="text-lg font-bold text-blue-800 mb-2">Client Testimonial</h3>
                            <p className="text-gray-600 italic">"{item.details.testimonial}"</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetail;