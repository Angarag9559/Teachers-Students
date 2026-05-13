import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] w-full flex-col overflow-hidden sm:flex-row">

      <Link 
        href="/teachers" 
        className="group relative flex min-h-[50vh] w-full items-center justify-center bg-red-800 sm:min-h-0 sm:w-1/2"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
            View Teachers
          </h2>
        </div>
      </Link>

      <Link 
        href="/students" 
        className="group relative flex min-h-[50vh] w-full items-center justify-center bg-blue-800 sm:min-h-0 sm:w-1/2"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
            View Students
          </h2>
        </div>
      </Link>

    </main>
  )
}