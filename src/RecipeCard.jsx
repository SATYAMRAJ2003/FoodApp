import React from 'react';

export default function RecipeCard({  meal}) {
  return (
    <div className="shadow-md border rounded-lg overflow-hidden">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h2 className="font-semibold mb-2">{meal.strMeal}</h2>
        <a
          href={meal.strSource || meal.strYoutube}
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-orange-400 text-white px-3 py-1 rounded-md"
        >
          Recipe
        </a>
      </div>
    </div>
  );
}
