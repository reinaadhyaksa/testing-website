const Services = () => {
    const services = [
        {
            title: "Pembuatan Akta Notaris",
            description: "Layanan pembuatan berbagai jenis akta notaris termasuk akta pendirian perusahaan, akta perubahan anggaran dasar, akta jual beli, akta hibah, dan akta-akta lainnya yang membutuhkan keabsahan notaris.",
            icon: "📝",
            details: [
                "Akta Pendirian PT/CV",
                "Akta Perubahan Anggaran Dasar",
                "Akta Rapat Umum Pemegang Saham",
                "Akta Pengangkatan/Pemberhentian Direksi/Komisaris",
                "Akta Jual Beli, Hibah, dan Perjanjian"
            ]
        },
        {
            title: "Legalisasi Dokumen",
            description: "Proses legalisasi dokumen untuk memberikan kekuatan hukum pada dokumen-dokumen yang diperlukan untuk berbagai keperluan administrasi dan hukum.",
            icon: "🖋️",
            details: [
                "Legalisasi Tanda Tangan",
                "Legalisasi Fotokopi",
                "Pengesahan Terjemahan",
                "Pengesahan Dokumen Asing",
                "Pengesahan Surat Kuasa"
            ]
        },
        {
            title: "Konsultasi Hukum",
            description: "Layanan konsultasi masalah hukum dengan notaris berpengalaman untuk memberikan solusi terbaik sesuai dengan kebutuhan hukum Anda.",
            icon: "⚖️",
            details: [
                "Konsultasi Hukum Perdata",
                "Konsultasi Hukum Bisnis",
                "Pendirian Badan Usaha",
                "Penyusunan Kontrak/Perjanjian",
                "Penyelesaian Sengketa"
            ]
        },
        {
            title: "Pendaftaran Tanah",
            description: "Layanan pendampingan dalam proses pendaftaran tanah, balik nama, pembebanan hak tanggungan, dan berbagai keperluan pertanahan lainnya.",
            icon: "🏠",
            details: [
                "Pendaftaran Hak Milik",
                "Balik Nama Sertifikat",
                "Hak Tanggungan",
                "Pecah/Satukan Sertifikat",
                "Pendaftaran Waris"
            ]
        },
        {
            title: "Pembuatan Surat Kuasa",
            description: "Pembuatan surat kuasa khusus yang memberikan kewenangan kepada pihak lain untuk mewakili dalam urusan tertentu yang membutuhkan keabsahan notaris.",
            icon: "✍️",
            details: [
                "Surat Kuasa Khusus",
                "Surat Kuasa Umum",
                "Surat Kuasa Perdata",
                "Surat Kuasa Pengambilan BPKB",
                "Surat Kuasa Perbankan"
            ]
        },
        {
            title: "Layanan Lainnya",
            description: "Berbagai layanan notaris lainnya yang disesuaikan dengan kebutuhan khusus klien dengan tetap mengedepankan profesionalisme dan kerahasiaan.",
            icon: "🔍",
            details: [
                "Pembuatan Pernyataan di Bawah Sumpah",
                "Pengesahan Keaslian Dokumen",
                "Pendaftaran Merek",
                "Pendirian Yayasan",
                "Layanan Korporasi"
            ]
        }
    ];

    return (
        <div className="pt-24 pb-12">
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-blue-800 mb-4" data-aos="fade-up">
                        Layanan Notaris
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Berbagai layanan profesional yang kami sediakan untuk memenuhi kebutuhan hukum Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="p-6">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-blue-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-green-600 mr-2">•</span>
                                            <span className="text-gray-600">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Butuh Layanan Khusus?</h2>
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                        Jika Anda membutuhkan layanan notaris yang tidak tercantum di atas, silakan hubungi kami untuk konsultasi lebih lanjut.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;