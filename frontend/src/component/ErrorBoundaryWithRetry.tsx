import React from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorBoundaryWithRetry: React.FC<FallbackProps> = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  const handleTryAgain = () => {
    resetErrorBoundary()
  }

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error?.message}</pre>
      <pre>{componentStack}</pre>
      <button onClick={handleTryAgain}>Try again</button>
    </div>
  )
}
export default ErrorBoundaryWithRetry
