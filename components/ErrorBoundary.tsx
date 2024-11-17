import React from 'react'

type ErrorBoundaryProps = {
    children: React.ReactNode
}

type ErrorBoundaryState = {
    hasError: boolean
    error: Error | null
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    public state: ErrorBoundaryState = {
        hasError: false,
        error: null
    }

    public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error
        }
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('[ErrorBoundary]', {
            error,
            errorInfo,
            url: window.location.href,
            timestamp: new Date().toISOString()
        })
    }

    public render(): React.ReactNode {
        if (this.state.hasError) {
            return <div>Something went wrong. Please try again.</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary 