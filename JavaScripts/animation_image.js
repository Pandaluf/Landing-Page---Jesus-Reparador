const images = document.querySelectorAll(".animationImage")

const observerImage = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated", "animate__fadeInDown");
            } else {
                entry.target.classList.remove("animate__animated", "animate__fadeInDown");
            }
        });
    },
    {
        rootMargin: "100px",
        threshold: 0.000001,
});

images.forEach(image => {
    observerImage.observe(image)
})