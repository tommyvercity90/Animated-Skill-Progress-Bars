
// Select all progress bars
const progressBars = document.querySelectorAll(".progress-bar");

// Select the skills section
const skillsSection = document.querySelector("#skills");

// Observe when the section enters the screen
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                // Animate each progress bar
                progressBars.forEach((bar, index) => {
                    const targetProgress = bar.dataset.progress;

                    // Add a small delay between bars
                    setTimeout(() => {
                        bar.style.width = targetProgress + "%";
                    }, index * 200);
                });

                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.3
    }
);

// Start observing the skills section
observer.observe(skillsSection);
