import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
