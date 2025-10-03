import React from "react";
import { Link } from "react-router-dom";

import {
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-4 text-[18px] ">Компания</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">О нас</a></li>
            <li><a href="#" className="hover:text-blue-500">Реквизиты</a></li>
            <li><a href="#" className="hover:text-blue-500">Контакты</a></li>
            <li><a href="#" className="hover:text-blue-500">Вакансии</a></li>
            <li><a href="#" className="hover:text-blue-500">Карта сайта</a></li>
            <li><a href="#" className="hover:text-blue-500">Публичная оферта</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[18px]">Помощь</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Вопросы и ответы</a></li>
            <li><a href="#" className="hover:text-blue-500">Условия рассрочки</a></li>
            <li><a href="#" className="hover:text-blue-500">Способ оплаты</a></li>
            <li><a href="#" className="hover:text-blue-500">Доставка</a></li>
            <li><a href="#" className="hover:text-blue-500">Возврат товаров</a></li>
            <li><a href="#" className="hover:text-blue-500">Сервисные центры</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-[18px]">Контакты</h4>
          <p className="mb-1">Call-центр</p>
          <p className="mb-2 font-semibold">+998-78 555-55-35</p>
          <p className="mb-1">Электронная почта</p>
          <p className="mb-2 font-semibold">info@zon.uz</p>
          <p className="mb-1">График работы Call-центра</p>
          <p>В будние <span className="font-semibold">с 09:00 до 19:00</span></p>
          <p>Суббота <span className="font-semibold">с 09:00 до 18:00</span></p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="font-semibold mb-4 text-[18px]">Мы в социальных сетях</h4>
          <div className="flex justify-center md:justify-start gap-3 mb-4">
            <a href="#"><FaTelegramPlane className="text-[30px] bg-white p-1 rounded shadow hover:text-blue-500" /></a>
            <a href="#"><FaYoutube className="text-[30px] bg-white p-1 rounded shadow hover:text-red-600" /></a>
            <a href="#"><FaInstagram className="text-[30px] bg-white p-1 rounded shadow hover:text-pink-500" /></a>
            <a href="#"><FaFacebookF className="text-[30px] bg-white p-1 rounded shadow hover:text-blue-700" /></a>
          </div>
          <div className="flex justify-center md:justify-start gap-4 items-center font-semibold">
            <span className="text-[#01D2D5] text-lg">Payme</span>
            <span className="text-blue-600 text-lg">click</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center py-4 text-xs text-gray-600">
        2017–2025 © Zon.uz – интернет магазин. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
