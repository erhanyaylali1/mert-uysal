import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+905468010804" className="hover:text-blue-400">
                  +90 546 801 08 04
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:info@mertuysal.com"
                  className="hover:text-blue-400"
                >
                  info@mertuysal.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Mersinli, 2836. Sk. no:12/A, 35250 Konak/İzmir</span>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.4159011131355!2d27.17585007729149!3d38.43186137182744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b963deacddd3e9%3A0x88e86102d8588e02!2zTUVSVCBVWVNBTCBNQUvEsE5BIEfDnMOHIEFLVEFSTUEgU8SwU1RFTUxFUsSwIExURC7FnlTEsC4!5e0!3m2!1str!2str!4v1744478021177!5m2!1str!2str"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Mert Uysal Makina Güç Aktarma
            Sistemleri. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
