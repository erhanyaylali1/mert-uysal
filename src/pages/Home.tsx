import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const bannerImages = [
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1470',
    'https://images.unsplash.com/photo-1581092160607-ee22731c2f54?auto=format&fit=crop&q=80&w=1470',
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=1470',
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[500px]"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Mert Uysal Makina
                  </h1>
                  <p className="text-xl md:text-2xl">
                    Güç Aktarma Sistemlerinde Güvenilir Çözüm Ortağınız
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Hakkımızda</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22731c2f54?auto=format&fit=crop&q=80&w=1470"
              alt="Factory"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mert Uysal Makina, endüstriyel güç aktarma sistemleri alanında uzmanlaşmış bir şirkettir. 
              Kasnak, cıvata, rulman ve disk gibi mekanik güç aktarma parçaları konusunda geniş ürün 
              yelpazemiz ve deneyimli ekibimizle müşterilerimize en kaliteli çözümleri sunuyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Yüksek kalite standartlarımız, zamanında teslimat politikamız ve müşteri odaklı 
              yaklaşımımızla sektörde güvenilir bir çözüm ortağı olarak hizmet vermekteyiz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;