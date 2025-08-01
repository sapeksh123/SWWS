
import { Link } from "react-router-dom"
import { Home, ArrowLeft,Phone, Mail } from "lucide-react" 

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-teal-600 mb-4 drop-shadow-md">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center shadow-md hover:shadow-lg transition duration-300">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-semibold flex items-center justify-center shadow-sm hover:shadow-md transition duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>

       <div className="mt-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
  <h3 className="text-xl font-semibold text-gray-800 mb-3">Need Help?</h3>
  <p className="text-gray-600 mb-4">
    Contact our support team for assistance:
  </p>
  <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-700 font-medium items-start sm:items-center">
    <span className="flex items-center gap-2">
      <Phone className="w-4 h-4 text-teal-600" />
      +91 98765 43210
    </span>
    <span className="flex items-center gap-2">
      <Mail className="w-4 h-4 text-teal-600" />
      info@seaworldwatersolution.com
    </span>
  </div>
</div>
      </div>
    </div>
  )
}
