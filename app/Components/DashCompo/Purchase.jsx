"use client"
import React, { useState, useRef, useEffect } from "react"
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs"
import { FaCircle } from "react-icons/fa"
import List from "../List"

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
]

const statusColor = {
  Delivered: "text-green-500",
  Pending: "text-orange-500",
  Canceled: "text-red-500",
}

export default function Purchase() {
  const [openIndex, setOpenIndex] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenIndex(null)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className="w-[97%] mx-auto bg-white rounded-xl shadow-sm p-[25px] relative">
      <div className="flex justify-between px-6 border-b pb-[17px] border-b-[#e2e2ea]">
        <p className="text-base font-bold">Recent Purchases</p>
        <BsThreeDotsVertical className="text-[#7E7E8F] cursor-pointer" />
      </div>

      <div className="px-6">
        {/* Headings */}
        <div className="grid grid-cols-7 text-sm text-[#9A9AAF] font-medium py-4 border-b border-b-[#e2e2ea]">
          <p>Products</p>
          <p>Order ID</p>
          <p>Date</p>
          <p>Customer name</p>
          <p>Status</p>
          <p>Amount</p>
          <p className="text-right pr-4">Actions</p>
        </div>

        {orders.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-7 items-center text-sm py-4 border-b border-b-[#e2e2ea] relative"
          >
            <p>{item.product}</p>
            <p>{item.orderId}</p>
            <p>{item.date}</p>

            <div className="flex items-center gap-2">
              <img src={item.img} className="w-7 h-7 rounded-full" />
              <p>{item.customer}</p>
            </div>

            <div className="flex items-center gap-2">
              <FaCircle className={`text-[10px] ${statusColor[item.status]}`} />
              <p>{item.status}</p>
            </div>

            <p>{item.amount}</p>

            {/* Actions  */}
            <div ref={dropdownRef} className="relative justify-self-end">
              <BsThreeDots
                className="text-[#7E7E8F] text-lg cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
              />

              {openIndex === idx && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 px-3 z-20">
                  <List text="View details" />
                  <List text="Pending" />
                  <List text="Completed" />
                  <List text="Cancel" />
                </div>
              )}
            </div>


          </div>
        ))}
      </div>
    </div>
  )
}
