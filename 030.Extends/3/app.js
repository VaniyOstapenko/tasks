// Реализуйте класс Singer, который будет наследоватьсяот 
// класса Worker. Класс Worker состоит из: свойства name, 
// свойства surname, метода getFullName(), с помощью которого 
// можно вывести одновременно имя и фамилию; Класс Singer 
// состоит из свойств years, birth, style и методаgetMoreInfo(), 
// который выводит информацию о певце: name, surname, years, 
// birth, style. Необходимо вызвать методыgetFullName, 
// getMoreInfoчерез класс Singer

class Worker {
    name;
    surname;
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
}

class Singer extends Worker {
    years;
    birthday;
    style;
    getMoreInfo() {
        return `${this.name} ${this.years} ${this.birthday} ${this.style}`;
    }
    setYears(years) {
        this.years = years;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    setStyle(style) {
        this.style = style;
    }
}

const singer = new Singer();
singer.setName('Vaniy');
singer.setSurname('Ostapenko');
singer.setYears('28 age');
singer.setBirthday('29 December 1994');
singer.setStyle('classic');
console.log(singer.getFullName());
console.log(singer.getMoreInfo());