

import { Smartphone, Shield, QrCode, Wallet } from "lucide-react";

export default function Payment() {
  const paymentMethods = [
    {
      icon: Wallet,
      title: "Cash on Delivery (COD)",
      description: "Pay with cash at your doorstep",
      color: "teal",
    },
    {
      icon: QrCode,
      title: "Pay via QR Code",
      description: "Scan & pay using UPI apps",
      color: "cyan",
    },
    {
      icon: Smartphone,
      title: "Phone Number Payment",
      description: "Pay using PhonePe / Google Pay number",
      color: "cyanLight",
    },
  ];

  return (
    <div className="py-16 px-4 bg-cyan-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#016055] mb-4">Payment Options</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your preferred payment method below
          </p>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-teal-700">Accepted Payment Methods</h2>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              const colorClasses = {
                teal: "bg-teal-100 text-teal-600",
                cyan: "bg-cyan-100 text-cyan-600",
                tealLight: "bg-teal-50 text-teal-500",
                cyanLight: "bg-cyan-50 text-cyan-500",
              };

              return (
                <div
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300 border p-6 text-center rounded-xl"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 ${colorClasses[method.color]}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Features */}
        <div className="bg-white rounded-3xl p-6 md:p-10 text-teal-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Secure & Safe Payments</h2>
            <p className="text-lg">Your payment security is our top priority</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "SSL Encryption",
              "PCI Compliant",
              "Verified Merchant",
              "1000+ Transactions",
            ].map((title, i) => (
              <div className="text-center" key={i}>
                <Shield className="h-10 w-10 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-cyan-500">Trusted & Secure</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
