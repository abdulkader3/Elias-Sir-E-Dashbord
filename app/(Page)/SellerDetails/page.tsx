'use client';
import React, { useState } from 'react';
import { FiStar, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const SellerDetailsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample seller data
  const sellerData = {
    name: 'FoxMedia_J8C',
    since: 'Since 2012',
    ownerName: 'Johnson Mark',
    companyType: 'Partnership',
    email: 'foxmedia@gmail.co',
    website: 'foxmedia.com.uk',
    contactNo: '(+31) 546 45632',
    fax: '(+18) 896 48548',
    location: 'United Kingdom',
    joined: '18 January 2012',
    rating: 5,
    reviews: 12,
    totalReviews: 510,
    reviewBreakdown: [
      { stars: 5, count: 480, percentage: 94 },
      { stars: 4, count: 20, percentage: 4 },
      { stars: 3, count: 8, percentage: 1.5 },
      { stars: 2, count: 2, percentage: 0.4 },
      { stars: 1, count: 0, percentage: 0 },
    ],
  };

  // Sample revenue data
  const revenueData = [
    { label: 'Orders', value: '1735', color: 'bg-green-100', textColor: 'text-green-700' },
    { label: 'Earnings', value: '$283k', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { label: 'Transactions', value: '85k', color: 'bg-red-100', textColor: 'text-red-700' },
    { label: 'Followers', value: '365k', color: 'bg-pink-100', textColor: 'text-pink-700' },
    { label: 'Refunds', value: '125', color: 'bg-purple-100', textColor: 'text-purple-700' },
    { label: 'Conversation', value: '98%', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { label: 'Rating', value: '37.85', color: 'bg-pink-100', textColor: 'text-pink-700' },
  ];

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Cubitt Smart Watch CT29 Waterproof',
      color: 'Silver',
      sales: '556 ↑',
      available: '453',
      price: '$578.28',
    },
    {
      id: 2,
      name: 'Cubitt Smart Watch CT29 Waterproof',
      color: 'Silver',
      sales: '556 ↑',
      available: '453',
      price: '$578.28',
    },
    {
      id: 3,
      name: 'Cubitt Smart Watch CT29 Waterproof',
      color: 'Silver',
      sales: '556 ↑',
      available: '453',
      price: '$578.28',
    },
  ];

  const totalPages = 5;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          {/* Seller Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            {/* Seller Avatar - Placeholder */}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                {/* Avatar image placeholder */}
              </div>
            </div>

            <h2 className="text-center text-lg font-bold text-gray-900 mb-1">
              {sellerData.name}
            </h2>
            <p className="text-center text-sm text-gray-500 mb-6">{sellerData.since}</p>

            {/* Seller Info */}
            <div className="space-y-3 text-sm mb-6 border-b pb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Owner Name</span>
                <span className="font-medium text-gray-900">{sellerData.ownerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Company Type</span>
                <span className="font-medium text-gray-900">{sellerData.companyType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="font-medium text-gray-900 text-right">{sellerData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Website</span>
                <span className="font-medium text-gray-900 text-right">{sellerData.website}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Contact No.</span>
                <span className="font-medium text-gray-900">{sellerData.contactNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Fax</span>
                <span className="font-medium text-gray-900">{sellerData.fax}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Location</span>
                <span className="font-medium text-gray-900">{sellerData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Joined</span>
                <span className="font-medium text-gray-900">{sellerData.joined}</span>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Customer Reviews</h3>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({sellerData.reviews} notes)</span>
              </div>

              {/* Review Breakdown */}
              <div className="space-y-2 border-b pb-6">
                <p className="text-xs text-gray-500 font-medium mb-3">
                  Total {sellerData.totalReviews} reviews
                </p>
                {sellerData.reviewBreakdown.map((review, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-xs text-gray-600 w-6">{review.stars} star</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          review.stars === 5
                            ? 'bg-blue-500'
                            : review.stars === 4
                              ? 'bg-green-500'
                              : review.stars === 3
                                ? 'bg-yellow-500'
                                : 'bg-red-500'
                        }`}
                        style={{ width: `${review.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Seller */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Contact this seller</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Revenue</h2>
              <div className="flex gap-2">
                {['All', 'Day', 'Month', 'Year'].map((period) => (
                  <button
                    key={period}
                    className="px-3 py-1 text-xs font-medium text-gray-600 hover:text-gray-900"
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Revenue Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
              {revenueData.map((item, idx) => (
                <div
                  key={idx}
                  className={`${item.color} rounded-lg p-4 text-center`}
                >
                  <p className={`${item.textColor} text-lg font-bold`}>{item.value}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center border border-gray-200">
              {/* Chart will be displayed here */}
              <div className="text-center text-gray-400">
                <p className="text-sm">Chart Placeholder</p>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Products</h2>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Image
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Name <span className="text-xs text-gray-400">↓</span>
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Color <span className="text-xs text-gray-400">↓</span>
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Sales <span className="text-xs text-gray-400">↓</span>
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Available <span className="text-xs text-gray-400">↓</span>
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Price <span className="text-xs text-gray-400">↓</span>
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        {/* Product image placeholder */}
                        <div className="w-12 h-12 bg-gray-300 rounded"></div>
                      </td>
                      <td className="py-4 px-4 text-gray-900 font-medium">
                        {product.name}
                      </td>
                      <td className="py-4 px-4 text-gray-600">{product.color}</td>
                      <td className="py-4 px-4">
                        <span className="text-orange-600 font-medium">{product.sales}</span>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{product.available}</td>
                      <td className="py-4 px-4 font-semibold text-gray-900">
                        {product.price}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button className="text-gray-400 hover:text-gray-600">
                          •••
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>

              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-8 h-8 rounded font-medium ${
                    currentPage === idx + 1
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>

              <span className="ml-4 text-sm text-gray-600">Next →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetailsPage;
