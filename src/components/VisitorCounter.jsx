import { useEffect, useState } from 'react';
import './VisitorCounter.css';

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch current count
    fetch('/api/visitor-count')
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch visitor count:', err);
        setLoading(false);
      });
      
    // Increment count (debounced to once per session)
    const hasVisited = sessionStorage.getItem('visited');
    if (!hasVisited) {
      fetch('/api/visitor-count', { method: 'POST' })
        .then(res => res.json())
        .then(data => setCount(data.count))
        .catch(err => console.error('Failed to increment count:', err));
      
      sessionStorage.setItem('visited', 'true');
    }
  }, []);
  
  if (loading) {
    return (
      <div className="visitor-counter loading">
        <span>Loading visitors...</span>
      </div>
    );
  }
  
  return (
    <div className="visitor-counter">
      <svg className="visitor-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
      </svg>
      <span className="count">{count?.toLocaleString()}</span>
      <span className="label">visitors</span>
    </div>
  );
}
