const ServiceCard = ({ title, description, icon, delay = 0 }) => {
    return (
        <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="text-4xl mb-4 text-green-600">{icon}</div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;