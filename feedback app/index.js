var button = document.querySelectorAll(".button li")
var choice = document.getElementById("choice");
var thank = document.querySelector(".thank");


button.forEach((node) => {
    node.addEventListener("click", () => {
        var result =  node.innerText;
        choice.innerHTML = result;
    })
});

thank.addEventListener("click", function(){
    document.querySelector(".container").style.display ="none";
    setInterval(() => {
        location.reload();
    }, 5000);
})
