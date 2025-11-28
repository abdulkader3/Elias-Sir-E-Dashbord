"use client"
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaArrowUpRightFromSquare, FaCircle, FaArrowTrendDown } from 'react-icons/fa6'
import { MdOutlineDelete, MdDownload } from 'react-icons/md'

const PaymentsPage = () => {
  const [filter, setFilter] = useState('all')

  const paymentCards = [
    {
      id: 1,
      title: 'Total Revenue',
      amount: '$45,231.89',
      percentage: '+20.1%',
      trend: 'up',
      icon: 'revenue',
      color: '#50D1B2'
    },
    {
      id: 2,
      title: 'Total Refunds',
      amount: '$8,345.50',
      percentage: '-4.3%',
      trend: 'down',
      icon: 'refund',
      color: '#FF6B6B'
    },
    {
      id: 3,
      title: 'Pending Payments',
      amount: '$12,456.00',
      percentage: '+12.5%',
      trend: 'up',
      icon: 'pending',
      color: '#FFB84D'
    },
    {
      id: 4,
      title: 'Total Transactions',
      amount: '2,847',
      percentage: '+8.2%',
      trend: 'up',
      icon: 'transaction',
      color: '#6C5CE7'
    }
  ]

  const recentPayments = [
    {
      id: '#PAY-001',
      customer: 'Bessie Cooper',
      product: 'MacBook Pro',
      date: 'Aug 5th, 2025',
      amount: '$400.00',
      status: 'Completed',
      method: 'Credit Card',
      img: '/photos/Avatar (1).png'
    },
    {
      id: '#PAY-002',
      customer: 'Annette Black',
      product: 'iPhone 11 Pro',
      date: 'Aug 6th, 2025',
      amount: '$200.00',
      status: 'Pending',
      method: 'PayPal',
      img: '/photos/Avatar.png'
    },
    {
      id: '#PAY-003',
      customer: 'Kristin Watson',
      product: 'Sony WH-1000XM4',
      date: 'Aug 7th, 2025',
      amount: '$349.99',
      status: 'Completed',
      method: 'Debit Card',
      img: '/photos/Avatar.png'
    },
    {
      id: '#PAY-004',
      customer: 'Jerome Bell',
      product: 'iPad Air',
      date: 'Aug 8th, 2025',
      amount: '$599.00',
      status: 'Failed',
      method: 'Credit Card',
      img: '/photos/Avatar (1).png'
    },
    {
      id: '#PAY-005',
      customer: 'Marvin McKinney',
      product: 'Apple Watch',
      date: 'Aug 9th, 2025',
      amount: '$399.00',
      status: 'Completed',
      method: 'Google Pay',
      img: '/photos/Avatar.png'
    }
  ]

  const statusColor = {
    Completed: 'text-green-500',
    Pending: 'text-orange-500',
    Failed: 'text-red-500'
  }

  const getIconColor = (color: string) => {
    const iconMap = {
      '#50D1B2': '#50D1B2',
      '#FF6B6B': '#FF6B6B',
      '#FFB84D': '#FFB84D',
      '#6C5CE7': '#6C5CE7'
    }
    return iconMap[color as keyof typeof iconMap] || '#50D1B2'
  }

  const getIcon = (type: string) => {
    switch(type) {
      case 'revenue': return <FaArrowUpRightFromSquare />
      case 'refund': return <FaArrowTrendDown />
      case 'pending': return <MdOutlineDelete />
      case 'transaction': return <MdDownload />
      default: return <MdOutlineDelete />
    }
  }

  return (
    <div className="w-full bg-[#E8EDF2] min-h-screen">
      
      {/* Payment Summary Cards */}
      <div className='gap-3 sm:gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-3 sm:p-4 lg:p-6 w-full'>
        {paymentCards.map((card) => (
          <div key={card.id} className='w-full h-auto min-h-32 lg:w-full lg:h-32 py-4 px-4 lg:px-[19px] bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow'>
            <div className='flex justify-between text-[#7E7E8F] font-normal text-[11px] sm:text-[12px]'>
              <p>{card.title}</p>
              <BsThreeDotsVertical />
            </div>

            <div className='flex justify-between items-center pt-4 lg:pt-6 pb-2 gap-2'>
              <div className='flex justify-between items-center gap-2'>
                <div 
                  className='w-8 h-8 lg:w-8 lg:h-8 rounded-lg flex items-center justify-center shrink-0'
                  style={{ backgroundColor: card.color }}
                >
                  <span className='text-white text-base lg:text-lg font-bold'>
                    {getIcon(card.icon)}
                  </span>
                </div>
                <p className='text-sm sm:text-base lg:text-base font-bold break'>{card.amount}</p>
              </div>

              <div 
                className='flex justify-between gap-2 text-sm lg:text-[16px] shrink-0 font-medium'
                style={{ color: card.color }}
              >
                {card.trend === 'up' ? <FaArrowUpRightFromSquare /> : <FaArrowTrendDown />}
                <p>{card.percentage}</p>
              </div>
            </div>

            <div className='flex justify-end'>
              <p className='text-[10px] sm:text-[11px] font-normal text-[#9A9AAF]'>Compared to last month</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Payments Table Section */}
      <div className="w-[95%] sm:w-[97%] mx-auto bg-white rounded-2xl shadow-sm p-3 sm:p-4 lg:p-[25px] mb-6">
        
        {/* Header */}
        <div className="flex justify-between items-center px-3 sm:px-6 border-b pb-3 sm:pb-[17px] border-b-[#e2e2ea] mb-4 flex-wrap gap-3">
          <p className="text-sm sm:text-base font-bold">Recent Payments</p>
          
          {/* Filter Buttons */}
          <div className="flex gap-2 flex-wrap">
            {['all', 'completed', 'pending', 'failed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3 py-1 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  filter === status
                    ? 'bg-[#50D1B2] text-white'
                    : 'bg-gray-100 text-[#7E7E8F] hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>

          <BsThreeDotsVertical className="text-[#7E7E8F] cursor-pointer" />
        </div>

        {/* Table */}
        <div className="px-2 sm:px-6 overflow-x-auto">
          
          {/* Table Heading - Hidden on Mobile */}
          <div className="hidden sm:grid grid-cols-6 text-xs sm:text-sm text-[#9A9AAF] font-medium py-3 sm:py-4 border-b border-b-[#e2e2ea]">
            <p>Payment ID</p>
            <p>Customer</p>
            <p>Product</p>
            <p>Date</p>
            <p>Amount</p>
            <p className="text-right pr-4">Status</p>
          </div>

          {/* Table Rows - Desktop */}
          <div className="hidden sm:block">
            {recentPayments.map((payment, idx) => (
              <div key={idx} className="grid grid-cols-6 items-center text-xs sm:text-sm py-3 sm:py-4 border-b border-b-[#e2e2ea] hover:bg-gray-50 transition-colors">
                <p className="font-medium text-[#0F172A]">{payment.id}</p>

                {/* Customer */}
                <div className="flex items-center gap-2">
                  <img src={payment.img} alt="" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full" />
                  <p className="hidden md:block">{payment.customer}</p>
                </div>

                <p className="truncate">{payment.product}</p>

                <p className="text-xs">{payment.date}</p>

                <p className="font-semibold">{payment.amount}</p>

                {/* Status */}
                <div className="flex items-center gap-2 justify-end pr-4">
                  <FaCircle className={`text-[8px] sm:text-[10px] ${statusColor[payment.status as keyof typeof statusColor]}`} />
                  <p className={`text-xs sm:text-sm font-medium ${statusColor[payment.status as keyof typeof statusColor]}`}>
                    {payment.status}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden space-y-3">
            {recentPayments.map((payment, idx) => (
              <div key={idx} className="bg-gray-50 p-3 rounded-xl border border-[#e2e2ea]">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <img src={payment.img} alt="" className="w-7 h-7 rounded-full" />
                    <div>
                      <p className="font-medium text-sm">{payment.id}</p>
                      <p className="text-xs text-[#7E7E8F]">{payment.customer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCircle className={`text-[8px] ${statusColor[payment.status as keyof typeof statusColor]}`} />
                    <span className={`text-xs font-medium ${statusColor[payment.status as keyof typeof statusColor]}`}>
                      {payment.status}
                    </span>
                  </div>
                </div>
                <div className="space-y-1 text-xs text-[#9A9AAF]">
                  <div className="flex justify-between">
                    <span>Product:</span>
                    <span className="font-medium text-[#0F172A]">{payment.product}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{payment.date}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#e2e2ea]">
                    <span>Amount:</span>
                    <span className="font-semibold text-[#0F172A]">{payment.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default PaymentsPage
