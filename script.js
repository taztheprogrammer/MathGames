var num = 1;
var num1 = 1;
var sum = num + num1;
var digits = 10;


function randVal(highest) {
    return Math.floor(Math.random() * (highest+1));
}

const display = document.getElementById('display');
const topA = document.getElementById('top');
const bottomA = document.getElementById('bottom');
const addbox = document.getElementById('addbox');
const points = document.getElementById('points')

//digits control
function updateNum(button) {
digits = button.value;
console.log(button.value)
}



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
        num = randVal(digits);
        num1 =  randVal(digits);
        sum = num + num1;
        topA.innerHTML = num;
        bottomA.innerHTML = num1;
        addbox.value = '';
        addpoints();
    }
}

//this increments points
var score = 0;

function addpoints() {
    score++;
    points.innerHTML=score;
}