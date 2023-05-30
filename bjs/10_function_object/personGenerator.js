const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Врач",
            "id_2": "Учитель",
            "id_3": "Инженер",
            "id_4": "Программист",
            "id_5": "Юрист",
            "id_6": "Бухгалтер",
            "id_7": "Фермер",
            "id_8": "Пожарный",
            "id_9": "Полицейский",
            "id_10": "Строитель"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Врач",
            "id_2": "Воспитательница",
            "id_3": "Дизайнер одежды",
            "id_4": "Косметолог",
            "id_5": "Стилист",
            "id_6": "Программист",
            "id_7": "Парикмахер",
            "id_8": "Уборщица",
            "id_9": "Массажистка",
            "id_10": "Продавец-консультант в магазине женской одежды"
        }
    }`,

    firstFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Гвендолин",
            "id_3": "Иванка",
            "id_4": "Артимисия",
            "id_5": "Ан Пак Эн",
            "id_6": "Элианора",
            "id_7": "Ариэль",
            "id_8": "Даниила",
            "id_9": "Эгора",
            "id_10": "Андрэа"
        }
    }`,

    monthsJson: {
        1: "Января",
        2: "Февраля",
        3: "Марта",
        4: "Апреля",
        5: "Мая",
        6: "Июня",
        7: "Июля",
        8: "Августа",
        9: "Сентебря",
        10: "Октября",
        11: "Ноября",
        12: "Декабря",
    },

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    GENDER_CHOSEN: '',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    getMonthName: function (monthNumber) {
       return this.monthsJson[monthNumber];
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {
        return this.GENDER_CHOSEN === this.GENDER_FEMALE ? this.randomValue(this.firstFemaleJson) : this.randomValue(this.firstNameMaleJson);
    },

    randomBirthDate: function () {
        let year = this.randomYear;
        let month = this.randomIntNumber(12, 1);
        let day = 1;

        if (month === 2) {
            day = this.randomIntNumber(29, 1);
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            day = this.randomIntNumber(30, 1);
        }

        return day + ' ' + this.getMonthName(month) + ' ' + this.randomIntNumber(2005, 1950);
    },

    randomYear: () => this.randomIntNumber(2005, 1950),
    randomMonth: () => this.randomIntNumber(12, 1),

    randomProfession: function () {
        return this.GENDER_CHOSEN === this.GENDER_FEMALE ? this.randomValue(this.professionFemaleJson) : this.randomValue(this.professionMaleJson);
    },

    randomGender: function () {
        this.GENDER_CHOSEN = this.randomIntNumber(2, 1) === 1 ? this.GENDER_FEMALE : this.GENDER_MALE
        return this.GENDER_CHOSEN;
    },

    randomSurname: function () {
        return this.randomValue(this.surnameJson) + (this.GENDER_CHOSEN === this.GENDER_FEMALE ? 'а' : '');
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthDate = this.randomBirthDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
