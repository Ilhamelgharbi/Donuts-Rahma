
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Hamburger Menu - Mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-1.5 sm:gap-2 group">
            <span className="text-xl sm:text-3xl">🍩</span>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-pink-600 text-lg sm:text-2xl tracking-tight">الرحمة</span>
              <span className="text-[10px] sm:text-xs text-amber-900 font-medium">Donuts Rahma</span>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" active={isActive('/')}>الرئيسية</NavLink>
            <NavLink to="/flavors" active={isActive('/flavors')}>النكهات</NavLink>
            <NavLink to="/offers" active={isActive('/offers')}>العروض</NavLink>
            <NavLink to="/contact" active={isActive('/contact')}>اتصل بنا</NavLink>
          </nav>

          {/* Cart Icon */}
          <Link 
            to="/cart" 
            onClick={closeMenu}
            className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
          >
            <ShoppingCart size={24} className="sm:w-[28px] sm:h-[28px]" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-4 gap-4">
          <MobileNavLink to="/" active={isActive('/')} onClick={closeMenu}>الرئيسية</MobileNavLink>
          <MobileNavLink to="/flavors" active={isActive('/flavors')} onClick={closeMenu}>النكهات</MobileNavLink>
          <MobileNavLink to="/offers" active={isActive('/offers')} onClick={closeMenu}>العروض</MobileNavLink>
          <MobileNavLink to="/contact" active={isActive('/contact')} onClick={closeMenu}>اتصل بنا</MobileNavLink>
        </nav>
      </div>
    </header>
  );
};

const NavLink: React.FC<{ to: string, active: boolean, children: React.ReactNode }> = ({ to, active, children }) => (
  <Link 
    to={to} 
    className={`font-semibold text-lg transition-all duration-300 relative py-1
      ${active ? 'text-pink-600' : 'text-gray-600 hover:text-pink-500'}
    `}
  >
    {children}
    {active && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-600 rounded-full" />
    )}
  </Link>
);

const MobileNavLink: React.FC<{ to: string, active: boolean, onClick: () => void, children: React.ReactNode }> = ({ to, active, onClick, children }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`block px-4 py-3 rounded-xl font-bold text-lg transition-colors ${
      active ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-50'
    }`}
  >
    {children}
  </Link>
);

export default Header;
