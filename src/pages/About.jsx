import React from "react";
import { Building2, Users, Trophy, Target } from "lucide-react";
import logo from "../images/702E8905-F3F4-4DFE-9C98-5A3F582D00E5.jpeg";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
        <p className="text-xl text-gray-600">
          Güç aktarma sistemlerinde 3 yılı aşkın deneyim
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <img src={logo} alt="Company" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Şirket Tarihçemiz</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Mert Uysal Makina, 2022 yılında kurulmuş olup, endüstriyel güç
            aktarma sistemleri alanında Türkiye'nin önde gelen üreticilerinden
            biri haline gelmiştir.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Müşterilerimize en kaliteli ürünleri sunma konusundaki
            kararlılığımız ve sürekli gelişim ilkemiz, bizi sektörde güvenilir
            bir çözüm ortağı yapmıştır.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Yılların Tecrübesi</h3>
          <p className="text-gray-600">3 Yıllık Deneyim</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Uzman Destek</h3>
          <p className="text-gray-600">Tam zamanlı destek</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Trophy className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Kalite</h3>
          <p className="text-gray-600">Yüksek kaliteli tedarik</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Target className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2">Müşteri Odaklılık</h3>
          <p className="text-gray-600">Yüksek müşteri memnuniyeti</p>
        </div>
      </div>
    </div>
  );
};

export default About;
