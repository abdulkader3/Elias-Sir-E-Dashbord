'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/app/data/products'

const page = () => {
  const [dateValue, setDateValue] = useState('2022-10-02')
  const [categoryValue, setCategoryValue] = useState('all')
  const [statusValue, setStatusValue] = useState('all')

  const statuses = ['Delivered', 'Pending', 'Canceled', 'Delivered', 'Canceled']
  const paymentMethods = ['American Express', 'PayPal', 'Check', 'Visa', 'Cash', 'MasterCard']
  
  const orders = products.map((product, index) => ({
    id: `#${25413 + index}`,
    productName: product.name,
    productImage: `/productsImage/${(index % 11) + 1}.png`,
    paymentMethod: paymentMethods[index % paymentMethods.length],
    date: `${17 + (index % 14)} Oct, 2022`,
    status: statuses[index % statuses.length],
    total: product.price,
    qty: product.qty
  }))

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Delivered':
        return 'text-green-500'
      case 'Pending':
        return 'text-orange-500'
      case 'Canceled':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  const getStatusDot = (status: string) => {
    switch(status) {
      case 'Delivered':
        return 'bg-green-500'
      case 'Pending':
        return 'bg-orange-500'
      case 'Canceled':
        return 'bg-red-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="w-full bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Orders List</h1>
        </div>
        <div className="text-sm text-gray-500">
          📅 Feb 15, 2022 - Feb 21, 2022
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex gap-4 items-center mb-8 bg-white p-4 rounded-lg">
        <select 
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white cursor-pointer"
        >
          <option value="all">All Category</option>
        </select>
        
        <input 
          type="date" 
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white cursor-pointer"
        />
        
        <select 
          value={statusValue}
          onChange={(e) => setStatusValue(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white cursor-pointer"
        >
          <option value="all">Status</option>
        </select>

        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-white cursor-pointer hover:bg-gray-50">
          🔽 Filters
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          <button className="text-gray-400 hover:text-gray-600 text-xl">⋯</button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded cursor-pointer" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Product</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Payment Method</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => window.location.href = `/OrderDetails?id=${index}`}>
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded cursor-pointer" onClick={(e) => e.stopPropagation()} />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.id}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <Image 
                          src={order.productImage} 
                          alt={order.productName}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-gray-900 font-medium">{order.productName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.paymentMethod}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusDot(order.status)}`}></div>
                      <span className={`font-medium ${getStatusColor(order.status)}`}>{order.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{order.total}</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-gray-400 hover:text-gray-600" onClick={(e) => e.stopPropagation()}>⋯</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default page
