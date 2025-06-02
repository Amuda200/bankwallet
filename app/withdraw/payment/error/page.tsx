"use client"

import { useRouter } from "next/navigation"

export default function PaymentErrorPage() {
  const router = useRouter()

  const handleRetry = () => {
    router.push("/withdraw/payment")
  }

  const handleCancel = () => {
    router.push("/withdraw/pin")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black">
      <div className="w-full max-w-md bg-white rounded-lg p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-red-500 mb-2">Bad Request</h2>
          <p className="text-gray-700 mb-4">Payment not received. Please check your payment details and try again.</p>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700 text-sm mb-2">
              If you're experiencing issues with payment, please join our support channel for assistance:
            </p>
            <a
              href="https://t.me/+GtlLHWG6wS42NTNk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-sm hover:text-blue-600"
            >
              Join Support Channel
            </a>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={handleCancel}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleRetry}
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Retry Payment
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
