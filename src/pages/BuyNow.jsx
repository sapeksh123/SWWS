import React, { useState } from 'react';
import { ShoppingCart, Phone, CheckCircle } from 'lucide-react';

export default function BuyNowPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    phone: '',
    paymentMethod: '',
    paymentProof: null,
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'paymentProof') {
      setFormData({ ...formData, paymentProof: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    setOrderPlaced(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-teal-700">Buy Now</h2>

      {orderPlaced ? (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg shadow">
          <CheckCircle className="inline-block mr-2 text-yellow-600" />
          <p className="font-semibold">Thank you for your order!</p>
          <p>Your order and payment are under review. Our team will contact you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                required
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Method</label>
            <select
              name="paymentMethod"
              required
              value={formData.paymentMethod}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">-- Select Payment Method --</option>
              <option value="cod">Cash on Delivery</option>
              <option value="qr">QR Code Payment</option>
              <option value="upi">UPI via Phone Number</option>
            </select>
          </div>

       {formData.paymentMethod === 'qr' && (
  <div className="space-y-2">
    <p className="text-sm text-gray-700 font-medium">Scan this QR to make payment:</p>
    <img
      src="/qr-placeholder.png" 
      alt="QR Code"
      className="w-48 h-48 mx-auto"
    />
    <label className="block text-sm font-medium text-gray-700">Upload Payment Screenshot</label>
    <input
      type="file"
      name="paymentProof"
       required
      accept="image/*,application/pdf"
      onChange={handleChange}
      className="mt-1 block w-full text-sm text-gray-700"
    />
  </div>
)}

{formData.paymentMethod === 'upi' && (
  <div className="space-y-2">
    <p className="text-sm text-gray-700 font-medium">Pay via UPI:</p>
    <div className="bg-gray-100 rounded p-3">
      <p><span className="font-semibold">Name:</span> xyz</p>
      <p><span className="font-semibold">Phone:</span> +91 9876543210</p>
      <p><span className="font-semibold">UPI ID:</span> xyz@upi</p>
    </div>
    <label className="block text-sm font-medium text-gray-700 ">Upload Payment Screenshot</label>
    <input
      type="file"
      name="paymentProof"
       required
      accept="image/*,application/pdf"
      onChange={handleChange}
      className="mt-1 block w-full text-sm text-gray-700"
    />
  </div>
)}


          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center shadow-md transition-all duration-300"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Confirm Order
          </button>
        </form>
      )}

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Have questions? Contact us directly via WhatsApp or call.</p>
        <div className="flex justify-center gap-4 mt-3">
          <a
            href="https://wa.me/918888888888"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow-md transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="mr-2" size={18} /> WhatsApp
          </a>
          <a
            href="tel:+918888888888"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition"
          >
            <Phone className="mr-2" size={18} /> Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
