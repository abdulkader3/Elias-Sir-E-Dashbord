"use client"
import React, { useState, useRef, useEffect } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import WidgetItem from "@/app/Components/DashCompo/WidgetItem"
import List from "@/app/Components/List"

export default function ChartSeller() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className="w-full lg:w-[364.5px] h-auto lg:h-[502px] dark:bg-gray-900 rounded-2xl py-4 lg:py-[18px] px-4 lg:px-[24px] m-2 sm:m-4 lg:m-[26px] relative shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 lg:pb-6 border-b-[#e2e2ea] relative">
        <p className="text-base font-bold">Best Sellers</p>

        {/* Three Dots Button */}
        <div ref={dropdownRef} className="relative">
          <BsThreeDotsVertical
            className="text-[#7E7E8F] text-lg cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-3 w-40 dark:bg-gray-900 shadow-lg rounded-lg py-[14px] px-4 border-[#E8EDF2]">
              <List text='Sales report' />
              <List text='Export report' />
              <List text='Profit manage' />
              <List text='Revenue report' />
              <List text='Remove widget' />

            </div>
          )}
        </div>
      </div>

      {/* Seller List */}
      <div className="py-4 lg:py-5 max-h-[400px] lg:max-h-none overflow-y-auto">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <WidgetItem
            key={i}
            title="Esther Howard"
            text="MasterCard"
            price="446.61"
            sales="985"
            img="/photos/Avatar (1).png"
          />
        ))}
      </div>
    </div>
  )
}
