const About = () => {
    return (
        <div className="pt-24 pb-12">
            <section className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center mb-16">
                    <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
                        <img
                            src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Tentang Saya"
                            className="rounded-lg shadow-xl w-full"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
                        <h1 className="text-4xl font-bold text-blue-800 mb-6">Tentang Saya</h1>
                        <p className="text-lg text-gray-600 mb-4">
                            Saya adalah seorang notaris berpengalaman dengan lebih dari 10 tahun melayani masyarakat dalam berbagai kebutuhan hukum. Saya berkomitmen untuk memberikan pelayanan terbaik dengan pendekatan yang ramah dan profesional.
                        </p>
                        <p className="text-lg text-gray-600 mb-4">
                            Lulusan Fakultas Hukum Universitas Indonesia dengan spesialisasi di bidang hukum perdata dan bisnis. Saya telah membantu ratusan klien baik perorangan maupun perusahaan dalam menyelesaikan berbagai masalah hukum.
                        </p>
                        <p className="text-lg text-gray-600">
                            Selain praktik sebagai notaris, saya juga aktif menulis artikel hukum untuk memberikan pemahaman yang lebih baik kepada masyarakat tentang berbagai aspek hukum yang relevan dengan kehidupan sehari-hari.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8 mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Pendidikan & Pengalaman</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">Pendidikan</h3>
                            <ul className="space-y-4">
                                <li className="border-l-4 border-blue-800 pl-4">
                                    <h4 className="font-bold text-blue-800">Sarjana Hukum</h4>
                                    <p className="text-gray-600">Universitas Indonesia, 2005-2009</p>
                                </li>
                                <li className="border-l-4 border-blue-800 pl-4">
                                    <h4 className="font-bold text-blue-800">Magister Kenotariatan</h4>
                                    <p className="text-gray-600">Universitas Indonesia, 2010-2012</p>
                                </li>
                                <li className="border-l-4 border-blue-800 pl-4">
                                    <h4 className="font-bold text-blue-800">PPAT</h4>
                                    <p className="text-gray-600">Ikatan Notaris Indonesia, 2013</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">Pengalaman</h3>
                            <ul className="space-y-4">
                                <li className="border-l-4 border-blue-800 pl-4">
                                    <h4 className="font-bold text-blue-800">Notaris Publik</h4>
                                    <p className="text-gray-600">Kantor Notaris Mandiri, 2013-Sekarang</p>
                                </li>
                                <li className="border-l-4 border-blue-800 pl-4">
                                    <h4 className="font-bold text-blue-800">Konsultan Hukum</h4>
                                    <p className="text-gray-600">PT Hukum Sejahtera, 2010-2013</p>
                                </li>
                                <li className="border-l-4 border-blue-800 pl-4">
                                    <h4 className="font-bold text-blue-800">Asisten Notaris</h4>
                                    <p className="text-gray-600">Kantor Notaris Budiman, 2009-2010</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Visi & Misi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">Visi</h3>
                            <p className="text-gray-600">
                                Menjadi notaris yang terpercaya dan profesional dalam memberikan pelayanan hukum yang berkualitas dengan pendekatan yang manusiawi dan mudah dipahami.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">Misi</h3>
                            <ul className="text-gray-600 space-y-2 text-left">
                                <li>• Memberikan pelayanan notaris yang cepat dan akurat</li>
                                <li>• Menjaga kerahasiaan dan kepentingan klien</li>
                                <li>• Memberikan edukasi hukum kepada masyarakat</li>
                                <li>• Mengutamakan etika dan profesionalisme</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;