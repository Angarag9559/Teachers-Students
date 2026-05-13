'use client'

import teachers from '../../utils/teachers.json'
import { useState } from 'react'
import Image from 'next/image'

export default function TeachersPage() {
  const [teacherList, setTeacherList] = useState(teachers)
  const [search, setSearch] = useState('')

  const filtered = teacherList.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-[1100px] p-5">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Teachers</h1>
        <input
          type="text"
          placeholder="Search..."
          className="rounded border border-gray-300 px-3 py-1.5 text-sm outline-none"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 && <p className="text-gray-400">No teachers found.</p>}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((teacher, i) => (
          <div key={teacher.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="relative h-[200px] w-full bg-gray-100">
              <Image
                src={`/${teacher.img}`}
                className="object-cover"
                alt={teacher.name}
                fill
                priority={i < 4}
                sizes="(max-width: 768px) 50vw, 275px"
              />
            </div>
            <div className="p-3">
              <p className="mb-2 font-bold">{teacher.name}</p>
              <div className="relative mb-3 h-[50px] w-full">
                <Image
                  src={`/${teacher.items}`}
                  className="object-contain"
                  alt="item"
                  fill
                  sizes="150px"
                />
              </div>
              <button
                className="rounded bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
                onClick={() => setTeacherList(teacherList.filter(t => t.id !== teacher.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}