const container = document.getElementById("container")

container.innerHTML = "<button onclick= 'buy()'>BUy!</button>"

function buy(){
    container.innerHTML += "<p> Thank you for buying"
}