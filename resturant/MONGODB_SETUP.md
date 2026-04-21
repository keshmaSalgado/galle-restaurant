# MongoDB Setup Guide

Your restaurant website now uses MongoDB to store recipe data and image links!

## Quick Start

### Option 1: Using MongoDB Atlas (Cloud - Recommended)

1. **Create an Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create a Cluster**
   - Create a free shared cluster
   - Select your preferred region
   - Wait for the cluster to be created (usually 5-10 minutes)

3. **Create a Database User**
   - In the cluster, go to "Database Access"
   - Click "Add New Database User"
   - Create a username and password
   - Note down your username and password

4. **Get Connection String**
   - Go to "Drivers" or "Connect"
   - Copy the connection string
   - It should look like: `mongodb+srv://username:password@cluster.mongodb.net/restaurant?retryWrites=true&w=majority`

5. **Update .env.local**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/restaurant?retryWrites=true&w=majority
   ```

### Option 2: Using Local MongoDB

1. **Install MongoDB**
   - Download from [mongodb.com](https://www.mongodb.com/try/download/community)
   - Install on your machine

2. **Start MongoDB**
   - Windows: MongoDB should auto-start, or start it from Services
   - Mac/Linux: Run `mongod` in terminal

3. **Update .env.local**
   ```
   MONGODB_URI=mongodb://localhost:27017/restaurant
   ```

## Environment Variable Setup

The `.env.local` file should contain:

```env
# MongoDB Connection String
MONGODB_URI=your_connection_string_here
```

⚠️ **IMPORTANT**: Never commit `.env.local` to Git. It's already in `.gitignore`.

## Database Schema

The app uses a `Recipe` collection with the following structure:

```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  ingredients: [String],
  instructions: [String],
  image: String (URL only, not actual file),
  createdAt: Date
}
```

## Admin Credentials

**Default Admin Login:**
- Username: `admin`
- Password: `password123`

You can change these in `app/api/admin/login/route.ts`

## Adding Recipes

1. Go to `/admin/login`
2. Log in with admin credentials
3. Click "Add New Recipe"
4. Fill in the recipe details
5. For the image, paste a URL (e.g., from Imgur, Cloudinary, or any image hosting service)
6. Click "Add Recipe"

## Image URL Tips

You can use free image hosting services:
- [Imgur](https://imgur.com) - Free image hosting
- [Cloudinary](https://cloudinary.com) - Free tier available
- [Unsplash](https://unsplash.com) - Use direct image URLs
- [Pexels](https://pexels.com) - Free stock photos

## Testing the Connection

Once you've set up MongoDB and updated `.env.local`:

```bash
npm run dev
```

Visit `http://localhost:3000` and try adding a recipe through the admin dashboard.

## Common Issues

**"Failed to connect to MongoDB"**
- Check your `MONGODB_URI` in `.env.local`
- Make sure MongoDB Atlas cluster is active and network access is allowed
- Verify your username and password are correct

**"Invalid recipe ID"**
- This is expected when MongoDB is not connected
- Set up MongoDB connection first

**Images not showing**
- Make sure you're using a valid image URL
- Check that the URL is accessible (not behind a firewall)

## Security Notes

- Never share your MongoDB connection string
- Keep `.env.local` private (it's in .gitignore)
- Change default admin credentials in production
- Use strong passwords for MongoDB Atlas

Enjoy your restaurant website! 🍽️
