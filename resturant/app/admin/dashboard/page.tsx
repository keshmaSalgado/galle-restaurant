'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Recipe {
  _id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ingredients: '',
    instructions: '',
    imageUrl: '',
  });

  useEffect(() => {
    // Check if admin is logged in
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    fetchRecipes();
  }, [router]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('/api/recipes');
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Update image preview when URL changes
    if (name === 'imageUrl') {
      // Only set preview if it's a valid image URL
      if (value && (value.startsWith('http://') || value.startsWith('https://'))) {
        // Check if URL likely points to an image file
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        const hasImageExtension = imageExtensions.some(ext => value.toLowerCase().includes(ext));
        
        if (hasImageExtension) {
          setImagePreview(value);
        } else {
          setImagePreview(null);
        }
      } else {
        setImagePreview(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('ingredients', formData.ingredients);
    formDataToSend.append('instructions', formData.instructions);
    formDataToSend.append('imageUrl', formData.imageUrl);

    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        await fetchRecipes();
        setFormData({ name: '', description: '', ingredients: '', instructions: '', imageUrl: '' });
        setImagePreview(null);
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this recipe?')) return;

    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchRecipes();
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const handleImageError = (imageUrl: string) => {
    setFailedImages(prev => new Set(prev).add(imageUrl));
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-amber-900 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-amber-900">Manage Recipes</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-amber-900 text-white px-6 py-2 rounded font-bold hover:bg-amber-800 transition"
          >
            {showForm ? 'Cancel' : 'Add New Recipe'}
          </button>
        </div>

        {/* Add Recipe Form */}
        {showForm && (
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Add New Recipe</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-900 font-bold mb-2">Recipe Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-200"
                    placeholder="e.g., Spaghetti Carbonara"
                  />
                </div>

                <div>
                  <label className="block text-amber-900 font-bold mb-2">Image URL</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-200"
                    placeholder="https://example.com/image.jpg"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Must be a direct link to an image file (.jpg, .jpeg, .png, .gif, .webp)
                  </p>
                  {imagePreview && (
                    <div className="mt-2 relative h-40 w-40">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        fill
                        sizes="160px"
                        className="object-cover rounded"
                        onError={() => setImagePreview(null)}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-amber-900 font-bold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-200"
                  placeholder="Brief description of the recipe"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-bold mb-2">
                  Ingredients (one per line)
                </label>
                <textarea
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-200"
                  placeholder="2 cups flour&#10;1 egg&#10;Salt to taste"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-bold mb-2">
                  Instructions (one per line)
                </label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded focus:outline-none focus:border-amber-900 focus:ring-2 focus:ring-amber-200"
                  placeholder="Mix ingredients&#10;Heat oven&#10;Bake for 20 minutes"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-900 text-white py-3 rounded font-bold hover:bg-amber-800 transition"
              >
                Add Recipe
              </button>
            </form>
          </div>
        )}

        {/* Recipes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {recipe.image && !failedImages.has(recipe.image) ? (
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={recipe.image}
                    alt={recipe.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    onError={() => handleImageError(recipe.image || '')}
                  />
                </div>
              ) : (
                <div className="relative h-48 w-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">No valid image</span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-2">{recipe.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(recipe._id)}
                    className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {recipes.length === 0 && !showForm && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No recipes yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}
