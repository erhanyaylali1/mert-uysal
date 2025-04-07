import React from 'react';
import { Link } from 'react-router-dom';

// Temporary mock data until Google Sheets integration
const products = [
  {
    id: 1,
    name: 'Alüminyum Kasnak',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22731c2f54?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Çelik Kasnak',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=400',
  },
  // Add more products...
];

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Ürünlerimiz</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <button className="mt-2 text-blue-600 hover:text-blue-800">
                  Detayları Görüntüle →
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;