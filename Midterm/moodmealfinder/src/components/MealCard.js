import React, { useState } from 'react';
import Button from './Button';

const MealCard = ({ meal }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{meal.strMeal}</h3>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Category:</span> {meal.strCategory}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Origin:</span> {meal.strArea}
        </p>
        <Button 
          onClick={() => setShowDetails(!showDetails)}
          variant="secondary"
        >
          {showDetails ? 'Hide Details' : 'View Recipe'}
        </Button>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-semibold mb-2">Instructions:</h4>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {meal.strInstructions}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCard;