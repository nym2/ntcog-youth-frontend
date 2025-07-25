import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full flex justify-center mt-4 z-50 fixed top-0 left-0">
      <nav className="bg-white/10 backdrop-blur-md text-white px-6 py-4 rounded-full shadow-md flex items-center justify-between w-[90%] max-w-6xl border border-white/20">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <Link to="/">NTCOG <span className="text-blue-400">YOUTH.ke</span></Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium relative">
          <li>
            <Link to="/" className="hover:text-blue-400 duration-200">Home</Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center cursor-pointer hover:text-blue-400 duration-200">
              Events <ChevronDown size={16} className="ml-1" />
            </div>
            {dropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-md text-white py-2 w-40">
                <li>
                  <Link to="/events/youth-explosion" className="block px-4 py-2 hover:bg-white/20">Youth Explosion</Link>
                </li>
                <li>
                  <Link to="/events/youth-camp" className="block px-4 py-2 hover:bg-white/20">Youth Camp</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/ministries" className="hover:text-blue-400 duration-200">Ministries</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 duration-200">Contact</Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md text-white rounded-lg shadow-md border border-white/20 mt-20 px-6 py-4 w-[90%] max-w-6xl absolute top-16 z-40">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            <li>
              <Link to="/" className="block hover:text-blue-400" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="hover:text-blue-400">Events</span>
                <ChevronDown size={16} />
              </div>
              {dropdownOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  <li>
                    <Link to="/events/youth-explosion" className="block hover:text-blue-400" onClick={toggleMenu}>Youth Explosion</Link>
                  </li>
                  <li>
                    <Link to="/events/youth-camp" className="block hover:text-blue-400" onClick={toggleMenu}>Youth Camp</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/ministries" className="block hover:text-blue-400" onClick={toggleMenu}>Ministries</Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-blue-400" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
