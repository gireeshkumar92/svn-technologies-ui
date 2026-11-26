import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) { return { error }; }

  componentDidCatch(error, info) { console.error('Render error:', error, info); }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="fallback" role="alert">
        <h1>This page did not load</h1>
        <p>Something went wrong while showing this page. Reload to try again, or call us directly.</p>
        <button className="btn btn--primary" onClick={() => window.location.reload()}>Reload page</button>
      </div>
    );
  }
}
