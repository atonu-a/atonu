document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const animationDuration = 2500; // Total animation duration in milliseconds

  counters.forEach(counter => {
      const updateCounter = () => {
          const target = +counter.getAttribute("data-target");
          const current = +counter.innerText;

          // Calculate increment based on animation duration
          const increment = target / (animationDuration / 20); // 20ms interval

          if (current < target) {
              counter.innerText = Math.ceil(current + increment);
              setTimeout(updateCounter, 20); // 20ms interval
          } else {
              counter.innerText = target; // Ensure final value matches target
          }
      };

      updateCounter();
  });
});
