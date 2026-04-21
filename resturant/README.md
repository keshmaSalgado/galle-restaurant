# 🍽️ Galle Restaurant Website

A modern, full-featured restaurant website built with Next.js and Tailwind CSS. This project includes public pages for displaying recipes and an admin dashboard for managing recipe content with image uploads.

## Features

### 🌐 Public Pages
- **Home Page**: Beautiful landing page with restaurant introduction and key features
- **Recipes Page**: Display all recipes in a grid layout with descriptions and ingredients preview
- **Contact Page**: Contact form and restaurant information

### 👨‍💼 Admin Dashboard
- **Admin Login**: Secure authentication with demo credentials
- **Recipe Management**: Add, view, and delete recipes
- **Image Upload**: Upload and display recipe images
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Tech Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component
- **Data Storage**: JSON file-based storage

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── layout.tsx           # Root layout with navigation
├── page.tsx            # Home page
├── recipes/
│   └── page.tsx        # Recipes listing page
├── contact/
│   └── page.tsx        # Contact form page
├── admin/
│   ├── login/
│   │   └── page.tsx    # Admin login page
│   └── dashboard/
│       └── page.tsx    # Admin dashboard
└── api/
    ├── recipes/
    │   ├── route.ts    # GET recipes, POST new recipe
    │   └── [id]/
    │       └── route.ts # DELETE recipe
    └── admin/
        └── login/
            └── route.ts # Admin authentication

public/
├── uploads/            # Recipe image storage
└── ...

data/
└── recipes.json        # Recipe data file (created automatically)
```

## Admin Dashboard

### Login Credentials
- **Username**: `admin`
- **Password**: `admin123`

### Features
- ✅ Add new recipes with descriptions
- ✅ Upload recipe images
- ✅ List ingredients and instructions
- ✅ Delete recipes
- ✅ Real-time recipe management

## API Routes

### GET `/api/recipes`
Fetch all recipes

**Response**:
```json
[
  {
    "id": "1234567890",
    "name": "Recipe Name",
    "description": "Recipe description",
    "ingredients": ["ingredient1", "ingredient2"],
    "instructions": ["step1", "step2"],
    "image": "/uploads/image.jpg",
    "createdAt": "2026-04-20T10:00:00Z"
  }
]
```

### POST `/api/recipes`
Create a new recipe

**Request** (FormData):
- `name`: string
- `description`: string
- `ingredients`: string (newline-separated)
- `instructions`: string (newline-separated)
- `image`: File (optional)

### DELETE `/api/recipes/[id]`
Delete a recipe by ID

## Building for Production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Styling

The project uses Tailwind CSS with a warm restaurant color scheme:
- **Primary**: Amber-900 (Rich brown)
- **Accent**: Amber-200 (Light tan)
- **Neutral**: Gray-600 (Text)

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] JWT authentication
- [ ] Recipe ratings and reviews
- [ ] Search and filter functionality
- [ ] User accounts and favorites
- [ ] Email notifications
- [ ] Admin dashboard enhancements
- [ ] Payment integration for online ordering

## Contributing

Feel free to fork and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please contact: keshmasalgado11@gmail.com
