import { useState } from 'react';
import { FaUpload, FaSpinner } from 'react-icons/fa';

const ArticleForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        judul: '',
        deskripsi: '',
        penulis: 'Notaris Pro',
        isi: '',
        gambar: null
    });

    const [previewUrl, setPreviewUrl] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                gambar: file
            }));

            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.judul || !formData.deskripsi || !formData.isi) {
            setError('Judul, deskripsi, dan isi artikel wajib diisi');
            return;
        }

        setIsUploading(true);

        try {
            let gambarUrl = '';

            // Upload image if exists
            if (formData.gambar) {
                const formDataUpload = new FormData();
                formDataUpload.append('image', formData.gambar);

                const uploadResponse = await fetch('/api/upload/image', {
                    method: 'POST',
                    body: formDataUpload
                });

                if (!uploadResponse.ok) {
                    throw new Error('Gagal mengunggah gambar');
                }

                const uploadData = await uploadResponse.json();
                gambarUrl = uploadData.url;
            }

            // Submit article data
            const articleData = {
                judul: formData.judul,
                deskripsi: formData.deskripsi,
                penulis: formData.penulis,
                isi: formData.isi,
                gambar_url: gambarUrl
            };

            const response = await fetch('/api/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(articleData)
            });

            if (!response.ok) {
                throw new Error('Gagal menyimpan artikel');
            }

            // Reset form on success
            setFormData({
                judul: '',
                deskripsi: '',
                penulis: 'Notaris Pro',
                isi: '',
                gambar: null
            });
            setPreviewUrl('');

            if (onSuccess) onSuccess();
        } catch (err) {
            setError(err.message || 'Terjadi kesalahan saat menyimpan artikel');
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Tambah Artikel Baru</h2>

            {error && (
                <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="judul" className="block text-gray-700 mb-2">Judul Artikel</label>
                    <input
                        type="text"
                        id="judul"
                        name="judul"
                        value={formData.judul}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                </div>

                <div>
                    <label htmlFor="deskripsi" className="block text-gray-700 mb-2">Deskripsi Singkat</label>
                    <textarea
                        id="deskripsi"
                        name="deskripsi"
                        rows="3"
                        value={formData.deskripsi}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="penulis" className="block text-gray-700 mb-2">Penulis</label>
                    <input
                        type="text"
                        id="penulis"
                        name="penulis"
                        value={formData.penulis}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                </div>

                <div>
                    <label htmlFor="isi" className="block text-gray-700 mb-2">Isi Artikel</label>
                    <textarea
                        id="isi"
                        name="isi"
                        rows="8"
                        value={formData.isi}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="gambar" className="block text-gray-700 mb-2">Gambar Utama (Opsional)</label>
                    <div className="flex items-center space-x-4">
                        <label className="cursor-pointer bg-blue-50 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-100 transition">
                            <input
                                type="file"
                                id="gambar"
                                name="gambar"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <div className="flex items-center">
                                <FaUpload className="mr-2" />
                                {formData.gambar ? 'Ganti Gambar' : 'Pilih Gambar'}
                            </div>
                        </label>
                        {formData.gambar && (
                            <span className="text-sm text-gray-600">{formData.gambar.name}</span>
                        )}
                    </div>

                    {previewUrl && (
                        <div className="mt-4">
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="max-h-48 rounded-lg"
                            />
                        </div>
                    )}
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                    <button
                        type="button"
                        onClick={() => {
                            setFormData({
                                judul: '',
                                deskripsi: '',
                                penulis: 'Notaris Pro',
                                isi: '',
                                gambar: null
                            });
                            setPreviewUrl('');
                            setError('');
                        }}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        disabled={isUploading}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition flex items-center disabled:opacity-50"
                    >
                        {isUploading ? (
                            <>
                                <FaSpinner className="animate-spin mr-2" />
                                Menyimpan...
                            </>
                        ) : 'Simpan Artikel'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ArticleForm;