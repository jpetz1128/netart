let button = document.getElementById("changeButton");
let title = document.getElementById("title");
let description = document.getElementById("description");

button.addEventListener("click", function() {
    document.body.classList.toggle("night");

    if (document.body.classList.contains("night")) {
        title.textContent = "Good Night!";
        description.textContent = "Enjoy the moonlight.";
        button.textContent = "Switch to Day";
    } else {
        title.textContent = "Good Morning!";
        description.textContent = "Enjoy the sunshine.";
        button.textContent = "Switch to Night";
    }
});
