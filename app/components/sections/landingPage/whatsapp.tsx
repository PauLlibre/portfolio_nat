"use client";

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userInfo = `Nombre: ${name}\nEdad: ${age}\nSexo: ${sex}\n`;
    const finalMessage = `${userInfo}\n${message}`;
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white rounded-full p-4 shadow-lg focus:outline-none"
        >
          <FaWhatsapp size={24} />
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border px-4 py-2 rounded-full w-64"
                required
              />
              <input
                type="number"
                placeholder="Edad"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border px-4 py-2 rounded-full w-64"
                required
              />
              <select
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                className="border px-4 py-2 rounded-full w-64"
                required
              >
                <option value="" disabled>
                  Selecciona tu sexo
                </option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="Otro">Otro</option>
                <option value="Prefiero no decirlo">Prefiero no decirlo</option>
              </select>
              <button
                type="submit"
                className="border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition-colors w-64"
              >
                Enviar WhatsApp
              </button>
            </form>
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 text-sm text-gray-500 underline"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
