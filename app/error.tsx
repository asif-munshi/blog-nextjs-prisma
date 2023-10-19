'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: any; reset: any }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-md transition duration-150 ease-in-out hover:opacity-90 hover:shadow-xl"
      >
        Try again
      </button>
    </div>
  )
}
