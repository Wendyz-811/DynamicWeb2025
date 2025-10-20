import React from 'react';

const Panel = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>}
      {children}
    </div>
  );
};

export default Panel;