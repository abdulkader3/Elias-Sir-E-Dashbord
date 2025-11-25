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
    <div className="w-[97%] mx-auto bg-white rounded-xl shadow-sm p-[25px]">
      {/* Header */}
      <div className="flex justify-between px-6 border-b pb-[17px] border-b-[#e2e2ea]">
        <p className="text-base font-bold">Recent Purchases</p>
        <BsThreeDotsVertical className="text-[#7E7E8F] cursor-pointer" />
      </div>

      {/* Table */}
      <div className="px-6">
        {/* Table Heading */}
        <div className="grid grid-cols-7 text-sm text-[#9A9AAF] font-medium py-4 border-b border-b-[#e2e2ea]">
          <p>Products</p>
          <p>Order ID</p>
          <p>Date</p>
          <p>Customer name</p>
          <p>Status</p>
          <p>Amount</p>
          <p className="text-right pr-4">Actions</p>
        </div>

        {/* Table Rows */}
        {orders.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-7 items-center text-sm py-4 border-b border-b-[#e2e2ea] "
          >
            <p>{item.product}</p>

            <p>{item.orderId}</p>

            <p>{item.date}</p>

            {/* Customer */}
            <div className="flex items-center gap-2">
              <img src={item.img} alt="" className="w-7 h-7 rounded-full" />
              <p>{item.customer}</p>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <FaCircle className={`text-[10px] ${statusColor[item.status]}`} />
              <p>{item.status}</p>
            </div>

            <p>{item.amount}</p>

            {/* Actions */}
            <div className="flex justify-end pr-4">
              <BsThreeDots className="cursor-pointer text-lg text-gray-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
