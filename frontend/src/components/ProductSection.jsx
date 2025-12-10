import ProductCard from "./ProductCard";
import LaptopImage from "../assets/Laptop.jpg";
import Smartwatch from '../assets/Smartwatch.jpg'
import mobile from '../assets/mobilephone.jpg'
import ac from '../assets/ac.jpg'

const ProductsSection = () => {
  const products = [
    {
      title: "Gaming Laptop",
      price: 1200,
      rating: 4,
      image: LaptopImage,
    },
    {
      title: "Smart Watch",
      price: 250,
      rating: 5,
      image: Smartwatch,
    },
        {
      title: "Mobile Phone",
      price: 50000,
      rating: 5,
      image: mobile,
    },
        {
      title: "Air Conditioner",
      price: 150000,
      rating: 5,
      image: ac,
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Featured Products
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Explore our trending products with top quality and great value.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
            onAddToCart={() => alert(`Added ${product.title} to cart`)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
