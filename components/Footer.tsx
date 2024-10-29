import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-stone-100 w-full py-8">
      <div className="container mx-auto flex flex-row justify-between items-start gap-16 px-16">
        
        {/* Left Section: Contact Information */}
        <div className="flex flex-col uppercase">
          <h3 className="text-xl text-blue-700 font-bold">Cục Thuỷ Lợi</h3>
          <p className="text-gray-700"><strong>Cơ quan chủ quản:</strong> Cục Thuỷ Lợi - Bộ Nông nghiệp và Phát triển Nông thôn</p>
          <p className="text-gray-700"><strong>Địa chỉ:</strong> Số 2 Ngọc Hà, Ba Đình, Hà Nội</p>
          <p className="text-gray-700"><strong>Điện thoại:</strong> (84-24) 37335706</p>
          <p className="text-gray-700"><strong>Email:</strong> cucthuyloi@wrd.gov.vn</p>
        </div>

        {/* Right Section: Website Links */}
        <div className="flex flex-col uppercase">
          <h3 className="text-xl text-blue-700 font-bold">Liên Kết Website</h3>
          <select className="mt-2 p-2 border border-gray-300 rounded-md text-gray-700">
            <option>Liên kết website</option>
            <option>Bộ Nông nghiệp và Phát triển Nông thôn</option>
            <option>Cục Quản lý Tài nguyên Nước</option>
            <option>Cục Thuỷ lợi</option>
            <option>Viện Quy hoạch Thuỷ Lợi</option>
            <option>Viện Khoa học Thuỷ lợi Việt Nam</option>
          </select>
          {/* <p className="text-gray-700 mt-2">Số lượt truy cập: 3</p> */}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full border-t border-gray-300 mt-8 pt-4 text-center text-blue-700">
        © 2024 | Cục Thuỷ Lợi
      </div>
    </footer>
  );
};

export default Footer;
