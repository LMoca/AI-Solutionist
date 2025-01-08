import { useEffect, useRef } from 'react';

const websites = [
  "https://static.wixstatic.com/media/e4a203_2a545f22ca4142d1b3cf04e0ceda79d9~mv2.png",
  "https://static.wixstatic.com/media/e4a203_c0e77d6029bd48d791018d576063bdbf~mv2.png",
  "https://static.wixstatic.com/media/e4a203_662e478746e14e77a6f9cf02ad8164dd~mv2.png",
  "https://static.wixstatic.com/media/e4a203_ca8794669bed4c4ba0939869a8c13646~mv2.png"
];

export default function WebsiteScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion || !scrollRef.current) return;

    const scrollElement = scrollRef.current;
    const cloneItems = () => {
      const items = scrollElement.querySelectorAll('.website-preview');
      items.forEach(item => {
        const clone = item.cloneNode(true) as HTMLElement;
        scrollElement.appendChild(clone);
      });
    };

    cloneItems();
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-48 md:h-64 bg-gray-800 rounded-lg overflow-hidden">
        <img 
          src={websites[0]} 
          alt="Website Preview" 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-gray-800/20 rounded-lg">
      <div
        ref={scrollRef}
        className="flex gap-4 py-4 animate-scroll"
        style={{
          width: 'fit-content',
        }}
      >
        {websites.map((url, index) => (
          <div
            key={index}
            className="website-preview flex-none w-72 h-48 md:h-64 rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={url}
              alt={`Website Preview ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}