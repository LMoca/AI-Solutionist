import { useEffect, useRef } from 'react';

const websites = [
  "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&q=80",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&q=80",
  "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80"
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