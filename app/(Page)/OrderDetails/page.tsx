import React from 'react'
import { FaCreditCard, FaTruck, FaUser } from 'react-icons/fa'


const page = () => {
  return (
    <>

      <div className="w-full bg-[#E8EDF2] h-full">
              <h1 className="text-2xl font-bold text-gray-900 p-6">Order Details</h1>



    <div className="bg-white mx-6 p-6 rounded-xl shadow-md">

      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Order ID: #468423
          </h2>
          <p className="text-sm text-gray-600">
            Mon, Jan 10, 2022, 8:40 AM &nbsp; | &nbsp; <span className="text-yellow-600 font-semibold">Pending</span>
          </p>
        </div>

        <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">
          Change Status
        </button>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

        {/* Customer */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="flex gap-3 items-center">
            <FaUser className="text-gray-500 text-xl" />
            <h3 className="font-semibold text-gray-800">Customer</h3>
          </div>
          <p className="mt-2 text-gray-700 font-semibold">Brooklyn Simmons</p>
          <p className="text-gray-600 text-sm">brooklyn@email.com</p>
          <p className="text-gray-600 text-sm">+01 43534 454</p>
        </div>

        {/* Delivery Info */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="flex gap-3 items-center">
            <FaTruck className="text-gray-500 text-xl" />
            <h3 className="font-semibold text-gray-800">Delivery Info</h3>
          </div>
          <p className="mt-2 text-gray-700 font-semibold">Home Delivery</p>
          <p className="text-gray-600 text-sm">Texas, United States</p>
          <p className="text-green-700 font-semibold text-sm">Delivered</p>
        </div>

        {/* Payment */}
        <div className="p-4 border rounded-lg bg-gray-50">
          <div className="flex gap-3 items-center">
            <FaCreditCard className="text-gray-500 text-xl" />
            <h3 className="font-semibold text-gray-800">Payment Info</h3>
          </div>
          <p className="mt-2 text-gray-700 font-semibold">MasterCard</p>
          <p className="text-gray-600 text-sm">Paid on Delivery</p>
        </div>
      </div>

      {/* Products Table */}
      <div className="mt-8">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b text-left text-gray-600">
              <th className="pb-3">Product Name</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Quantity</th>
              <th className="pb-3">Total</th>
            </tr>
          </thead>

          <tbody className="text-gray-800">
            {[
              { name: "Phone charging cable", price: 14.99, qty: 2 },
              { name: "Handwatch", price: 67.99, qty: 1 },
              { name: "Car shift knob", price: 25.99, qty: 3 },
              { name: "Google Pixel Buds", price: 89.99, qty: 4 },
            ].map((item, i) => (
              <tr key={i} className="border-b">
                <td className="py-3">{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.qty}</td>
                <td>${(item.price * item.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary */}
        <div className="w-64 ml-auto mt-6  text-[#7E7E8F] text-sm">
          <div className="flex justify-between py-1">
            <p>Subtotal:</p>
            <p>$344.92</p>
          </div>
          <div className="flex justify-between py-1">
            <p>Tax(20%):</p>
            <p>$10.00</p>
          </div>
          <div className="flex justify-between py-1">
            <p>Discount:</p>
            <p>$25.00</p>
          </div>

          <div className="flex justify-between mt-3 font-bold text-[#7E7E8F] text-lg border-t pt-3">
            <p>Total:</p>
            <p>$380.00</p>
          </div>


          <div className="flex justify-between mt-3 text-[#7E7E8F] border-t pt-3">
            <p>Status:</p>
            <button className='text-[#50D1B2] h-8 w-[97px] bg-[#E8EDF2] rounded-lg'>Pending</button>
          </div>
        </div>
      </div>

    </div>



              

    </div>
      
    </>
  )
}

export default page
