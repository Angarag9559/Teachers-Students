import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-56px)] w-full flex-col sm:flex-row">

      <Link
        href="/teachers"
        className="flex min-h-[50vh] w-full items-center justify-center bg-red-800 hover:bg-red-700 transition-colors sm:min-h-0 sm:w-1/2"
      >
        <h2 className="text-2xl font-bold text-white sm:text-4xl">
          Teachers
        </h2>
      </Link>

      <Link
        href="/students"
        className="flex min-h-[50vh] w-full items-center justify-center bg-blue-800 hover:bg-blue-700 transition-colors sm:min-h-0 sm:w-1/2"
      >
        <h2 className="text-2xl font-bold text-white sm:text-4xl">
          Students
        </h2>
      </Link>

    </main>
  )
}