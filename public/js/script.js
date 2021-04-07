var choice;
var random;
var exchange;
var time;
var content = document.getElementById("content");
var score = 0;
var game;

document.getElementById("button").addEventListener("click", ()=>{
    var table = document.createElement('div');
    table.setAttribute('id', 'container');
    choice = parseInt(document.getElementById('choice').value);
    console.log(choice);
    content.innerHTML = '';

    for (var i = 1; i <= choice*choice; i++) { // <= choice = choice +1
        console.log(i);
        var cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.setAttribute('data-id', i);
        cell.style.width = 100/choice + '%';
        cell.style.height = 100/choice + '%';
        table.appendChild(cell);
    }
    content.appendChild(table);

    time = setInterval(nextTurn, 1000); // car setTimeOut est pour un istant et setInterval pour une boucle

    display();

    nextTurn();

    //game = setTimeout(display, 30000);
    
});

function display(){
    if (random) {
        exchange.style.backgroundImage = '';
    }
    random = Math.floor(Math.random()* (choice*choice) + 1);
    exchange= document.querySelector('[data-id="'+random+'"]');
    exchange.style.backgroundImage = "url('./public/img/taupe.jpeg')";
    exchange.style.backgroundSize = "100% 100%";
    document.getElementById("points").innerText=score;
}

function nextTurn() {
    score--;
    display();
}

content.addEventListener('click', (el)=>{
    el = el.target;
    if (el.dataset.id == random){
        console.log('+1');
        score++;
    }else {
        console.log('-1');
        score--;
    }  
    clearInterval(time);
    time = setInterval(nextTurn, 1000);
    display();
});