import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-amber-900 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Galle Restaurant</h1>
          <p className="text-xl mb-8 text-amber-100">
            Experience authentic culinary delights from around the world
          </p>
          <Link
            href="/recipes"
            className="inline-block bg-amber-200 text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-100 transition"
          >
            Explore Our Recipes
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Expert Chefs</h3>
              <p className="text-gray-600">
                Our talented team of chefs brings years of experience and passion to every dish.
              </p>
            </div>
            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <div className="text-4xl mb-4">🥘</div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Fresh Ingredients</h3>
              <p className="text-gray-600">
                We source only the finest and freshest ingredients from local suppliers.
              </p>
            </div>
            <div className="text-center p-8 bg-amber-50 rounded-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2 text-amber-900">Quality Service</h3>
              <p className="text-gray-600">
                Our dedicated staff ensures a memorable dining experience every visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Browse Our Collection</h2>
          <p className="text-amber-100 mb-8">
            Check out our delicious recipes and learn how to prepare them at home.
          </p>
          <Link
            href="/recipes"
            className="inline-block bg-amber-200 text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-100 transition"
          >
            View All Recipes
          </Link>
        </div>
      </section>
    </div>
  );
}
