import { MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaComments, FaTimes } from 'react-icons/fa';

const FloatingIcon = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <>
          {/* location */}
          <a
            href="https://www.google.com/maps?TB 515 , Capital Galleria , Bhiwadi Alwar-301019 Rajasthan, India"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-500 hover:bg-rose-600 text-white p-3 rounded-full shadow-md transition-all duration-300"
            title="Our Location"
          >
            <MapPin size={22} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917923048816"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition-all duration-300"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>

          {/* Call */}
          <a
            href="tel:+918888888888"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transition-all duration-300"
            title="Call Us"
          >
            <FaPhone size={22} />
          </a>
        </>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-emerald-800 hover:bg-emerald-900   text-white p-4 rounded-full shadow-xl transition-all duration-300"
        title={open ? 'Close' : 'Chat with us'}
      >
        {open ? <FaTimes size={22} /> : <FaComments size={22} />}
      </button>
    </div>
  );
};

export default FloatingIcon;
