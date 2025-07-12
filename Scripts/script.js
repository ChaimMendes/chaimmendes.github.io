const textToType = [
    "eveloping ",
    "reating ",
    "haim Mendes "
];
const Capitals = [
    ">",
    "<",
    "<"
]
// Index's
let messageIndex = 0;
let charIndex = 0;

// Constants
const typingInterval = 100;
const pause = 2000;
const element = document.getElementById("dynamic-txt");
const capital = document.getElementById("dynamic-txt-Capital");

function typeMessage() {
    if (charIndex < textToType[messageIndex].length) {
        if (charIndex == 0) {
            capital.textContent = "/" + Capitals[messageIndex]
        } else {
            element.textContent += textToType[messageIndex][charIndex - 1]
        }
        charIndex++;
        setTimeout(typeMessage, typingInterval)
    } else {
        setTimeout(() => {
            element.textContent = "";
            capital.textContent = "/";
            charIndex = 0;
            messageIndex = (messageIndex + 1) % textToType.length;
            typeMessage();
        }, pause);

    }
}
element.textContent = "";
typeMessage()

const popoutFont = document.querySelectorAll(".PositionResponsive");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
}
)
popoutFont.forEach(el =>
    observer.observe(el)
)

const items = document.querySelectorAll(".PortfolioCarrouselItem");
const prevBtn = document.getElementsByClassName('CarrouselPrev')[0];
const nextBtn = document.getElementsByClassName('CarrouselNext')[0];
let currentScroll = 0;
const itemsCount = items.length - 1;
function scrollMyCarrousel(direction) {
    if (currentScroll === -itemsCount && direction === -1) {
        currentScroll = 0;
        console.log("Resetting to 0");
    } else if (currentScroll === 0 && direction === 1) {
        currentScroll = -itemsCount;
        console.log("Resetting to last item");
    } else {
        currentScroll += direction;
        console.log(`Current Scroll: ${currentScroll}`);
    }
    items.forEach((item, index) => {
        item.style.transform = `translateX(${currentScroll * 100}%)`;
    }
    );
}

// prevBtn.addEventListener('click', scrollMyCarrousel(-1));
// nextBtn.addEventListener('click', scrollMyCarrousel(1));
prevBtn.addEventListener('click', () => {
    console.log("Previous button clicked");
    scrollMyCarrousel(1);
});
nextBtn.addEventListener('click', () => {
    console.log("Next button clicked");
    scrollMyCarrousel(-1);
});