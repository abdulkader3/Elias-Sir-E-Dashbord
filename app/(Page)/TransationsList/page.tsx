"use client"
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaArrowUpRightFromSquare, FaCircle, FaArrowTrendDown } from 'react-icons/fa6'
import { MdOutlineDelete, MdDownload, MdSwapHoriz } from 'react-icons/md'

const TransactionsListPage = () => {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const summaryCards = [
    {
      id: 1,
      title: 'Total Transactions',
      amount: '8,547',
      percentage: '+15.3%',
      trend: 'up',
      icon: 'transaction',
      color: '#50D1B2'
    },
    {
      id: 2,
      title: 'Successful',
      amount: '7,891',
      percentage: '+12.4%',
      trend: 'up',
      icon: 'success',
      color: '#10B981'
    },
    {
      id: 3,
      title: 'Failed',
      amount: '456',
      percentage: '-8.2%',
      trend: 'down',
      icon: 'failed',
      color: '#EF4444'
    },
    {
      id: 4,
      title: 'Pending',
      amount: '200',
      percentage: '+5.1%',
      trend: 'up',
      icon: 'pending',
      color: '#F59E0B'
    }
  ]

  const transactions = [
    {
      id: '#TXN-001',
      type: 'Purchase',
      customer: 'Bessie Cooper',
      date: 'Aug 5th, 2025',
      time: '10:45 AM',
      amount: '$400.00',
      status: 'Successful',
      method: 'Credit Card',
      reference: 'REF-2025-001',
      img: '/photos/Avatar (1).png'
    },
    {
      id: '#TXN-002',
      type: 'Refund',
      customer: 'Annette Black',
      date: 'Aug 6th, 2025',
      time: '02:30 PM',
      amount: '-$150.00',
      status: 'Successful',
      method: 'PayPal',
      reference: 'REF-2025-002',
      img: '/photos/Avatar.png'
    },
    {
      id: '#TXN-003',
      type: 'Transfer',
      customer: 'Kristin Watson',
      date: 'Aug 7th, 2025',
      time: '11:15 AM',
      amount: '$850.50',
      status: 'Successful',
      method: 'Bank Transfer',
      reference: 'REF-2025-003',
      img: '/photos/Avatar.png'
    },
    {
      id: '#TXN-004',
      type: 'Purchase',
      customer: 'Jerome Bell',
      date: 'Aug 8th, 2025',
      time: '03:45 PM',
      amount: '$599.00',
      status: 'Failed',
      method: 'Debit Card',
      reference: 'REF-2025-004',
      img: '/photos/Avatar (1).png'
    },
    {
      id: '#TXN-005',
      type: 'Purchase',
      customer: 'Marvin McKinney',
      date: 'Aug 9th, 2025',
      time: '09:20 AM',
      amount: '$1,299.99',
      status: 'Successful',
      method: 'Apple Pay',
      reference: 'REF-2025-005',
      img: '/photos/Avatar.png'
    },
    {
      id: '#TXN-006',
      type: 'Purchase',
      customer: 'Leslie Alexander',
      date: 'Aug 10th, 2025',
      time: '04:10 PM',
      amount: '$245.00',
      status: 'Pending',
      method: 'Credit Card',
      reference: 'REF-2025-006',
      img: '/photos/Avatar (1).png'
    },
    {
      id: '#TXN-007',
      type: 'Refund',
      customer: 'Courtney Henry',
      date: 'Aug 11th, 2025',
      time: '01:55 PM',
      amount: '-$299.99',
      status: 'Successful',
      method: 'PayPal',
      reference: 'REF-2025-007',
      img: '/photos/Avatar.png'
    },
    {
      id: '#TXN-008',
      type: 'Transfer',
      customer: 'Robert Fox',
      date: 'Aug 12th, 2025',
      time: '08:30 AM',
      amount: '$5,000.00',
      status: 'Successful',
      method: 'Wire Transfer',
      reference: 'REF-2025-008',
      img: '/photos/Avatar (1).png'
    }
  ]

  const statusColor = {
    Successful: 'text-green-500',
    Pending: 'text-orange-500',
    Failed: 'text-red-500'
  }

  const typeColor = {
    Purchase: '#50D1B2',
    Refund: '#EF4444',
    Transfer: '#6C5CE7'
  }

  const getIcon = (type: string) => {
    switch(type) {
      case 'transaction': return <MdSwapHoriz />
      case 'success': return <FaArrowUpRightFromSquare />
      case 'failed': return <FaArrowTrendDown />
      case 'pending': return <MdOutlineDelete />
      default: return <MdOutlineDelete />
    }
  }
  

  return (
    <div className="w-full bg-[#E8EDF2] min-h-screen">
      
      {/* Summary Cards */}
      <div className='gap-3 sm:gap-4 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-3 sm:p-4 lg:p-6 w-full'>
        {summaryCards.map((card) => (
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

      {/* Transactions Table Section */}
      <div className="w-[95%] sm:w-[97%] mx-auto bg-white rounded-2xl shadow-sm p-3 sm:p-4 lg:p-[25px] mb-6">
        
        {/* Header */}
        <div className="flex justify-between items-center px-3 sm:px-6 border-b pb-3 sm:pb-[17px] border-b-[#e2e2ea] mb-4 flex-wrap gap-3">
          <p className="text-sm sm:text-base font-bold">All Transactions</p>
          
          {/* Filter & Sort Controls */}
          <div className="flex gap-2 flex-wrap">
            {/* Status Filter */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-1 rounded-lg text-xs sm:text-sm font-medium border border-[#e2e2ea] bg-white text-[#7E7E8F] cursor-pointer hover:border-[#50D1B2] transition-all"
            >
              <option value="all">All Status</option>
              <option value="successful">Successful</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 rounded-lg text-xs sm:text-sm font-medium border border-[#e2e2ea] bg-white text-[#7E7E8F] cursor-pointer hover:border-[#50D1B2] transition-all"
            >
              <option value="recent">Recent</option>
              <option value="oldest">Oldest</option>
              <option value="highest">Highest Amount</option>
              <option value="lowest">Lowest Amount</option>
            </select>
          </div>

          <BsThreeDotsVertical className="text-[#7E7E8F] cursor-pointer" />
        </div>

        {/* Table */}
        <div className="px-2 sm:px-6 overflow-x-auto">
          
          {/* Table Heading - Hidden on Mobile */}
          <div className="hidden sm:grid grid-cols-7 text-xs sm:text-sm text-[#9A9AAF] font-medium py-3 sm:py-4 border-b border-b-[#e2e2ea]">
            <p>Transaction ID</p>
            <p>Customer</p>
            <p>Type</p>
            <p>Date & Time</p>
            <p>Amount</p>
            <p>Status</p>
            <p className="text-right pr-4">Method</p>
          </div>

          {/* Table Rows - Desktop */}
          <div className="hidden sm:block">
            {transactions.map((transaction, idx) => (
              <div key={idx} className="grid grid-cols-7 items-center text-xs sm:text-sm py-3 sm:py-4 border-b border-b-[#e2e2ea] hover:bg-gray-50 transition-colors">
                <p className="font-medium text-[#0F172A]">{transaction.id}</p>

                {/* Customer */}
                <div className="flex items-center gap-2">
                  <img src={transaction.img} alt="" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full" />
                  <p className="hidden md:block truncate">{transaction.customer}</p>
                </div>

                {/* Type */}
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: typeColor[transaction.type as keyof typeof typeColor] }}
                  />
                  <p className="font-medium">{transaction.type}</p>
                </div>

                <p className="text-xs">{transaction.date}</p>

                <p className="font-semibold text-[#0F172A]">{transaction.amount}</p>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <FaCircle className={`text-[8px] sm:text-[10px] ${statusColor[transaction.status as keyof typeof statusColor]}`} />
                  <p className={`text-xs sm:text-sm font-medium ${statusColor[transaction.status as keyof typeof statusColor]}`}>
                    {transaction.status}
                  </p>
                </div>

                <p className="text-right pr-4 text-[#7E7E8F]">{transaction.method}</p>
              </div>
            ))}
          </div>

          {/* Mobile Card View */}
          <div className="sm:hidden space-y-3">
            {transactions.map((transaction, idx) => (
              <div key={idx} className="bg-gray-50 p-3 rounded-xl border border-[#e2e2ea]">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <img src={transaction.img} alt="" className="w-7 h-7 rounded-full" />
                      <div>
                        <p className="font-medium text-sm">{transaction.id}</p>
                        <p className="text-xs text-[#7E7E8F]">{transaction.customer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCircle className={`text-[8px] ${statusColor[transaction.status as keyof typeof statusColor]}`} />
                      <span className={`text-xs font-medium ${statusColor[transaction.status as keyof typeof statusColor]}`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
                <div className="space-y-1 text-xs text-[#9A9AAF]">
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span className="font-medium text-[#0F172A] flex items-center gap-1">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: typeColor[transaction.type as keyof typeof typeColor] }}
                      />
                      {transaction.type}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span>{transaction.date} {transaction.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Method:</span>
                    <span className="text-[#0F172A]">{transaction.method}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#e2e2ea]">
                    <span>Amount:</span>
                    <span className="font-semibold text-[#0F172A]">{transaction.amount}</span>
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

export default TransactionsListPage
