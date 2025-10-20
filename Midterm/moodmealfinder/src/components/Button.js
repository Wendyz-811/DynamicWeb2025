import React from 'react';

const Button = ({ children, onClick, variant = 'primary' }) => {
  const baseStyle = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105';
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
  };
  
  return (
    <button 
      className={`${baseStyle} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;