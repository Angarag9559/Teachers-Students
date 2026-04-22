'use client'

import students from '../../utils/students.json'
import { useState } from 'react'

export default function StudentsPage() {
  const [studentList, setStudentList] = useState(students)
  const [searchTerm, setSearchTerm] = useState('')

  const deleteStudent = (id) => {
    setStudentList(studentList.filter(student => student.id !== id))
  }

  // Filter logic: Checks both first and last name
  const filteredStudents = studentList.filter((student) => {
    const fullName = `${student.first_name} ${student.last_name}`.toLowerCase()
    return fullName.includes(searchTerm.toLowerCase())
  })

  return (
    <div className="mx-auto max-w-[1100px] p-5">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-4xl font-bold">Students</h1>
        
        <input
          type="text"
          placeholder="Search students..."
          className="rounded-lg border border-black p-2 outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4">
        {filteredStudents.map((student) => (
          <div 
            key={student.id} 
            className="flex items-center justify-between rounded-xl border border-black bg-white p-5 shadow-sm"
          >
            <div className="student-info">
              <h3 className="text-xl font-bold">{student.first_name} {student.last_name}</h3>
              <p className="text-gray-600">Email: {student.email}</p>
              <p className="text-sm text-gray-500">
                Age: {student.age} | Country: {student.country}
              </p>
              <p className="mt-1 font-semibold">
                Points: <span className="text-blue-600">{student.point}</span>
              </p>
            </div>
            
            <button 
              className="rounded-md bg-[#dc3545] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#c82333]" 
              onClick={() => deleteStudent(student.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}