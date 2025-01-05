export const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Get the navbar height for offset
    const navbar = document.querySelector('nav');
    const offset = navbar ? navbar.offsetHeight : 0;
    
    // Calculate position accounting for navbar height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};