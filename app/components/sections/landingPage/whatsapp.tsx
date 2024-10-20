"use client";

import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import WhatsAppFormModal from './WhatsAppFormModal'; // Adjust the path if necessary

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleOpen = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleOpen}
          className="bg-green-500 text-white rounded-full p-4 shadow-lg focus:outline-none"
        >
          <FaWhatsapp size={24} />
        </button>
      </div>

      {/* WhatsApp Form Modal */}
      {showForm && (
        <WhatsAppFormModal
          phoneNumber={phoneNumber}
          message={message}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default WhatsAppButton;
