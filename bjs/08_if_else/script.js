let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let minValueReal = minValue;
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (answerNumber <= minValueReal) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            answerNumber = Math.round(Math.random() * answerNumber);

            //  answerNumber = Math.floor(Math.random() * (answerNumber - minValueReal + 1) + minValueReal);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            console.log(answerNumber);
            answerField.innerText = `Вы загадали число а ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

