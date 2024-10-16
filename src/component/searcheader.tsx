import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, User, X, Mic } from 'lucide-react';
import im1 from '../images/Avatar.png';

interface SearchOption {
  id: number;
  name: string;
  image: string;
  category: 'shop' | 'recipeKit';
}

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<SearchOption[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<'shop' | 'recipeKit'>('shop');
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [searchBarWidth, setSearchBarWidth] = useState<number>(0);

  const searchOptions: SearchOption[] = [
    { id: 1, name: 'Taco Salad Recipe Kit', image: im1, category: 'recipeKit' },
    { id: 2, name: 'Taco Pizza', image: im1, category: 'shop' },
    { id: 3, name: 'Taco Soup', image:im1, category: 'shop' },
    { id: 4, name: 'Italian Pizza', image: im1, category: 'shop' },
    { id: 5, name: 'Taco Seasoning Kit', image: im1, category: 'recipeKit' },
    { id: 6, name: 'Vada Pav Kit', image: im1, category: 'recipeKit' },
    { id: 5, name: 'Vada Pav', image: im1, category: 'shop' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      updateSearchBarWidth();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const filtered = searchOptions.filter(option =>
      option.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredOptions(filtered);
  }, [searchQuery]);

  useEffect(() => {
    updateSearchBarWidth();
  }, [isSearchOpen, isMobile, isTablet]);

  const updateSearchBarWidth = () => {
    if (searchBarRef.current) {
      setSearchBarWidth(searchBarRef.current.offsetWidth);
    }
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleMicClick = () => {
    console.log('Microphone clicked');
  };

  const renderSearchBar = () => (
    <div 
      ref={searchBarRef}
      className={`flex items-center bg-[#FCFBFB] border rounded-lg p-2 ${
        isMobile ? 'w-full' : isTablet ? 'w-48' : 'w-64'
      }`}
    >
      <Search size={18} className="text-[#667085] mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent focus:outline-none w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        autoFocus
      />
      <button onClick={closeSearch} className="ml-2">
        <X size={18} className="text-[#667085]" />
      </button>
    </div>
  );

  const renderMobileSearch = () => (
    <div className="flex items-center space-x-2 w-full">
      {renderSearchBar()}
      <button onClick={handleMicClick} className="p-2 bg-[#FAF8F899] rounded-full flex-shrink-0">
        <Mic size={20} className="text-[#000000]" />
      </button>
    </div>
  );

  const renderCategoryTabs = () => {
    const shopCount = filteredOptions.filter(option => option.category === 'shop').length;
    const recipeKitCount = filteredOptions.filter(option => option.category === 'recipeKit').length;

    return (
      <div className="flex space-x-4 mb-2 border-b border-[#EAECF0] shadow-sm">
        <button
          className={`flex items-center text-xs space-x-2 pb-2 ml-1 ${
            activeCategory === 'shop' 
              ? 'border-b-2 border-[#3F9BFC] text-[#3F9BFC]' 
              : 'text-[#667085]'
          }`}
          onClick={() => setActiveCategory('shop')}
        >
          <span>Shop</span>
          <span className="bg-[#F4F8FB] text-[#3F9BFC] rounded-sm px-1.5 py-0.5 text-[10px]">{shopCount}</span>
        </button>
        <button
          className={`flex items-center text-xs space-x-2 pb-2 ${
            activeCategory === 'recipeKit' 
              ? 'border-b-2 border-[#3F9BFC] text-[#3F9BFC]' 
              : 'text-[#667085]'
          }`}
          onClick={() => setActiveCategory('recipeKit')}
        >
          <span>Recipe Kit</span>
          <span className="bg-[#F4F8FB] text-[#3F9BFC] rounded-sm px-1.5 py-0.5 text-[10px]">{recipeKitCount}</span>
        </button>
      </div>
    );
  };

  const renderSearchResults = () => {
    const displayedOptions = filteredOptions.filter(option => option.category === activeCategory);

    return (
      <div 
        className="bg-white rounded-b-lg shadow-md overflow-hidden absolute left-0 right-0 mt-1"
        style={{ width: `${searchBarWidth}px` }}
      >
        {renderCategoryTabs()}
        <ul className="divide-y divide-[#EAECF0] ">
          {displayedOptions.map((option) => (
            <li 
              key={option.id} 
              className={`flex items-center px-4 py-2 cursor-pointer transition-colors duration-200 ${
                isMobile || isTablet ? 'hover:bg-[#FEF5F5]' : 'hover:bg-[#FEF5F5]'
              }`}
            >
              <img src={option.image} alt={option.name} className="w-12 h-12 mr-3 rounded-full" />
              <span className="text-sm flex-grow">{option.name}</span>
            </li>
          ))}
          {displayedOptions.length === 0 && (
            <li className="px-4 py-2 text-sm text-gray-500">No results found</li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <img src="/api/placeholder/40/40" alt="AnyFeast Logo" className="w-10 h-10" />
              <h1 className="text-xl font-bold text-red-500">AnyFeast</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Shop</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Recipe</a>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            {!isMobile && (
              <div className="relative">
                {!isSearchOpen ? (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2 bg-[#FAF8F899] rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Search size={20} className="text-[#000000]" />
                  </button>
                ) : (
                  <div className="relative">
                    {renderSearchBar()}
                    {searchQuery && renderSearchResults()}
                  </div>
                )}
              </div>
            )}

            <a href="#" className="text-gray-600 hover:text-gray-900">
              <User size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </a>
          </div>
        </div>
        {isMobile && (
          <div className="mt-2 relative">
            {renderMobileSearch()}
            {searchQuery && renderSearchResults()}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;