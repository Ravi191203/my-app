import React, { useState } from "react";

const ProjectsHub = () => {
  const [activeCategory, setActiveCategory] = useState('mini');

  const categories = [
    { id: 'mini', name: 'Mini Projects' },
    { id: 'major', name: 'Major Projects' },
    { id: 'guides', name: 'Project Guides' }
  ];

  const projects = {
    mini: [
      {
        title: "Library Management System",
        semester: "2nd Semester",
        tech: ["Python", "MySQL", "Tkinter"],
        complexity: "Medium",
        duration: "2-3 weeks",
        description: "A desktop application to manage library operations including book inventory, student records, and lending system.",
        features: ["User Authentication", "Book Search", "Fine Calculation", "Reports Generation"]
      },
      {
        title: "Student Result Management",
        semester: "2nd Semester",
        tech: ["PHP", "MySQL", "Bootstrap"],
        complexity: "Medium",
        duration: "2-3 weeks",
        description: "Web-based system to manage and display student examination results.",
        features: ["Result Upload", "CGPA Calculator", "Performance Analytics", "PDF Generation"]
      },
      {
        title: "Inventory Management System",
        semester: "2nd Semester",
        tech: ["Java", "JavaFX", "PostgreSQL"],
        complexity: "Medium",
        duration: "3-4 weeks",
        description: "Desktop application for managing store inventory and sales records.",
        features: ["Stock Management", "Sales Tracking", "Invoice Generation", "Low Stock Alerts"]
      }
    ],
    major: [
      {
        title: "AI-Based Attendance System",
        semester: "4th Semester",
        tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
        complexity: "High",
        duration: "2-3 months",
        description: "Face recognition-based attendance system with web interface.",
        features: ["Face Detection", "Real-time Recognition", "Attendance Reports", "Admin Dashboard"]
      },
      {
        title: "E-Learning Platform",
        semester: "4th Semester",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        complexity: "High",
        duration: "2-3 months",
        description: "Complete learning management system with video courses and assessments.",
        features: ["Video Streaming", "Quiz System", "Progress Tracking", "Certificate Generation"]
      }
    ],
    guides: [
      {
        title: "Project Documentation Guide",
        type: "Documentation",
        format: "PDF",
        size: "2.3 MB",
        description: "Complete guide on how to document your MCA projects with templates and examples.",
        includes: ["Documentation Templates", "Sample Reports", "Guidelines", "Common Mistakes"]
      },
      {
        title: "Project Presentation Template",
        type: "Template",
        format: "PPT",
        size: "1.5 MB",
        description: "Professional presentation template for project demonstrations.",
        includes: ["Slide Templates", "Presentation Tips", "Design Guidelines", "Sample Content"]
      }
    ]
  };

  const renderProjectCard = (project, type) => {
    if (type === 'guides') {
      return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold mb-2">Includes:</h4>
            <ul className="space-y-1">
              {project.includes.map((item, index) => (
                <li key={index} className="text-gray-600">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{project.format} • {project.size}</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Download
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            {project.semester}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <h4 className="font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-600">• {feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Complexity: {project.complexity}</span>
          <span>Duration: {project.duration}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">MCA Projects Hub</h1>
        <p className="text-lg text-gray-600">
          Explore project ideas, get resources, and find implementation guides
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects[activeCategory].map((project, index) => (
          <div key={index}>
            {renderProjectCard(project, activeCategory)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsHub;