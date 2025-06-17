    import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí podrías integrar EmailJS o enviar los datos a Google Sheets vía API.
        console.log('Datos enviados:', formData);
        setSent(true);
        // Reinicia el formulario
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };  

    return (
        <section id="contact" className="py-16 margin-top-8">
            <div className="max-w-3xl mx-auto px-4 text-black" >
                <h2 className="text-3xl font-bold text-center mb-4 text-base-white">Contacto</h2>
                <p className="text-center mb-8 text-lg font-medium text-base-white">
                    Empieza tu proyecto ahora... ¡Envíame un mensaje y te responderé pronto!
                </p>
                {sent && (
                    <div className="bg-green-100 text-green-700 p-4 rounded mb-8 text-center">
                        ¡Mensaje enviado exitosamente!
                    </div>
                )}  
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 bg-base-white p-8 rounded-lg shadow-md flex flex-col items-center"
                >
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Correo Electrónico"
                        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Asunto"
                        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mensaje"
                        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                        rows="5"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white p-3 rounded hover:bg-neutral_dark transition-colors"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;