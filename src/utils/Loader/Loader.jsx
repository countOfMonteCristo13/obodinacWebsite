import React from 'react';
import './loader.css';

const Loader = ({ width, height, border }) => {
  return (
    <div
      className='loader'
      style={{
        width: `${width}px`,
        height: `${height}px`,
        top: `calc(50% - ${width / 2}px)`,
        left: `calc(50% - ${width / 2}px)`,
      }}
    >
      <div className='inner one' style={{ borderBottom: `${border}px solid var(--color-blue)` }} />
      <div className='inner two' style={{ borderRight: `${border}px solid var(--color-blue)` }} />
      <div className='inner three' style={{ borderTop: `${border}px solid var(--color-blue)` }} />
    </div>
  );
};

export default Loader;
