let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
//minValue = (isNaN(minValue) ? 0 : minValue);

let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
//maxValue = (isNaN(maxValue) ? 0 : maxValue);

let orderNumber = 1;
let gameRun = true;

if (isNaN(minValue) || isNaN(maxValue)) {
    minValue = 0;
    maxValue = 100;
}

// большее число не может быть меньше напчального
if (maxValue < minValue) {
    minValue = 0;
    maxValue = 100;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let minValueReal = minValue;
let answerNumber = Math.floor((minValue + maxValue) / 2);

let textVariants = {
    0: 'Вы загадали неправильное число!\n\u{1F914}',
    1: 'Я сдаюсь..\n\u{1F92F}',
    2: 'Не добро..\n\u{1F92F}',
};

var winVariants = {
    0: `Я всегда угадываю
\u{1F60E}`,
    1: `Вы проиграли. хахахаха`,
    2: `Было просто. я/мы угадал(и)`,
};

function getAnswerVariant(answer) {
    let answerVariants = {
        0: `Ваше число ${answer}?`,
        1: `Это число ${answer}?`,
        2: `Вы загадали число ${answer}?`,
    };

    const phraseRandom = Math.round(Math.random() * 2);

    return answerVariants[phraseRandom];
}

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    if (isNaN(minValue) || isNaN(maxValue)) {
        minValue = 0;
        maxValue = 100;
    }

    if (maxValue < minValue) {
        minValue = 0;
        maxValue = 100;
    }

    orderNumber = 1;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    gameRun = true;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    orderNumberField.innerText = orderNumber;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = textVariants[phraseRandom];

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            answerField.innerText = getAnswerVariant(answerNumber);
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (answerNumber <= minValueReal) {
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = textVariants[phraseRandom];

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            answerNumber = Math.round(Math.random() * answerNumber);

            orderNumber++;
            orderNumberField.innerText = orderNumber;

            answerField.innerText = getAnswerVariant(answerNumber);
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 2);

        answerField.innerText = winVariants[phraseRandom];
        gameRun = false;
    }
})

