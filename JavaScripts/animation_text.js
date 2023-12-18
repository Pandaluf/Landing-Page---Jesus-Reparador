const texts = document.querySelectorAll(".animationText")

const observerText = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated");
                entry.target.classList.add("animate__fadeInLeft");
            }else{
                entry.target.classList.remove("animate__animated");
                entry.target.classList.remove("animate__fadeInLeft");
            }
        });
    },
    {
        threshold: 0.00000001,
    });

texts.forEach(text => {
    observerText.observe(text)
})