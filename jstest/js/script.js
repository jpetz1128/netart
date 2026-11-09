const button = document.querySelector("#myButton");
const message = document.querySelector("#message");

let clicked = false;

function changePage() {
    if (clicked == false) {
        document.body.style.backgroundColor = "lightblue";
        message.innerHTML = "You clicked the button!";
        clicked = true;
    } else {
        document.body.style.backgroundColor = "white";
        message.innerHTML = "Hello World!";
        clicked = false;
    }
}

button.addEventListener("click", changePage);

console.log("JavaScript is working!");
