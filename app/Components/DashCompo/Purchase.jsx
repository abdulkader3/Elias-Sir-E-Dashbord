"use client"
import React, { useState, useRef, useEffect } from "react"
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs"
import { FaCircle } from "react-icons/fa"

const orders = [
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Bessie Cooper",
    status: "Delivered",
    amount: "$400.00",
    img: "/photos/Avatar (1).png",
  },
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Bessie Cooper",
    status: "Delivered",
    amount: "$400.00",
    img: "/photos/Avatar (1).png",
  },
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Bessie Cooper",
    status: "Delivered",
    amount: "$400.00",
    img: "/photos/Avatar (1).png",
  },
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Bessie Cooper",
    status: "Delivered",
    amount: "$400.00",
    img: "/photos/Avatar (1).png",
  },
  {
    product: "iPhone 11 Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Annette Black",
    status: "Pending",
    amount: "$200.00",
    img: "/photos/Avatar.png",
  },
  {
    product: "Oppo A20",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Bessie Cooper",
    status: "Delivered",
    amount: "$250.00",
    img: "/photos/Avatar (1).png",
  },
  {
    product: "MacBook Pro",
    orderId: "#25413",
    date: "Aug 5th, 2021",
    customer: "Kristin Watson",
    status: "Canceled",
    amount: "$400.00",
    img: "/photos/Avatar.png",
  },
]

const statusColor = {
  Delivered: "text-green-500",
  Pending: "text-orange-500",
  Canceled: "text-red-500",
}

export default function Purchase() {
  return (
    <div className="w-[95%] sm:w-[97%] mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-sm p-3 sm:p-4 lg:p-[25px] mb-4">
      {/* Header */}
      <div className="flex justify-between px-3 sm:px-6 border-b pb-3 sm:pb-[17px] border-b-[#e2e2ea]">
        <p className="text-sm sm:text-base font-bold">Recent Purchases</p>
        <BsThreeDotsVertical className="text-[#7E7E8F] cursor-pointer" />
      </div>

      {/* Table */}
      <div className="px-2 sm:px-6 overflow-x-auto">
        {/* Table Heading - Hidden on Mobile */}
        <div className="hidden sm:grid grid-cols-7 text-xs sm:text-sm text-[#9A9AAF] font-medium py-3 sm:py-4 border-b border-b-[#e2e2ea]">
          <p>Products</p>
          <p>Order ID</p>
          <p>Date</p>
          <p>Customer name</p>
          <p>Status</p>
          <p>Amount</p>
          <p className="text-right pr-4">Actions</p>
        </div>

        {/* Table Rows - Desktop */}
        <div className="hidden sm:block">
          {orders.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-7 items-center text-xs sm:text-sm py-3 sm:py-4 border-b border-b-[#e2e2ea] "
            >
              <p className="truncate">{item.product}</p>

              <p>{item.orderId}</p>

              <p className="text-xs">{item.date}</p>

              {/* Customer */}
              <div className="flex items-center gap-2">
                <img src={item.img} alt="" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full" />
                <p className="hidden md:block">{item.customer}</p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <FaCircle className={`text-[8px] sm:text-[10px] ${statusColor[item.status]}`} />
                <p className="text-xs sm:text-sm">{item.status}</p>
              </div>

              <p className="text-xs sm:text-sm">{item.amount}</p>

              {/* Actions */}
              <div className="flex justify-end pr-2 sm:pr-4">
                <BsThreeDots className="cursor-pointer text-base sm:text-lg text-gray-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-3">
          {orders.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-3 rounded-lg border border-[#e2e2ea]">
              <div className="flex justify-between items-start mb-2">
                <p className="font-medium text-sm">{item.product}</p>
                <BsThreeDots className="cursor-pointer text-gray-600" />
              </div>
              <div className="space-y-1 text-xs text-[#9A9AAF]">
                <div className="flex justify-between">
                  <span>Order ID:</span>
                  <span>{item.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>{item.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Customer:</span>
                  <div className="flex items-center gap-1">
                    <img src={item.img} alt="" className="w-5 h-5 rounded-full" />
                    <span>{item.customer}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Status:</span>
                  <div className="flex items-center gap-1">
                    <FaCircle className={`text-[6px] ${statusColor[item.status]}`} />
                    <span>{item.status}</span>
                  </div>
                </div>
                <div className="flex justify-between font-medium text-[#000]">
                  <span>Amount:</span>
                  <span>{item.amount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
