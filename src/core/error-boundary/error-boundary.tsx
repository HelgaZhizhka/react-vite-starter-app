import { Component, ReactNode } from 'react';
import type { ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('Caught by ErrorBoundary:', error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h2>Ups! Something went wrong 😢</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
