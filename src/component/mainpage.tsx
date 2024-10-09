import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Pagination from './pagination';
import im1 from '../images/im1.png';
import im2 from '../images/im2.png';
import im3 from '../images/im3.png';
import im4 from '../images/im4.png';
import im5 from '../images/im6.png';
import im6 from '../images/im7.png';
import im7 from '../images/im8.png';
import im8 from '../images/im5.png';
import fruits from '../images/fruits.png';
import veggies from '../images/veggies.png';
import dairy from '../images/milk.png';
import meat from '../images/meat.png';
import df from '../images/dryfruits.png';
import oils from '../images/oils.png';
import cf from '../images/coffee.png';
import d1 from '../images/d1.png';
import d2 from '../images/d2.png';
import d3 from '../images/d3.png';



const cuisines = ['Indian', 'Italian', 'Thai', 'Japanese', 'Arab', 'Chinese', 'Greek', 'Spanish', 'Mexican', 'Turkish', 'French','Malaysian',"Russian","Fijian cuisine",'Marshallese cuisine','Nauruan cuisine','Polynesian cuisine',' Hawaiian cuisine','Dutch cuisine'] as const;
type Cuisine = typeof cuisines[number];

const categoriesData = [
  { 
    name: 'Fruits', 
    image: fruits,
    subcategories: [
      { name: 'Apples', image: im1 },
      { name: 'Bananas', image: im2 },
      { name: 'Oranges', image: im3 },
      { name: 'Berries', image: im4 },
    ]
  },
  { 
    name: 'Vegetables', 
    image:veggies,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
  { 
    name: 'Dairy', 
    image: dairy,
    subcategories: [
      { name: 'Cheese', image: d1},
      { name: 'Butter', image: d2 },
      { name: 'Yogurt', image: d3},
    
    ]
  },
  { 
    name: 'Meat', 
    image:meat,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
  { 
    name: 'Dry Fruits', 
    image:df,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
  { 
    name: 'Cooking Fats', 
    image:oils,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
  { 
    name: 'Coffee', 
    image:cf,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
  { 
    name: 'Fruits', 
    image: fruits,
    subcategories: [
      { name: 'Apples', image: im1 },
      { name: 'Bananas', image: im2 },
      { name: 'Oranges', image: im3 },
      { name: 'Berries', image: im4 },
    ]
  },
  { 
    name: 'Vegetables', 
    image:veggies,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
  { 
    name: 'Dairy', 
    image: dairy,
    subcategories: [
      { name: 'Cheese', image: d1},
      { name: 'Butter', image: d2 },
      { name: 'Yogurt', image: d3},
    
    ]
  },
  { 
    name: 'Meat', 
    image:meat,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
  { 
    name: 'Dry Fruits', 
    image:df,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
  { 
    name: 'Cooking Fats', 
    image:oils,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
  { 
    name: 'Coffee', 
    image:cf,
    subcategories: [
      { name: 'Leafy Greens', image: im6},
      { name: 'greens', image: im8 },
      { name: 'Squashes', image: im4},
      { name: 'Peppers', image: im4 },
    ]
  },
] as const;

type Category = typeof categoriesData[number]['name'];


type Product = {
  name: string;
  weight: string;
  free: string;
  price: number;
  originalPrice: number;
  discount?: number;
  image: string;
}
const products: Product[] = [
  { name: 'B Natural Mixed Fruit Juice', weight: '', free: '(Buy one get one FREE)', price: 100, originalPrice: 180, discount: 40, image: im1 },
  { name: 'Hari Fresh White Protein Rich Eggs', weight: '10 pcs', free: '', price: 110, originalPrice: 120, discount: 40, image: im2 },
  { name: 'Go Cheese Slices', weight: '200 g', free: '', price: 140, originalPrice: 160, image: im7 },
  { name: 'Fresh Asparagus', weight: '200 g', free: '', price: 151, originalPrice: 168, image: im8 },
  { name: 'Fresh Cabbage', weight: '1 pc', free: '', price: 100, originalPrice: 110, image: im5 },
  { name: 'Fresh Broccoli', weight: '1 pc', free: '', price: 110, originalPrice: 120, image: im6 },
  { name: 'Fresh Radish', weight: '200 g', free: '', price: 140, originalPrice: 160, image: im7 },
  { name: 'Fresh Yellow Squash', weight: '500 g', free: '', price: 151, originalPrice: 168, image: im8 },
  { name: 'Fresh Spinach', weight: '', free: '(Buy one get one FREE)', price: 90, originalPrice: 100, image: im1 },
  { name: 'Fresh Basil', weight: '1 pc', free: '', price: 120, originalPrice: 140, image: im2 },
  { name: 'Fresh Beets', weight: '500 g', free: '', price: 80, originalPrice: 90, image: im3 },
  { name: 'Fresh Basil', weight: '100 g', free: '', price: 60, originalPrice: 70, image: im4 },
  { name: 'Fresh Carrot', weight: '', free: '(Buy one get one FREE)', price: 90, originalPrice: 100, discount: 20, image: im5 },
  { name: 'Fresh Pumpkin', weight: '1 pc', free: '', price: 110, originalPrice: 130, discount: 10, image: im6 },
  { name: 'Fresh Peas', weight: '500 g', free: '', price: 140, originalPrice: 160, image: im7 },
  { name: 'Fresh Zucchini', weight: '500 g', free: '', price: 130, originalPrice: 150, image: im8 },
  { name: 'Fresh Bell Pepper', weight: '1 pc', free: '', price: 80, originalPrice: 100, image: im1 },
  { name: 'Fresh Onion', weight: '1kg', free: '', price: 50, originalPrice: 60, image: im2 },
  { name: 'Fresh Garlic', weight: '200 g', free: '', price: 30, originalPrice: 40, image: im3 },
  { name: 'Fresh Ginger', weight: '200 g', free: '', price: 40, originalPrice: 50, image: im4 }
];


export default function IngredientShop() {
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine>('Italian');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Vegetables');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [quantity, setQuantity] = useState<{ [key: string]: number }>({});

  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 32;

  const cuisineSliderRef = useRef<HTMLDivElement>(null);
  const categorySliderRef = useRef<HTMLDivElement>(null);
  const productGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    setSelectedSubcategory('');
  }, [selectedCategory]);

  const getSubcategories = () => {
    const categoryData = categoriesData.find(cat => cat.name === selectedCategory);
    return categoryData ? categoryData.subcategories : [];
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
          ? ref.current.scrollLeft - scrollAmount 
          : ref.current.scrollLeft + scrollAmount;
      ref.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };
  const handleQuantityChange = (productName: string, change: number) => {
    setQuantity(prev => ({
      ...prev,
      [productName]: Math.max(0, (prev[productName] || 0) + change)
    }));
  };

  return (
    <div>
    <header className="bg-green-600">
    <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-4">
      <h1 className="text-3xl font-bold text-white">Cuisine Shop</h1>
    </div>
  </header>
  
    <div className={`flex flex-col ${isSmallScreen ? 'h-screen' : ''} w-screen mt-0 bg-[#F9F9F9] overflow-hidden`}>
    
      <div className={`flex-grow p-4 sm:p-6 lg:p-8 ${isSmallScreen ? 'overflow-hidden' : 'overflow-auto'}`}>
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-black">Shop Unique Ingredients</h2>
        </div>

        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-lg sm:text-xl font-medium text-black">Categories</h2>
          <div className="flex items-center text-red-500 cursor-pointer">
            <span className="mr-1 underline decoration-red-500" style={{ textUnderlineOffset: '3px' }}>
              View All
            </span>
            <ChevronRight size={20} />
          </div>
        </div>

        {/* Cuisines section */}
        <div className={`mb-4 relative bg-white rounded-lg ${isSmallScreen ? 'py-1' : 'py-3'} ${isSmallScreen ? 'w-full' : ''} ${isSmallScreen ? 'sticky top-0 z-10' : ''}`}> {/* Reduced py-2 for small screens */}
  <div 
    ref={cuisineSliderRef}
    className={`flex overflow-x-auto pb-2 px-4 ${isSmallScreen ? 'space-x-1' : 'space-x-2'} bg-white scrollbar-hide`} >
    {cuisines.map((cuisine) => (
      <button
        key={cuisine}
        className={`px-3 py-1 ${isSmallScreen ? 'text-xs' : 'text-sm'} mx-1 rounded-full whitespace-nowrap transition-all ${
          selectedCuisine === cuisine 
            ? 'bg-[#FFC4C4] text-[#C30F16] shadow-[#FFC4C4] shadow-md' 
            : 'bg-white text-[#313131]'
        }`}
        onClick={() => setSelectedCuisine(cuisine)}
      >
        {cuisine}
      </button>
    ))}
  </div>
  {!isSmallScreen && (
    <>
      <button 
        onClick={() => scroll(cuisineSliderRef, 'left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={() => scroll(cuisineSliderRef, 'right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
      >
        <ChevronRight size={20} />
      </button>
    </>
  )}
</div>


        {/* Categories section */}
  
<div className={`mb-4 relative bg-white rounded-lg ${isSmallScreen ? 'py-1' : 'py-1 md:py-2'} ${isSmallScreen ? 'w-full sticky top-20 z-10' : ''}`}>
  <div 
    ref={categorySliderRef}
    className="flex overflow-x-auto px-2 scrollbar-hide" 
  >
    <div className={`flex ${isSmallScreen ? 'space-x-1 p-2' : 'space-x-4 p-4'} bg-white rounded-lg ${isSmallScreen ? 'h-24' : 'h-30 md:h-34'}`}> {/* Reduced height for larger screens */}
      {categoriesData.map((category) => (
        <button
          key={category.name}
          className={`flex flex-col items-center ${isSmallScreen ? 'p-1' : 'p-2'} rounded-lg transition-all ${
            selectedCategory === category.name 
              ? 'border-2 border-[#DF6A42] shadow-[[#C30F16]] shadow-md' 
              : 'border-2 border-transparent hover:border-[#DF6A42]'
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          <div className={`${isSmallScreen ? 'w-10 h-10' : 'w-20 h-20'} bg-gray-200 rounded-lg mb-2 flex items-center justify-center overflow-hidden`}> {/* Adjusted size for small screens */}
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-xs text-center">{category.name}</span>
        </button>
      ))}
    </div>
  </div>
  {!isSmallScreen && (
    <>
      <button 
        onClick={() => scroll(categorySliderRef, 'left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={() => scroll(categorySliderRef, 'right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
      >
        <ChevronRight size={20} />
      </button>
    </>
  )}
</div>

{/* Main content area */}

<div className={`flex flex-row gap-3 ${isSmallScreen ? '' : 'overflow-y-auto'}`} style={{ height: isSmallScreen ? 'calc(100vh - 250px)' : 'auto' }}>
  
  {/* Subcategories sidebar */}
  <div className={`${isSmallScreen ? 'w-1/6' : 'w-1/5 lg:w-1/6'} ${isSmallScreen ? 'sticky top-44 self-start' : ''}`}>
  <div 
    className="bg-white py-3 p-2 rounded-lg shadow-md overflow-y-auto"
    style={{
      height: isSmallScreen ? '650px' : productGridRef.current ? `${productGridRef.current.clientHeight}px` : 'auto',
      maxHeight: isSmallScreen ? '400px' : 'calc(100vh - 250px)'  
    }}
  >
    <div className={`flex flex-col gap-y-5 space-y-2 ${isSmallScreen ? 'bg-white' : 'bg-white w-2/5 mx-auto'}`}>
      {categoriesData.find(cat => cat.name === selectedCategory)?.subcategories.map((subCategory) => (
        <button 
          key={subCategory.name} 
          className={`flex flex-col items-center p-10 transition-all rounded-lg text-sm ${
            selectedSubcategory === subCategory.name 
              ? 'border-2 border-red-500 shadow-md' 
              : 'border-2 border-transparent hover:border-red-500'
          }`}
          style={{
            margin: '0',
            padding: '2px',
            borderRadius: '2px',
          }}
          onClick={() => setSelectedSubcategory(subCategory.name)}
        >
          <div className={`${isSmallScreen ? 'w-18 h-18' : 'w-30 h-30'} bg-gray-200 rounded-lg mb-2 overflow-hidden`}>
            <img src={subCategory.image} alt={subCategory.name} className="w-full h-full object-contain" />
          </div>
          <span className="text-xs text-center">{subCategory.name}</span>
        </button>
      ))}
    </div>
  </div>
</div>

  {/* Products grid */}
  <div ref={productGridRef} className={`${isSmallScreen ? 'w-5/6' : 'w-4/5 lg:w-5/6'}`}>
  <div className={`grid ${isSmallScreen ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-4 rounded-lg bg-white px-2 py-2 overflow-y-auto`} style={{ height: isSmallScreen ? 'calc(100vh - 250px)' : 'auto', maxHeight: isSmallScreen ? 'calc(100vh - 250px)' : 'none' }}>
    {products.map((product, index) => (
      <div key={index} className={`relative bg-white rounded-lg border cursor-pointer transition-all ${selectedProduct === product.name ? 'border-2 border-red-500 shadow-md' : 'border-2 border-gray-300 hover:border-red-500'}`} onClick={() => setSelectedProduct(product.name)}>
        {product.discount && (
          <div className={`absolute top-0 right-0 bg-[#54B22C] py-1 px-3 rounded-tr-l rounded-bl-2xl flex items-center justify-center ${isSmallScreen ? 'text-xs' : 'text-sm'}`}>
            <span className="font-semibold text-center text-[#FFFFFF]">{product.discount}% <br /> OFF</span>
          </div>
        )}
        
        <div className="w-full aspect-square bg-[#F3F9FB] rounded-lg mb-3 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover p-8" />
        </div>

        <div>
          <h4 className="font-medium text-sm mb-1 mx-3 text-[#000000]">{product.name}</h4>
          {product.weight && <p className="text-xs text-[#222222] mx-3 mb-1">{product.weight}</p>}
          {product.free && <p className="text-sm mx-3 text-[#54B22C] mb-1">{product.free}</p>}
          <div className="border-t border-gray-300 mx-3 my-1"></div>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-sm ml-3 text-[#3BB77E]">₹{product.price}</span>
              {product.originalPrice && <span className="text-[#606060] line-through text-xs ml-1 mb-2">₹{product.originalPrice}</span>}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="border border-[#0B6E27]  text-[#0B6E27] mx-9 py-1 my-2 rounded text-sm w-full max-w-xs md:max-w-md lg:max-w-lg">Add</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

</div>

      </div>
      {!isSmallScreen && (
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
    </div>
  );
}