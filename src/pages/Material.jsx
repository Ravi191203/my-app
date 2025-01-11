import React, { useState } from "react";

const Materials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Materials' },
    { id: 'syllabus', name: 'Syllabus' },
    { id: 'notes', name: 'Lecture Notes' },
    { id: 'practicals', name: 'Lab Materials' },
    { id: 'previous', name: 'Previous Papers' }
  ];

  const materials = [
    {
      id: 1,
      title: "MCA Complete Syllabus 2025",
      category: "syllabus",
      description: "Detailed semester-wise syllabus for MCA program",
      size: "2.4 MB",
      format: "PDF",
      updatedDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Python Programming Notes",
      category: "notes",
      description: "Comprehensive notes covering Python fundamentals to advanced topics",
      size: "5.1 MB",
      format: "PDF",
      updatedDate: "2024-01-20",
    },
    {
      id: 3,
      title: "DBMS Lab Manual",
      category: "practicals",
      description: "Step-by-step guide for database practical assignments",
      size: "3.8 MB",
      format: "PDF",
      updatedDate: "2024-01-18",
    },
    {
      id: 4,
      title: "Web Technologies Notes",
      category: "notes",
      description: "Complete reference for HTML, CSS, JavaScript, and React",
      size: "4.2 MB",
      format: "PDF",
      updatedDate: "2024-01-22",
    },
    {
      id: 5,
      title: "Previous Year Papers 2024",
      category: "previous",
      description: "Collection of last 5 years question papers with solutions",
      size: "6.7 MB",
      format: "PDF",
      updatedDate: "2024-01-10",
    },
    {
      id: 6,
      title: "Data Structures Notes",
      category: "notes",
      description: "Detailed notes on arrays, linked lists, trees, and graphs",
      size: "3.5 MB",
      format: "PDF",
      updatedDate: "2024-01-25",
    }
  ];

  const filteredMaterials = selectedCategory === 'all' 
    ? materials 
    : materials.filter(material => material.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">MCA Study Materials</h1>
        <p className="text-lg text-gray-600">
          Access and download comprehensive study resources for your MCA program
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <div
            key={material.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
          >
            <div className="p-6">
              {/* File Type Icon */}
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{material.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{material.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{material.format} • {material.size}</span>
                <span>Updated: {material.updatedDate}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Notice Section */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Important Notes:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• All materials are regularly updated according to the latest syllabus</li>
          <li>• Materials are for educational purposes only</li>
          <li>• For any issues with downloads, please contact the administrator</li>
          <li>• Additional resources are added periodically</li>
        </ul>
      </div>
    </div>
  );
};

export default Materials;