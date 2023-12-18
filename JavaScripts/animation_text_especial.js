const textsEspecial = document.querySelectorAll(".animationTextEspecial")

const observerTextsEspecial = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated");
                entry.target.classList.add("animate__bounceIn");
            }else{
                entry.target.classList.remove("animate__animated");
                entry.target.classList.remove("animate__bounceIn");
            }
        });
    },
    {
        rootMargin: "100px",
        threshold: 0.00000001,
    });

textsEspecial.forEach(textEspecial => {
    observerTextsEspecial.observe(textEspecial)
})