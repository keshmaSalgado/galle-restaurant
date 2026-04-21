'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
  createdAt: string;
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading recipes...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-amber-900 mb-12 text-center">
          Our Delicious Recipes
        </h1>

        {recipes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No recipes available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                {recipe.image && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={recipe.image}
                      alt={recipe.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-amber-900 mb-2">
                    {recipe.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>

                  <div className="mb-4">
                    <h3 className="font-bold text-amber-900 mb-2">Ingredients:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      {recipe.ingredients.slice(0, 3).map((ingredient, idx) => (
                        <li key={idx}>{ingredient}</li>
                      ))}
                      {recipe.ingredients.length > 3 && (
                        <li>+{recipe.ingredients.length - 3} more</li>
                      )}
                    </ul>
                  </div>

                  <button className="w-full bg-amber-900 text-white py-2 rounded hover:bg-amber-800 transition">
                    View Full Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
