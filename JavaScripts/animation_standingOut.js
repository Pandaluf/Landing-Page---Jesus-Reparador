const standingOuts = document.querySelectorAll(".animationStandingOut")

const observerStandingOut = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated", "animate__rubberBand", "animate__repeat-3");
            } else {
                entry.target.classList.remove("animate__animated", "animate__rubberBand", "animate__repeat-3");
            }
        });
    },
    {
        rootMargin: "100px",
        threshold: 1,
    });

standingOuts.forEach(standingOut => {
    observerStandingOut.observe(standingOut)
})