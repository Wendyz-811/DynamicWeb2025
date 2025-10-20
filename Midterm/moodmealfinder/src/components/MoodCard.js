import React from 'react';
const MoodCard = ({ mood, description, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-lg border-2 
        transition-all duration-200 transform hover:scale-105 ${
        isSelected 
          ? 'border-orange-500 bg-orange-50 shadow-lg' 
          : 'border-gray-200 hover:border-orange-300'
      }`}
    >

      <h3 className="font-semibold text-gray-800">{mood}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default MoodCard;
