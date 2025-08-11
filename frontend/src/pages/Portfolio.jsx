import { useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioDetail from '../components/PortfolioDetail';

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            title: "Pendirian PT Digital Solusi",
            description: "Pembuatan akta pendirian dan pengurusan legalitas PT di bidang teknologi dengan modal dasar Rp5 Miliar.",
            category: "Perusahaan",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            details: {
                client: "PT Digital Solusi Indonesia",
                date: "15 Januari 2023",
                services: [
                    "Pembuatan Akta Pendirian",
                    "Pengurusan NIB",
                    "Pengesahan Kemenkumham",
                    "Pengurusan NPWP Perusahaan"
                ],
                testimonial: "Pelayanan sangat profesional dan cepat. Notaris sangat membantu dalam menjelaskan setiap tahap proses pendirian perusahaan kami."
            }
        },
        {
            id: 2,
            title: "Akta Jual Beli Tanah",
            description: "Pembuatan akta jual beli tanah seluas 2 hektar di daerah Bogor dengan nilai transaksi Rp15 Miliar.",
            category: "Properti",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            details: {
                client: "Keluarga Wijaya",
                date: "5 Maret 2023",
                services: [
                    "Pembuatan Akta Jual Beli",
                    "Pengecekan Sertifikat",
                    "Pendampingan Balik Nama",
                    "Legalisasi Dokumen"
                ],
                testimonial: "Transaksi jual beli tanah kami berjalan lancar berkat pendampingan notaris yang sangat kompeten."
            }
        },
        {
            id: 3,
            title: "Perubahan Anggaran Dasar",
            description: "Perubahan anggaran dasar perusahaan multinasional dengan penambahan bidang usaha dan perubahan direksi.",
            category: "Perusahaan",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            details: {
                client: "PT Global Multinational",
                date: "22 April 2023",
                services: [
                    "Pembuatan Akta Perubahan",
                    "Rapat Umum Pemegang Saham",
                    "Pengesahan Kemenkumham",
                    "Pembaruan Data Legal"
                ],
                testimonial: "Perubahan struktur perusahaan kami ditangani dengan sangat profesional dan sesuai timeline yang dibutuhkan."
            }
        },
        {
            id: 4,
            title: "Pembuatan Yayasan Pendidikan",
            description: "Pendirian yayasan pendidikan dengan akta notaris dan pengurusan izin operasional.",
            category: "Yayasan",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            details: {
                client: "Yayasan Pendidikan Cerdas",
                date: "10 Mei 2023",
                services: [
                    "Pembuatan Akta Pendirian",
                    "Pengurusan SK Kemendikbud",
                    "Pembuatan AD/ART",
                    "Konsultasi Hukum Pendidikan"
                ],
                testimonial: "Proses pendirian yayasan kami menjadi lebih mudah dengan bantuan notaris yang sangat berpengalaman di bidang ini."
            }
        },
        {
            id: 5,
            title: "Akta Hibah Keluarga",
            description: "Pembuatan akta hibah properti dari orang tua kepada anak dengan pengaturan khusus.",
            category: "Keluarga",
            image: "https://images.unsplash.com/photo-1585128790751-20c05f6b37a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            details: {
                client: "Keluarga Santoso",
                date: "30 Juni 2023",
                services: [
                    "Pembuatan Akta Hibah",
                    "Konsultasi Hukum Keluarga",
                    "Pengecekan Sertifikat",
                    "Pendampingan Proses"
                ],
                testimonial: "Notaris sangat membantu dalam menjelaskan konsekuensi hukum dari hibah ini kepada seluruh anggota keluarga."
            }
        },
        {
            id: 6,
            title: "Kontrak Kerjasama Bisnis",
            description: "Penyusunan kontrak kerjasama bisnis antara perusahaan lokal dan mitra asing.",
            category: "Bisnis",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            details: {
                client: "PT Mitra Global & ABC Corp",
                date: "12 Juli 2023",
                services: [
                    "Penyusunan Kontrak",
                    "Penerjemahan Dokumen",
                    "Review Hukum",
                    "Mediasi Negosiasi"
                ],
                testimonial: "Kontrak kerjasama kami disusun dengan sangat detail dan melindungi kepentingan kedua belah pihak."
            }
        }
    ];

    const categories = ["Semua", "Perusahaan", "Properti", "Yayasan", "Keluarga", "Bisnis"];
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [selectedItem, setSelectedItem] = useState(null);

    const filteredItems = activeCategory === "Semua"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeCategory);

    return (
        <div className="pt-24 pb-12">
            <section className="container mx-auto px-4">
                {selectedItem ? (
                    <PortfolioDetail
                        item={selectedItem}
                        onBack={() => setSelectedItem(null)}
                    />
                ) : (
                    <>
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold text-blue-800 mb-4" data-aos="fade-up">
                                Portfolio
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                                Beberapa contoh pekerjaan yang telah kami selesaikan untuk klien-klien kami.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-2 rounded-full transition ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-white text-blue-800 hover:bg-blue-100'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                                    data-aos="fade-up"
                                    data-aos-delay={index % 3 * 100}
                                    onClick={() => setSelectedItem(item)}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mb-2">
                                            {item.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <button className="text-green-600 hover:text-green-700 text-sm font-medium transition">
                                            Lihat Detail →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center" data-aos="fade-up">
                            <h2 className="text-3xl font-bold text-blue-800 mb-4">Tertarik Bekerja Sama?</h2>
                            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                                Jika Anda membutuhkan layanan notaris profesional, jangan ragu untuk menghubungi kami.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </>
                )}
            </section>
        </div>
    );
};

export default Portfolio;