var num = 1;
var num1 = 1;
var sum = num + num1;


function randVal(highest) {
    return Math.floor(Math.random() * (highest+1));
}

const display = document.getElementById('display');
const topA = document.getElementById('top');
const bottomA = document.getElementById('bottom');
const addbox = document.getElementById('addbox');

topA.innerHTML = num;
bottomA.innerHTML = num1;


addbox.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        reset();
    }
})

light.addEventListener('click', color);

function color() {
    const body = document.getElementById('body')
    if(body.style.backgroundColor == 'gray') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'gray';
    }
}

function reset() {
    if (addbox.value == sum) {
        num = randVal(100);
        num1 =  randVal(100);
        sum = num + num1;
        topA.innerHTML = num;
        bottomA.innerHTML = num1;
        addbox.value = '';
    }
}



