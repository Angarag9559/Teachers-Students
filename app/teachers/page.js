'use client'

import teachers from '../../utils/teachers.json'
import { useState } from 'react'
import Image from 'next/image'


export default function TeachersPage() {
  const [teacherList, setTeacherList] = useState(teachers)
  const [searchTerm, setSearchTerm] = useState('')

  const deleteTeacher = (id) => {
    setTeacherList(teacherList.filter(teacher => teacher.id !== id))
  }

  const filteredTeachers = teacherList.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-[1100px] p-5">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">Teachers</h1>
        
        <input type="text" placeholder="Search teachers..." className="w-full sm:w-64 rounded-lg border border-black p-2 outline-none focus:ring-2 focus:ring-blue-500" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredTeachers.map((teacher, index) => (
          <div key={teacher.id} className="overflow-hidden rounded-[14px] border border-black bg-white">
            <div className="relative h-[200px] w-full bg-[#bbbbbb]">
              <Image src={`/${teacher.img}`} className="object-cover" alt={teacher.name} fill priority={index < 1} sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 275px"/>
            </div>
            <div className="p-[10px]">
              <h2 className="my-2 text-xl font-bold">{teacher.name}</h2>
              <div className="relative mb-3 h-[60px] w-full">
                <Image 
                  src={`/${teacher.items}`} 
                  className="object-contain" 
                  alt={`${teacher.name}'s item`} 
                  fill 
                  sizes="100px"
                />
              </div>
              <button className="rounded-md bg-[#dc3545] px-3 py-2 text-sm text-white transition-colors hover:bg-[#c82333]" onClick={() => deleteTeacher(teacher.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}