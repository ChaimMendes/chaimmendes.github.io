// Helper to move images in a carousel
function updateCarousel(carousel, index) {
    const images = carousel.querySelectorAll("img");
    images.forEach((img, i) => {
        img.style.transform = `translateX(calc(${index} * (-105% - 4px)))`;
    });
}

// Store carousel state
const carousels = [];

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".PortfolioPeicesCarrousel").forEach(function (carousel) {
        const images = carousel.querySelectorAll("img");
        if (images.length === 0) return;

        // Each carousel gets its own state
        const state = {
            carousel,
            images,
            index: 0
        };
        carousels.push(state);

        // Initial position
        updateCarousel(carousel, state.index);

        // Next button
        const nextBtn = carousel.querySelector(".CarrouselNext");
        if (nextBtn) {
            nextBtn.addEventListener("click", function () {
                state.index++;
                if (state.index >= images.length) {
                    state.index = 0; // Wrap to start
                }
                updateCarousel(carousel, state.index);
                console.log("NextImage function called: Showing next image.", state.index);
            });
        }

        // Prev button
        const prevBtn = carousel.querySelector(".CarrouselPrev");
        if (prevBtn) {
            prevBtn.addEventListener("click", function () {
                state.index--;
                if (state.index < 0) {
                    state.index = images.length - 1; // Wrap to end
                }
                updateCarousel(carousel, state.index);
                console.log("PrevImage function called: Showing previous image.", state.index);
            });
        }
    });
});


