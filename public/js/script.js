var choice;
var random;
var exchange;
var time;

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
    document.getElementById("content").appendChild(table);

    display();
    
})

function display(){
    random = Math.floor(Math.random()* (choice*choice) + 1);
    console.log(random);
    exchange= document.querySelector('[data-id="'+random+'"]');
    exchange.style.backgroundImage = "url('./public/img/taupe.jpeg')";
    exchange.style.backgroundSize = "100% 100%";
    time = setTimeout(modify, 3000)
}

function modify() {
    exchange.style.backgroundImage = 'none';
    display();
}

content.addEventListener('click', (el)=>{
    el = el.target;
    if(el.dataset.id == random){
        console.log('+1')
        exchange.style.backgroundImage = 'none';
        display();
    }else {
        console.log('-1')
    }
    console.log(random);

})