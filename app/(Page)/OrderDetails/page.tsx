'use client'

import React from 'react'
import Image from 'next/image'
import { FaRegPaperPlane } from 'react-icons/fa'
import { IoBagHandleOutline } from 'react-icons/io5'
import { LuUser, LuUserRound } from 'react-icons/lu'
import Image1 from '../../../public/productsImage/1.png'
import Image2 from '../../../public/productsImage/2.png'
import Image3 from '../../../public/productsImage/3.png'
import Image4 from '../../../public/productsImage/4.png'

const page = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Order Details</h1>
        
        {/* Order ID and Date */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-700 font-semibold">Orders ID: #685543</span>
            </div>
            <div className="text-gray-600 text-sm mb-1">Mon, Jan 28, 2022, 8:40AM</div>
            <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded text-sm font-medium">
              Pending
            </span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="border border-gray-300 bg-white px-4 py-2 rounded text-gray-700 font-medium hover:bg-gray-50">
              Change Status
            </button>
            <button className="border border-gray-300 bg-white px-4 py-2 rounded text-gray-700 font-medium hover:bg-gray-50">
              Save
            </button>
            <button className="border border-gray-300 bg-white px-4 py-2 rounded text-gray-700 font-medium hover:bg-gray-50">
              🖨️
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Customer Info */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0 flex justify-center items-center text-2xl"><LuUserRound/></div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold mb-3">Customer</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">Full name: Jane Cooper</p>
                <p className="text-gray-600">E-mail: tim.jennings@example.com</p>
                <p className="text-gray-600">Phone: +098 856 245</p>
                <button className="text-cyan-600 font-medium text-sm hover:text-cyan-700">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Info */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-start gap-4">

            <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0 flex justify-center items-center text-2xl"> <IoBagHandleOutline/> </div>

            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold mb-3">Order Info</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">Shipping: Next express</p>
                <p className="text-gray-600">Pay method: Paypal</p>
                <p className="text-gray-600">Status: Pending</p>
                <button className="text-cyan-600 font-medium text-sm hover:text-cyan-700">
                  Download Info
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Deliver to */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0 flex justify-center items-center text-2xl"><FaRegPaperPlane/></div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold mb-3">Deliver to</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">Address: Santa Ana, Illinois 85486</p>
                <p className="text-gray-600">2972 Westheimer Rd.</p>
                <p className="text-gray-600">Block 9A</p>
                <button className="text-cyan-600 font-medium text-sm hover:text-cyan-700">
                  View profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment and Notes Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Payment Info */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-gray-900 font-semibold mb-4">Payment info</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 bg-red-500 rounded"></div>
              <p className="text-gray-600">Master Card ****  ****6657</p>
            </div>
            <p className="text-gray-600">Business name: Fox Market LLC</p>
            <p className="text-gray-600">Phone: +09985 6578 52</p>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-gray-900 font-semibold mb-4">Notes</h3>
          <textarea
            placeholder="Type some note"
            className="w-full h-24 p-3 border border-gray-300 rounded text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-gray-900 font-semibold mb-4">Products</h3>
        
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-gray-700 font-semibold text-sm">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold text-sm">Product Name</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold text-sm">Price</th>
              <th className="text-left py-3 px-4 text-gray-700 font-semibold text-sm">Quantity</th>
              <th className="text-right py-3 px-4 text-gray-700 font-semibold text-sm">Total</th>
            </tr>
          </thead>
          <tbody>

            {/* Product Row 1 */}
            <tr className="border-b border-gray-200">
              <td className="py-4 px-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-200 rounded flex items-center justify-center relative">
                    <Image
                      src={Image1}
                      alt="Bose noise cancelling"
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                  </div>
                  <span className="text-gray-700">Bose noise cancelling</span>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-700">$948.55</td>
              <td className="py-4 px-4 text-gray-700">2</td>
              <td className="py-4 px-4 text-right text-gray-700">$630.44</td>
            </tr>

            {/* Product Row 2 */}
            <tr className="border-b border-gray-200">
              <td className="py-4 px-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center relative">
                    <Image
                      src={Image2}
                      alt="Philips wireless head phone"
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                  </div>
                  <span className="text-gray-700">Philips wireless head phone</span>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-700">$767.50</td>
              <td className="py-4 px-4 text-gray-700">3</td>
              <td className="py-4 px-4 text-right text-gray-700">$767.50</td>
            </tr>

            {/* Product Row 3 */}
            <tr className="border-b border-gray-200">
              <td className="py-4 px-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-200 rounded flex items-center justify-center relative">
                    <Image
                      src={Image3}
                      alt="Cumlit smart watch"
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                  </div>
                  <span className="text-gray-700">Cumlit smart watch</span>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-700">$398.84</td>
              <td className="py-4 px-4 text-gray-700">1</td>
              <td className="py-4 px-4 text-right text-gray-700">$475.22</td>
            </tr>

            {/* Product Row 4 */}
            <tr className="border-b border-gray-200">
              <td className="py-4 px-2">
                <input type="checkbox" className="w-4 h-4" />
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-400 rounded flex items-center justify-center relative">
                    <Image
                      src={Image4}
                      alt="Google Pixel Buds"
                      width={40}
                      height={40}
                      className="rounded object-cover"
                    />
                  </div>
                  <span className="text-gray-700">Google Pixel Buds</span>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-700">$778.35</td>
              <td className="py-4 px-4 text-gray-700">4</td>
              <td className="py-4 px-4 text-right text-gray-700">$293.01</td>
            </tr>
          </tbody>
        </table>

        {/* Order Summary */}
        <div className="flex justify-end mt-6">
          <div className="w-64">
            <div className="flex justify-between py-2 text-sm text-gray-700 border-b border-gray-200">
              <span>Subtotal:</span>
              <span>$630.44</span>
            </div>
            <div className="flex justify-between py-2 text-sm text-gray-700 border-b border-gray-200">
              <span>Tax (20%):</span>
              <span>$782.01</span>
            </div>
            <div className="flex justify-between py-2 text-sm text-gray-700 border-b border-gray-200">
              <span>Discount:</span>
              <span>$293.01</span>
            </div>
            <div className="flex justify-between py-3 text-lg font-bold text-gray-900">
              <span>Total:</span>
              <span>310,000</span>
            </div>
            <div className="flex justify-between py-2 text-sm text-gray-600">
              <span>Status:</span>
              <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded text-sm font-medium">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
