import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-screen w-full overflow-hidden">

      <Link 
        href="/teachers" 
        className="group relative flex w-1/2 items-center justify-center bg-red-800"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            View Teachers
          </h2>
        </div>
      </Link>

      <Link 
        href="/students" 
        className="group relative flex w-1/2 items-center justify-center bg-blue-800"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            View Students
          </h2>
        </div>
      </Link>

      <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
      
    </main>
  )
}