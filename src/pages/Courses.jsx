import React, { useState } from "react";

const Courses = () => {
  const [selectedSemester, setSelectedSemester] = useState(1);

  const courseData = {
    1: [
      {
        code: "MCA101",
        title: "Programming with Python",
        credits: 4,
        description: "Advanced programming concepts using Python, including OOP, data structures, and algorithms.",
        topics: ["Object-Oriented Programming", "Data Structures", "File Handling", "GUI Programming with Tkinter"]
      },
      {
        code: "MCA102",
        title: "Computer Organization and Architecture",
        credits: 3,
        description: "Study of computer architecture, organization, and basic hardware components.",
        topics: ["CPU Architecture", "Memory Organization", "I/O Systems", "Instruction Sets"]
      },
      {
        code: "MCA103",
        title: "Database Management Systems",
        credits: 4,
        description: "Fundamentals of database design, SQL, and database management systems.",
        topics: ["SQL", "Database Design", "Normalization", "Transaction Management"]
      },
      {
        code: "MCA104",
        title: "Discrete Mathematics",
        credits: 3,
        description: "Mathematical foundations for computer science and programming.",
        topics: ["Set Theory", "Graph Theory", "Boolean Algebra", "Combinatorics"]
      }
    ],
    2: [
      {
        code: "MCA201",
        title: "Web Technologies",
        credits: 4,
        description: "Modern web development technologies and frameworks.",
        topics: ["HTML5/CSS3", "JavaScript", "React.js", "Node.js"]
      },
      {
        code: "MCA202",
        title: "Operating Systems",
        credits: 3,
        description: "Concepts of operating systems, process management, and system programming.",
        topics: ["Process Management", "Memory Management", "File Systems", "System Security"]
      },
      {
        code: "MCA203",
        title: "Data Science and Analytics",
        credits: 4,
        description: "Introduction to data science, analytics, and machine learning concepts.",
        topics: ["Data Analysis", "Machine Learning", "Statistical Methods", "Data Visualization"]
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">MCA 2025 Course Curriculum</h1>
        <p className="text-lg text-gray-600">
          Comprehensive course structure for Master of Computer Applications
        </p>
      </div>

      {/* Semester Selection */}
      <div className="flex justify-center mb-8 space-x-4">
        {[1, 2].map((semester) => (
          <button
            key={semester}
            onClick={() => setSelectedSemester(semester)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
              selectedSemester === semester
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Semester {semester}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courseData[selectedSemester].map((course) => (
          <div
            key={course.code}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.code}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {course.credits} Credits
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Important Notes:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Each semester includes lab work and practical assignments</li>
          <li>• Minimum attendance requirement: 75%</li>
          <li>• Internal assessment: 40 marks</li>
          <li>• End semester examination: 60 marks</li>
        </ul>
      </div>
    </div>
  );
};

export default Courses;