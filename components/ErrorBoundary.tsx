import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error('[ErrorBoundary]', {
            error,
            errorInfo,
            url: window.location.href,
            timestamp: new Date().toISOString()
        })
    }

    render() {
        if (this.state.hasError) {
            return <div>Something went wrong. Please try again.</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary 