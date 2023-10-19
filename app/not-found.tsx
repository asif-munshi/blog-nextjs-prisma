import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">404 Page Not Found</h2>
      <p className="text-base">Could not find requested resource</p>
      <Link
        href="/"
        className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-md transition duration-150 ease-in-out hover:opacity-90 hover:shadow-xl"
      >
        Return Home
      </Link>
    </div>
  )
}
