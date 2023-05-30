window.onload = function () {
    init();
};

document.querySelector('#generateButton').addEventListener('click', init);
document.querySelector('#resetButton').addEventListener('click', function () {
    document.querySelector('#firstNameOutput').innerText = "Имя";
    document.querySelector('#genderOutput').innerText = "Пол";
    document.querySelector('#surnameOutput').innerText = "Фамилия";
    document.querySelector('#birthDateOutput').innerText = "Дата";
    document.querySelector('#professionOutput').innerText = "профессия";
});

function init() {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#birthDateOutput').innerText = initPerson.birthDate;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
}