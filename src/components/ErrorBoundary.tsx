import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gold-500 mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-300 mb-4">We're sorry for the inconvenience. Please refresh the page.</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="bg-gold-500 text-dark-900 px-6 py-2 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;