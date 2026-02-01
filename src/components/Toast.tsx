import { useState, useEffect } from 'react'

interface Toast {
  id: string
  message: string
  type?: 'success' | 'error' | 'info'
}

const Toast = () => {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const handleShowToast = (e: CustomEvent) => {
      const { message, type = 'success' } = e.detail
      const id = Math.random().toString(36).substring(7)
      const newToast: Toast = { id, message, type }
      
      setToasts((prev) => [...prev, newToast])
      
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
      }, 3000)
    }

    window.addEventListener('showToast', handleShowToast as EventListener)
    return () => window.removeEventListener('showToast', handleShowToast as EventListener)
  }, [])

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm border animate-in slide-in-from-bottom-5 ${
            toast.type === 'error'
              ? 'bg-red-500/90 text-white border-red-600'
              : toast.type === 'info'
              ? 'bg-blue-500/90 text-white border-blue-600'
              : 'bg-green-500/90 text-white border-green-600'
          }`}
          role="alert"
        >
          <div className="flex items-center gap-2">
            <span>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-2 hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              aria-label="Fechar notificação"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Toast
