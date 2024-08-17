import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white">
    <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
      <h1 className="text-6xl font-extrabold mb-4 text-blue-600">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-black">
        Page Not Found
      </h2>
      <p className="text-lg mb-6 text-black">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  </div>
  )
}