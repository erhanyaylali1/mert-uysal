import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  // const { id } = useParams();

  // Temporary mock data until Google Sheets integration
  const product = {
    id: 1,
    name: "Alüminyum Kasnak",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22731c2f54?auto=format&fit=crop&q=80&w=800",
    description:
      "Yüksek kaliteli alüminyum malzemeden üretilmiş, hafif ve dayanıklı kasnak.",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.description}
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Teknik Özellikler</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Malzeme: Alüminyum</li>
              <li>Yüzey İşlemi: Eloksal</li>
              <li>Standart: DIN 7967</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
