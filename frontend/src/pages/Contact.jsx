import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitMessage({ type: 'success', text: 'Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.' });
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (err) {
            setSubmitMessage({ type: 'error', text: 'Terjadi kesalahan. Silakan coba lagi.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-24 pb-12">
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-blue-800 mb-4" data-aos="fade-up">
                        Hubungi Kami
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        Silakan hubungi kami untuk konsultasi atau informasi lebih lanjut tentang layanan kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div data-aos="fade-right">
                        <h2 className="text-2xl font-bold text-blue-800 mb-6">Informasi Kontak</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="text-green-600 mt-1 mr-4">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800">Alamat Kantor</h3>
                                    <p className="text-gray-600">
                                        Jl. Notaris No. 123, Kel. Hukum Indah<br />
                                        Kec. Legal, Kota Jakarta Selatan<br />
                                        DKI Jakarta, 12345
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-green-600 mt-1 mr-4">
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800">Telepon</h3>
                                    <p className="text-gray-600">
                                        (021) 123-4567<br />
                                        0812-3456-7890 (WhatsApp)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-green-600 mt-1 mr-4">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800">Email</h3>
                                    <p className="text-gray-600">
                                        info@notarispro.com<br />
                                        notaris@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="text-green-600 mt-1 mr-4">
                                    <FaClock size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800">Jam Operasional</h3>
                                    <p className="text-gray-600">
                                        Senin - Jumat: 08.00 - 17.00 WIB<br />
                                        Sabtu: 09.00 - 14.00 WIB<br />
                                        Minggu & Hari Libur: Tutup
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Lokasi Kantor</h3>
                            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e839560ef85!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1623835506363!5m2!1sen!2sid"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <h2 className="text-2xl font-bold text-blue-800 mb-6">Kirim Pesan</h2>

                        {submitMessage && (
                            <div className={`p-4 mb-6 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {submitMessage.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-gray-700 mb-2">Nomor Telepon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-gray-700 mb-2">Subjek</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                >
                                    <option value="">Pilih Subjek</option>
                                    <option value="Konsultasi">Konsultasi Hukum</option>
                                    <option value="Akta Notaris">Pembuatan Akta Notaris</option>
                                    <option value="Legalisasi">Legalisasi Dokumen</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">Pesan</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition w-full disabled:opacity-50"
                            >
                                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;