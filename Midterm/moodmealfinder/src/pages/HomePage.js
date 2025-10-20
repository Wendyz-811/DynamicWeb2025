  import React, { useState, useEffect } from 'react';
import Panel from '../components/Panel';
import MoodCard from '../components/MoodCard';
import MealCard from '../components/MealCard';

const HomePage = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [meals, setMeals] = useState([]);

  const moods = [
    { mood: 'Happy', description: 'Healthy and Fresh', category: 'Beef' },
    { mood: 'Chill', description: 'Comfort Food', category: 'Pasta' },
    { mood: 'Tired', description: 'Quick and Easy', category: 'Chicken' },
    { mood: 'Excited', description: 'Special Treats', category: 'Dessert' },
    { mood: 'Love', description: 'Elegant Dining', category: 'Lamb' }
  ];

  const fetchMeals = async (category) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();
    
    if (data.meals) {
      const detailedMeals = await Promise.all(
        data.meals.slice(0, 3).map(async (meal) => {
          const detailResponse = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
          );
          const detailData = await detailResponse.json();
          return detailData.meals[0];
        })
      );
      setMeals(detailedMeals);
    } else {
      setMeals([]);
    }
  };

  useEffect(() => {
    if (selectedMood) {
      fetchMeals(selectedMood.category);
    }
  }, [selectedMood]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Panel title="How are you feeling today?" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {moods.map((mood) => (
            <MoodCard
              key={mood.mood}
              mood={mood.mood}
              description={mood.description}
              onClick={() => handleMoodSelect(mood)}
              isSelected={selectedMood?.mood === mood.mood}
            />
          ))}
        </div>
      </Panel>

      {selectedMood && meals.length > 0 && (
        <Panel className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </Panel>
      )}
    </div>
  );
};

export default HomePage;