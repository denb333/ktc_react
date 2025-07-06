import React from 'react';

const Logo: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
    {/* SVG simplified */}
    <svg width="28" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6h10c4 0 6 2 6 6s-2 6-6 6H8V6Zm0 0v12M8 24h10c4 0 6 2 6 6s-2 6-6 6H8V24Zm0 0v12" stroke="#237B54" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#237B54' }}>Big MARKET</span>
  </div>
);
export default Logo;
