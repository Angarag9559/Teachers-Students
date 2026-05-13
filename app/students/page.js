'use client'

import students from '../../utils/students.json'
import { useState } from 'react'

export default function StudentsPage() {
  const [studentList, setStudentList] = useState(students)
  const [search, setSearch] = useState('')

  const filtered = studentList.filter(s =>
    (s.first_name + ' ' + s.last_name).toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-[1100px] p-5">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Students</h1>
        <input
          type="text"
          placeholder="Search..."
          className="rounded border border-gray-300 px-3 py-1.5 text-sm outline-none"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 && <p className="text-gray-400">No students found.</p>}
      <div className="flex flex-col gap-3">
        {filtered.map(student => (
          <div key={student.id} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4">
            <div>
              <p className="font-bold">{student.first_name} {student.last_name}</p>
              <p className="text-sm text-gray-500">{student.email}</p>
              <p className="text-sm text-gray-400">Age: {student.age} | {student.country} | Points: {student.point}</p>
            </div>
            <button
              className="rounded bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
              onClick={() => setStudentList(studentList.filter(s => s.id !== student.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}