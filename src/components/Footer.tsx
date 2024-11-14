import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';
import { HiOutlineClock,HiOutlineMail,HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <section className="relative bg-cover bg-center text-white py-10 px-4 bg-[url('./assets/dining.jpeg')] h-fit lg:h-[720px]">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          WE READY TO HAVE YOU THE BEST DINING EXPERIENCES
        </h2>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Opening Hours */}
          <div>
            <HiOutlineClock className="mx-auto text-4xl mb-4" />
            <h3 className="text-lg font-semibold">OPENING HOURS</h3>
            <p>Monday - Sunday</p>
            <p>9:00 AM to 11:30 PM</p>
          </div>

          {/* Let's Talk */}
          <div>
            <HiOutlinePhone className="mx-auto text-4xl mb-4" />
            <h3 className="text-lg font-semibold">LET'S TALK</h3>
            <p>Phone: 1-800-222-4545</p>
            <p>Fax: 1-800-222-4545</p>
          </div>

          {/* Book a Table */}
          <div>
            <HiOutlineMail className="mx-auto text-4xl mb-4" />
            <h3 className="text-lg font-semibold">BOOK A TABLE</h3>
            <p>Email: demo@website.com</p>
            <p>Support: support@website.com</p>
          </div>

          {/* Our Address */}
          <div>
            <HiOutlineLocationMarker className="mx-auto text-4xl mb-4" />
            <h3 className="text-lg font-semibold">OUR ADDRESS</h3>
            <p>123 Street New York City, United States of America</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-gray-400" />
          <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-400" />
        </div>

        {/* Footer */}
        <footer className="text-center mt-6">
          <p>&copy; 2023 All Rights Reserved</p>
        </footer>
      </div>
    </section>
  );    
}

export default Footer