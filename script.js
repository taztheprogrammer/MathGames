var num = randVal(100);
var num1 =  randVal(100);
var sum = num + num1


function randVal(highest) {
    return Math.floor(Math.random() * (highest+1));
}

const display = document.getElementById('display');
const answer = document.getElementById('answer');
const addbox = document.getElementById('addbox');

display.innerHTML = `${num} + ${num1}`;
answer.innerHTML = `${sum}`;

addbox.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        reset();
    }
})


function reset() {
    if (addbox.value == sum) {
        num = randVal(100);
        num1 =  randVal(100);
        sum = num + num1;
    
        display.innerHTML = `${num} + ${num1}`;
        answer.innerHTML = `${sum}`;
        addbox.value = '';
    }
}



