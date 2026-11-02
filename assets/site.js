(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      }
    }, { threshold: 0.35 });

    document.querySelectorAll("video[loop]").forEach((video) => observer.observe(video));
  }

  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
  });
})();
