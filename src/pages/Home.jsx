import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import pic from "../images/IMG-20230318-WA0010.jpg";
import bannerPic1 from "../images/IMG_0978.jpeg";
import bannerPic2 from "../images/IMG_0979.jpeg";
import bannerPic3 from "../images/IMG_0980.jpeg";
import bannerPic4 from "../images/IMG_0981.jpeg";

const Home = () => {
  const bannerImages = [bannerPic1, bannerPic2, bannerPic3, bannerPic4];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[500px]"
        loop={true}
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
        <h2 className="text-3xl font-bold text-center mb-8">
          Makina ve daha fazlası
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img src={pic} className="rounded-lg shadow-lg" alt="product" />
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mert Uysal Makina, endüstriyel güç aktarma sistemleri alanında
              uzmanlaşmış bir şirkettir. Kasnak, cıvata, rulman ve disk gibi
              mekanik güç aktarma parçaları konusunda geniş ürün yelpazemiz ve
              deneyimli ekibimizle müşterilerimize en kaliteli çözümleri
              sunuyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Yüksek kalite standartlarımız, zamanında teslimat politikamız ve
              müşteri odaklı yaklaşımımızla sektörde güvenilir bir çözüm ortağı
              olarak hizmet vermekteyiz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
