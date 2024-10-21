import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, Search, Menu } from 'lucide-react';
import india from '../images/india.png';
import uk from '../images/uk.png';

interface Country {
  name: string;
  flag: string;
}

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: 'India',
    flag: india
  });
  const [clickedCountry, setClickedCountry] = useState<string | null>(null);

  const countries: Country[] = [
    { name: 'India', flag: india },
    { name: 'UK', flag: uk }
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleCountryClick = (country: Country) => {
    setClickedCountry(country.name);
    setTimeout(() => {
      setClickedCountry(null);
      setSelectedCountry(country);
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <img src="/api/placeholder/32/32" alt="AnyFeast Logo" className="h-8 w-8 mr-2" />
            <span className="text-red-600 font-bold text-xl">AnyFeast</span>
          </div>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Recipe</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
          </nav>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-gray-900 hidden sm:block">
              Login
            </button>
            <button className="text-gray-600 hover:text-gray-900 relative p-2">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <div className="relative bg-white border border-[#F1F1F1] px-1 py-2 rounded-md">
              <button 
                onClick={toggleDropdown}
                className="flex items-center text-[#313131] text-bold hover:text-gray-900 justify-between"
              >
                <div className="flex items-center justify-center w-full sm:justify-start">
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-bold hidden sm:inline sm:ml-2">{selectedCountry.name}</span>
                </div>
                <ChevronDown size={16} className="ml-2 hidden sm:inline-block" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-5 w-40 rounded-md shadow-md bg-white ring-1 border border-[#F1F1F1] ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {countries.map((country) => (
                      <button
                        key={country.name}
                        onClick={() => handleCountryClick(country)}
                        className={`flex items-center px-4 py-3 text-sm text-[#101828] w-full text-left
                          ${clickedCountry === country.name ? 'bg-[#FEF5F5]' : ''}
                          active:bg-[#FEF5F5]
                          md:hover:bg-[#FEF5F5] transition-colors duration-150`}
                        role="menuitem"
                      >
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        {country.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button className="md:hidden text-gray-600 hover:text-gray-900 p-2" onClick={toggleMobileMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Recipe</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Shop</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About Us</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Login</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Dropdown;