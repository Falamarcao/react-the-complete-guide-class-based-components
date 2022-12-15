import { Component } from "react";

// Only class-based components can catch exceptions (errors).
class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error) {
    this.setState({ hasError: true, errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.state.errorMessage}</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
