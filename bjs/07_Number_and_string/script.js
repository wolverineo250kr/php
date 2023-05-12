let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})


document.querySelectorAll('.number').forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        inputWindow.value = inputWindow.value + e.target.innerText;
    });
});


document.querySelector('#btn_equals').addEventListener('click', function () {
    inputWindow.value = evil(inputWindow.value);
})

function evil(fn) {
    return new Function('return ' + fn)();
}