import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <div className="fallback">
      <h1>Page not found</h1>
      <p>This page does not exist. Use the menu, or go back to the home page.</p>
      <Link className="btn btn--primary" to="/">Go to home</Link>
    </div>
  );
}
