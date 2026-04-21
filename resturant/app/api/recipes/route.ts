import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Recipe } from '@/models/Recipe';

// GET - Fetch all recipes
export async function GET() {
  try {
    await connectDB();
    const recipes = await Recipe.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recipes' },
      { status: 500 }
    );
  }
}

// POST - Add new recipe with image URL
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const ingredients = (formData.get('ingredients') as string).split('\n').filter(Boolean);
    const instructions = (formData.get('instructions') as string).split('\n').filter(Boolean);
    const imageUrl = formData.get('imageUrl') as string;

    if (!name || !description || ingredients.length === 0 || instructions.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await connectDB();

    const newRecipe = new Recipe({
      name,
      description,
      ingredients,
      instructions,
      image: imageUrl || '',
      createdAt: new Date(),
    });

    await newRecipe.save();

    return NextResponse.json(newRecipe, { status: 201 });
  } catch (error) {
    console.error('Error creating recipe:', error);
    return NextResponse.json(
      { error: 'Failed to create recipe' },
      { status: 500 }
    );
  }
}
