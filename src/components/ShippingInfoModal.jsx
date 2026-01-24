'use client';

export default function ShippingInfoModal({ isOpen, onClose, shippingInfo }) {
  if (!isOpen) return null;

  const hasShippingInfo = shippingInfo?.shippingName && shippingInfo?.shippingPhone && shippingInfo?.shippingAddress;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-gradient-to-br from-gray-900 via-orange-900/20 to-gray-900 border-2 border-orange-500 rounded-2xl p-6 max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-black text-white mb-2">
            SHIPPING INFORMATION
          </h2>
          <p className="text-gray-400 text-sm">
            Your delivery details for physical claims
          </p>
        </div>

        {/* Content */}
        {hasShippingInfo ? (
          <div className="space-y-4">
            {/* Name */}
            <div className="bg-black/30 border border-orange-500/30 rounded-lg p-4">
              <label className="block text-orange-400 text-xs font-bold mb-1 uppercase tracking-wider">
                Full Name
              </label>
              <p className="text-white text-lg font-bold">
                {shippingInfo.shippingName}
              </p>
            </div>

            {/* Phone */}
            <div className="bg-black/30 border border-orange-500/30 rounded-lg p-4">
              <label className="block text-orange-400 text-xs font-bold mb-1 uppercase tracking-wider">
                Phone Number
              </label>
              <p className="text-white text-lg font-bold">
                {shippingInfo.shippingPhone}
              </p>
            </div>

            {/* Address */}
            <div className="bg-black/30 border border-orange-500/30 rounded-lg p-4">
              <label className="block text-orange-400 text-xs font-bold mb-1 uppercase tracking-wider">
                Delivery Address
              </label>
              <p className="text-white text-base font-semibold leading-relaxed">
                {shippingInfo.shippingAddress}
              </p>
            </div>

            {/* Info Note */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
              <p className="text-blue-400 text-xs text-center">
                ℹ️ This information will be used when you claim physical cars
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-400 text-base mb-2">
              No shipping information yet
            </p>
            <p className="text-gray-500 text-sm">
              You'll be prompted to enter your shipping details when you claim your first physical car
            </p>
          </div>
        )}

        {/* Close Button */}
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 active:scale-95 transition-all"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
