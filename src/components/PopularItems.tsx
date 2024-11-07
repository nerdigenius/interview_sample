import { useState, useEffect } from 'react';
import burger from '../assets/burger.png';
import pizza from '../assets/pizza.png';
import fries from '../assets/fries.png';
import chicken from '../assets/chicken.png';

const PopularItems = () => {
  const items = [
    {
      image: burger,
      title: "VEGETABLES BURGER",
      description: "Barbecue Italian cuisine pizza"
    },
    {
      image: pizza,
      title: "SPACIAL PIZZA",
      description: "Barbecue Italian cuisine pizza"
    },
    {
      image: fries,
      title: "SPACIAL FRENCH FRIES",
      description: "Barbecue Italian cuisine"
    },
    {
      image: chicken,
      title: "CUISINE CHICKEN",
      description: "Japanese Cuisine Chicken"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Create a circular array for infinite loop
  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % items.length;
      visibleItems.push(items[index]);
    }
    return visibleItems;
  };

  return (
    <section className="py-16 px-[10%]">
      {/* Header */}
      <div className="mb-12">
        <p className="text-red-600 font-roboto mb-2">Crispy, Every Bite Taste</p>
        <h2 className="text-5xl font-bebas-neue">POPULAR FOOD ITEMS</h2>
      </div>

      {/* Items Carousel */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {getVisibleItems().map((item, index) => (
            <div 
              key={index} 
              className="flex-none w-full md:w-1/2 lg:w-1/4 px-4"
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg">
                <img src={item.image} alt={item.title} className="w-48 h-48 object-contain mb-4" />
                <div className="w-12 h-1 bg-red-600 mb-4"></div>
                <h3 className="font-bebas-neue text-2xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end mt-8 gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <span className="text-2xl">&larr;</span>
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <span className="text-2xl">&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default PopularItems; 