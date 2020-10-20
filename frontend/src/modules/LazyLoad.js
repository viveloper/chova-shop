export const imageLazyLoad = (imgEl) => {
  const options = { threshold: 0.1 };
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.remove('lazy');
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  }, options);
  io.observe(imgEl);
};