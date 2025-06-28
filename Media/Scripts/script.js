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

function typeMessage(){
    if(charIndex < textToType[messageIndex].length){
        if (charIndex == 0){
            capital.textContent = "/" + Capitals[messageIndex]
        }else{
            element.textContent += textToType[messageIndex][charIndex-1]
        }
        charIndex++;
        setTimeout(typeMessage, typingInterval)
    } else {
        setTimeout(()=> {
            element.textContent = "";
            capital.textContent = "/";
            charIndex = 0;
            messageIndex = (messageIndex + 1)%textToType.length;
            typeMessage();
        }, pause);
        
    }
}
element.textContent = "";
typeMessage()