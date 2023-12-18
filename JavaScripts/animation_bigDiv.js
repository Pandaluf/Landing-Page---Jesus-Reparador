const bigDiv = document.querySelectorAll(".animationBigDiv")

const observerBigDiv = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting > 0.00001) {
                entry.target.classList.add("animate__animated", "animate__fadeInLeft");
            } else {
                entry.target.classList.remove("animate__animated", "animate__fadeInLeft");
            }
        });
    },
    {
        rootMargin: "100px",
        threshold: 0.000000000000000001,
    });

bigDiv.forEach(bigDiv => {
    observerBigDiv.observe(bigDiv)
})