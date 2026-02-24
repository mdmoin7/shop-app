import { useNavigate } from "react-router";
import useProducts from "../hooks/useProducts";
import Card from "../components/Card";
import Button from "../components/Button";
import ImageWithFallback from "../components/ImageWithFallback";

function Home() {
  const navigate = useNavigate();
  const { products } = useProducts();

  const featured = products.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* 1️⃣ Promotional Banner */}
      <section className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            🎉 Limited Time Offer
          </h2>
          <p className="mt-2 text-blue-100">
            Get up to 30% off selected products.
          </p>
        </div>

        <Button
          variant="secondary"
          size="lg"
          onClick={() => navigate("/products")}
        >
          Shop Now
        </Button>
      </section>

      {/* 2️⃣ Hero Section with Animated Background */}
      <section className="relative text-center space-y-6 py-16 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 dark:from-gray-800 dark:to-gray-900 animate-pulse opacity-40" />

        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Discover Premium Products
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            High quality. Trusted brands. Delivered to your door.
          </p>

          <Button size="lg" onClick={() => navigate("/products")}>
            Explore Collection
          </Button>
        </div>
      </section>

      {/* 3️⃣ Categories Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Shop by Category
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {["Electronics", "Fashion", "Home"].map((cat) => (
            <Card
              key={cat}
              variant="elevated"
              className="cursor-pointer hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-800 dark:text-white">
                  {cat}
                </span>
                <span>→</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 4️⃣ Featured Products (with Skeleton) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Featured Products
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featured.length === 0
            ? Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} variant="elevated">
                  <div className="animate-pulse space-y-3">
                    <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                </Card>
              ))
            : featured.map((item) => (
                <Card key={item.productId} variant="elevated">
                  <div className="flex flex-col gap-3">
                    <ImageWithFallback
                      src={item.productImage}
                      alt={item.productName}
                      className="w-full h-40 object-cover rounded-lg"
                      containerClassName="w-full h-40 rounded-lg"
                    />

                    <h3 className="font-medium text-gray-800 dark:text-white line-clamp-1">
                      {item.productName}
                    </h3>

                    <Button
                      size="sm"
                      fullWidth
                      onClick={() => navigate("/products")}
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
        </div>
      </section>

      {/* 5️⃣ Testimonials */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          What Our Customers Say
        </h2>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {[
            "Amazing quality and fast delivery!",
            "Great customer support and pricing.",
            "My go-to store for online shopping.",
          ].map((review, i) => (
            <Card key={i} variant="outlined">
              <p className="text-gray-600 dark:text-gray-300">“{review}”</p>
              <div className="mt-4 text-sm font-medium text-gray-800 dark:text-white">
                — Happy Customer
              </div>
            </Card>
          ))}
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="rounded-xl bg-gray-100 dark:bg-gray-800 p-8 md:p-12 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
          Stay Updated
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Subscribe to our newsletter and get the latest updates, offers, and
          product launches.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Newsletter subscribed");
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="
        w-full
        px-4 py-2
        text-sm
        rounded-md
        border border-gray-300 dark:border-gray-600
        bg-white dark:bg-gray-700
        text-gray-800 dark:text-white
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      "
          />

          <Button type="submit" size="md">
            Subscribe
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Home;
