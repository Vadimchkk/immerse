(() => {
    // Menu for mobile/tablets
    const iconMenu = document.querySelector(".menu__icon");
    const menuBody = document.querySelector(".menu__body");

    if (iconMenu && menuBody) {
        iconMenu.addEventListener("click", () => {
            document.body.classList.toggle("_lock");
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
            document.documentElement.classList.toggle("menu-open");
        });
    }
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const inner = card.querySelector('.flip-card-inner');
            inner.classList.toggle('flipped');

            card.classList.add('active');
        });
    });

    // Animation step-by-step
    const icons = document.querySelectorAll('.advantage-icon');
    let index = 0;

    function playSequence() {
        icons[index].classList.add('animate');

        setTimeout(() => {
            icons[index].classList.remove('animate');

            index = (index + 1) % icons.length;
            playSequence();
        }, 2000);
    }
    playSequence();

    // Tracking view 
    const hintCard = document.querySelector('.hint-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // start after 2с
                setTimeout(() => {
                    hintCard.classList.add('animate');

                    // start after 5с
                    setTimeout(() => {
                        hintCard.classList.remove('animate');
                    }, 5000);

                }, 2000);

                observer.unobserve(hintCard);
            }
        });
    }, {
        threshold: 0.5
    });
    observer.observe(hintCard);

})();
