import { Mail, Phone, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="flex items-center mb-2">
            <Mail className="w-5 h-5 mr-2" /> youth@ntcog.ke
          </p>
          <p className="flex items-center mb-2">
            <Phone className="w-5 h-5 mr-2" /> +254 712 345 678
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Subscribe for updates and event info.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-blue-400" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-pink-400" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="w-6 h-6 hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-300 border-t border-blue-800 pt-6">
        © {new Date().getFullYear()} NTCOG YOUTH Department Kenya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
