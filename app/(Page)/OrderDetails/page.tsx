'use client'

import React, { Suspense } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { FaRegPaperPlane } from 'react-icons/fa'
import { IoBagHandleOutline } from 'react-icons/io5'
import { LuUserRound } from 'react-icons/lu'
import { products } from '@/app/data/products'

const OrderDetailsContent = () => {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('id')
  const orderIndex = orderId ? parseInt(orderId) : 0
  
  const product = products[orderIndex]
  
  // Get product images
  const productImages = [
    { src: '/productsImage/1.png' },
    { src: '/productsImage/2.png' },
    { src: '/productsImage/3.png' },
    { src: '/productsImage/4.png' },
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700'
      case 'Pending':
        return 'bg-cyan-100 text-cyan-700'
      case 'Canceled':
        return 'bg-red-100 text-red-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const statuses = ['Pending', 'Delivered', 'Pending', 'Canceled', 'Pending', 'Delivered']
  const orderStatus = statuses[orderIndex % statuses.length]
  const paymentMethods = ['Paypal', 'Stripe', 'Apple Pay', 'Credit Card', 'Debit Card', 'Google Pay']
  const orderPaymentMethod = paymentMethods[orderIndex % paymentMethods.length]
  return (
    <div className="w-full bg-gray-50 min-h-screen p-3 sm:p-4 lg:p-6">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Order Details</h1>
        
        {/* Order ID and Date */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm sm:text-base text-gray-700 font-semibold">Orders ID: #{25413 + orderIndex}</span>
            </div>
            <div className="text-gray-600 text-xs sm:text-sm mb-2">Mon, Jan 28, 2022, 8:40AM</div>
            <span className={`inline-block ${getStatusColor(orderStatus)} px-3 py-1 rounded text-xs sm:text-sm font-medium`}>
              {orderStatus}
            </span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button className="border border-gray-300 bg-white px-3 sm:px-4 py-2 rounded text-xs sm:text-sm text-gray-700 font-medium hover:bg-gray-50 w-full sm:w-auto">
              Change Status
            </button>
            <button className="border border-gray-300 bg-white px-3 sm:px-4 py-2 rounded text-xs sm:text-sm text-gray-700 font-medium hover:bg-gray-50 w-full sm:w-auto">
              Save
            </button>
            <button className="border border-gray-300 bg-white px-3 sm:px-4 py-2 rounded text-gray-700 font-medium hover:bg-gray-50 w-full sm:w-auto">
              🖨️
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Customer Info */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0 flex justify-center items-center text-2xl"><LuUserRound/></div>
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm sm:text-base">Customer</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <p className="text-gray-600 break-words">Full name: Jane Cooper</p>
                <p className="text-gray-600 break-all">E-mail: tim.jennings@example.com</p>
                <p className="text-gray-600">Phone: +098 856 245</p>
                <button className="text-cyan-600 font-medium text-xs sm:text-sm hover:text-cyan-700 w-full text-left">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Info */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-start gap-4">

            <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0 flex justify-center items-center text-2xl"> <IoBagHandleOutline/> </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm sm:text-base">Order Info</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <p className="text-gray-600">Shipping: Next express</p>
                <p className="text-gray-600">Pay method: {orderPaymentMethod}</p>
                <p className="text-gray-600">Status: {orderStatus}</p>
                <button className="text-cyan-600 font-medium text-xs sm:text-sm hover:text-cyan-700 w-full text-left">
                  Download Info
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Deliver to */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 sm:col-span-2 lg:col-span-1">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0 flex justify-center items-center text-2xl"><FaRegPaperPlane/></div>
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 font-semibold mb-3 text-sm sm:text-base">Deliver to</h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <p className="text-gray-600">Address: Santa Ana, Illinois 85486</p>
                <p className="text-gray-600">2972 Westheimer Rd.</p>
                <p className="text-gray-600">Block 9A</p>
                <button className="text-cyan-600 font-medium text-xs sm:text-sm hover:text-cyan-700 w-full text-left">
                  View profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment and Notes Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Payment Info */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <h3 className="text-gray-900 font-semibold mb-4 text-sm sm:text-base">Payment info</h3>
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-red-500 rounded flex-shrink-0"></div>
              <p className="text-gray-600">Master Card ****  ****6657</p>
            </div>
            <p className="text-gray-600">Business name: Fox Market LLC</p>
            <p className="text-gray-600">Phone: +09985 6578 52</p>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <h3 className="text-gray-900 font-semibold mb-4 text-sm sm:text-base">Notes</h3>
          <textarea
            placeholder="Type some note"
            className="w-full h-20 sm:h-24 p-3 border border-gray-300 rounded text-xs sm:text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
        <h3 className="text-gray-900 font-semibold mb-4 text-sm sm:text-base">Products</h3>
        
        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 text-gray-700 font-semibold text-xs sm:text-sm">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold text-xs sm:text-sm">Product Name</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold text-xs sm:text-sm">Price</th>
                <th className="text-left py-3 px-4 text-gray-700 font-semibold text-xs sm:text-sm">Quantity</th>
                <th className="text-right py-3 px-4 text-gray-700 font-semibold text-xs sm:text-sm">Total</th>
              </tr>
            </thead>
            <tbody>
            {/* Product Row */}
            <tr className="border-b border-gray-200">
              <td className="py-4 px-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-200 rounded flex items-center justify-center relative flex-shrink-0">
                    <Image
                      src={productImages[orderIndex % productImages.length].src}
                      alt={product?.name || 'Product'}
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm hidden sm:inline">{product?.name || 'Product'}</span>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-700 text-xs sm:text-sm">{product?.price || '$0.00'}</td>
              <td className="py-4 px-4 text-gray-700 text-xs sm:text-sm">{product?.qty || 0}</td>
              <td className="py-4 px-4 text-right text-gray-700 text-xs sm:text-sm">{product?.price || '$0.00'}</td>
            </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-3">
          {/* Product Card */}
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-2 gap-2">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <input type="checkbox" className="w-4 h-4 flex-shrink-0" />
                <div className="w-8 h-8 bg-yellow-200 rounded flex items-center justify-center flex-shrink-0">
                  <Image
                    src={productImages[orderIndex % productImages.length].src}
                    alt={product?.name || 'Product'}
                    width={32}
                    height={32}
                    className="rounded object-cover"
                  />
                </div>
                <span className="text-gray-700 text-xs font-medium truncate">{product?.name || 'Product'}</span>
              </div>
            </div>
            <div className="space-y-1 text-xs text-gray-600 px-6">
              <div className="flex justify-between"><span>Price:</span><span>{product?.price || '$0.00'}</span></div>
              <div className="flex justify-between"><span>Qty:</span><span>{product?.qty || 0}</span></div>
              <div className="flex justify-between font-medium text-gray-900 border-t pt-1"><span>Total:</span><span>{product?.price || '$0.00'}</span></div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex flex-col sm:flex-row sm:justify-end mt-6">
          <div className="w-full sm:w-80">
            <div className="flex justify-between py-2 text-xs sm:text-sm text-gray-700 border-b border-gray-200">
              <span>Subtotal:</span>
              <span>{product?.price || '$0.00'}</span>
            </div>
            <div className="flex justify-between py-2 text-xs sm:text-sm text-gray-700 border-b border-gray-200">
              <span>Tax (20%):</span>
              <span>$782.01</span>
            </div>
            <div className="flex justify-between py-2 text-xs sm:text-sm text-gray-700 border-b border-gray-200">
              <span>Discount:</span>
              <span>$293.01</span>
            </div>
            <div className="flex justify-between py-3 text-base sm:text-lg font-bold text-gray-900">
              <span>Total:</span>
              <span>310,000</span>
            </div>
            <div className="flex justify-between py-2 text-xs sm:text-sm text-gray-600">
              <span>Status:</span>
              <span className={`inline-block ${getStatusColor(orderStatus)} px-3 py-1 rounded text-xs sm:text-sm font-medium`}>
                {orderStatus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const page = () => {
  return (
    <Suspense fallback={<div className="w-full bg-gray-50 min-h-screen flex items-center justify-center">Loading...</div>}>
      <OrderDetailsContent />
    </Suspense>
  )
}

export default page
