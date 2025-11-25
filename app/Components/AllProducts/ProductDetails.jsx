'use client'

import React, { useState } from 'react'
import { FiBold, FiItalic, FiUnderline, FiList, FiImage } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

const ProductDetails = () => {
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [sku, setSku] = useState('FOX-2983')
    const [stockQuantity, setStockQuantity] = useState('1258')
    const [regularPrice, setRegularPrice] = useState('$500')
    const [salePrice, setSalePrice] = useState('$460')
    const [taxStatus, setTaxStatus] = useState('Taxable')
    const [taxClass, setTaxClass] = useState('Standard')
    const [tags, setTags] = useState(['smartwatch', 'Apple', 'Watch', 'smartphone', 'iPhone13 max'])
    const [uploadedImages, setUploadedImages] = useState([
        { name: 'Product_thumbnail_1.png', progress: 45 },
        { name: 'Product_thumbnail_2.png', progress: 100 },
        { name: 'Product_thumbnail_3.png', progress: 100 },
        { name: 'Product_thumbnail_4.png', progress: 100 },
        { name: 'Product_thumbnail_5.png', progress: 100 },
    ])

    const handleRemoveTag = (index) => {
        setTags(tags.filter((_, i) => i !== index))
    }

    const handleRemoveImage = (index) => {
        setUploadedImages(uploadedImages.filter((_, i) => i !== index))
    }

    return (
        <div className=" w-full min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Product Details</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Product Name
                            </label>
                            <input
                                type="text"
                                placeholder="Type name here"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-gray-700"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Description
                            </label>
                            <div className="border border-gray-300 rounded-lg overflow-hidden">
                                {/* Rich Text Toolbar */}
                                <div className="bg-gray-100 p-3 border-b border-gray-300 flex items-center gap-2 flex-wrap">
                                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600">
                                        <FiBold size={18} />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600">
                                        <FiItalic size={18} />
                                    </button>
                                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600">
                                        <FiUnderline size={18} />
                                    </button>
                                    <div className="w-px h-6 bg-gray-300"></div>
                                    <button className="p-1.5 hover:bg-gray-200 rounded text-gray-600">
                                        <FiList size={18} />
                                    </button>
                                </div>
                                {/* Text Area */}
                                <textarea
                                    placeholder="Type description here"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full px-4 py-3 focus:outline-none placeholder-gray-400 text-gray-700 min-h-[140px] resize-none"
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Category
                            </label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 bg-white"
                            >
                                <option value="">Type Category here</option>
                            </select>
                        </div>

                        {/* Brand */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Brand
                            </label>
                            <select
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 bg-white"
                            >
                                <option value="">Type Brand name here</option>
                            </select>
                        </div>

                        {/* SKU and Stock Quantity */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    SKU
                                </label>
                                <input
                                    type="text"
                                    value={sku}
                                    onChange={(e) => setSku(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Stock quantity
                                </label>
                                <input
                                    type="text"
                                    value={stockQuantity}
                                    onChange={(e) => setStockQuantity(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Regular Price and Sale Price */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Regular Price
                                </label>
                                <input
                                    type="text"
                                    value={regularPrice}
                                    onChange={(e) => setRegularPrice(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Sale price
                                </label>
                                <input
                                    type="text"
                                    value={salePrice}
                                    onChange={(e) => setSalePrice(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Tax Status and Tax Class */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Tax status
                                </label>
                                <select
                                    value={taxStatus}
                                    onChange={(e) => setTaxStatus(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 bg-white"
                                >
                                    <option value="Taxable">Taxable</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">
                                    Tax class
                                </label>
                                <select
                                    value={taxClass}
                                    onChange={(e) => setTaxClass(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 bg-white"
                                >
                                    <option value="Standard">Standard</option>
                                </select>
                            </div>
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Tag
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                        <button
                                            onClick={() => handleRemoveTag(index)}
                                            className="ml-1 text-blue-500 hover:text-blue-700"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Gallery and Preview */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Product Image Preview - Placeholder */}
                        <div>
                            <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                {/* Image placeholder - will be filled later */}
                            </div>
                        </div>

                        {/* Product Gallery */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">
                                Product Gallery
                            </h3>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <FiImage size={32} className="text-gray-400" />
                                    <p className="text-sm text-gray-500">
                                        Drop your image here, or browse
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        JPG, PNG and GIF files are allowed
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Uploaded Images List */}
                        <div className="space-y-3">
                            {uploadedImages.map((image, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    {/* Image Thumbnail Placeholder */}
                                    <div className="w-12 h-12 bg-gray-200 rounded shrink-0 flex items-center justify-center">
                                        {/* Thumbnail will be filled later */}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-700 truncate">
                                            {image.name}
                                        </p>
                                        <div className="w-full bg-gray-300 rounded-full h-1.5 mt-1">
                                            <div
                                                className={`h-full rounded-full ${
                                                    image.progress === 100
                                                        ? 'bg-green-400'
                                                        : 'bg-blue-500'
                                                }`}
                                                style={{
                                                    width: `${image.progress}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-600 shrink-0">
                                        {image.progress}%
                                    </span>
                                    <button
                                        onClick={() => handleRemoveImage(index)}
                                        className="text-red-500 hover:text-red-700 shrink-0"
                                    >
                                        <MdClose size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-end mt-8">
                    <button className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
                        Cancel
                    </button>
                    <button className="px-6 py-2.5 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition">
                        Delete
                    </button>
                    <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
