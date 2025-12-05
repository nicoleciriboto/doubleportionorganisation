import { Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-[#6D00C0] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Double Portion Logo" className="w-12 h-12 object-contain" />
            <span className="text-white">
              Double Portion Organization
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61578557016159"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4FF05] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://wa.me/263782964717"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4FF05] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F4FF05] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-200">
            <p>© 2025 Double Portion Organization. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}