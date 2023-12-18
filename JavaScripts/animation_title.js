const titles = document.querySelectorAll(".animationTitle")

const observerTitle = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated");
                entry.target.classList.add("animate__zoomIn");
            }else{
                entry.target.classList.remove("animate__animated");
                entry.target.classList.remove("animate__zoomIn");
            }
        });
    },
    {
        threshold: 0.00000001,
    });

titles.forEach(title => {
    observerTitle.observe(title)
})