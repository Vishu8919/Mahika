import React, { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const NewArrivals = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const scrollContainerRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsLeftDisabled(scrollLeft === 0);
      setIsRightDisabled(scrollLeft + clientWidth === scrollWidth);
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  // Handle mouse down to start dragging
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevents the image from being selected
    setDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  // Handle mouse move to drag the container
  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 to increase the scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mouseleave', handleMouseUp);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mouseleave', handleMouseUp);
      }
    };
  }, [dragging, startX, scrollLeft]);

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons below the text, aligned to the right */}
        <div className="flex justify-end space-x-2 mb-4">
          <button
            className="p-2 rounded border bg-white text-black"
            onClick={handleScrollLeft}
            disabled={isLeftDisabled}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            className="p-2 rounded border bg-white text-black"
            onClick={handleScrollRight}
            disabled={isRightDisabled}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* New Arrivals Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 py-4 scrollbar-hide cursor-grab"
        >
          {newArrivals.map((product) => (
            <div key={product._id} 
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText}
                className="w-full h-[500px] object-cover  rounded-lg user-select-none" // Prevent image selection
              />
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
