// https://learn.javascript.ru/function-prototype

// Мы знаем что новые объекты могут быть созданы с использованием
// функции-конструктора new Function().

// Function.prototype - это обычное свойство объекта функции

// function getVova() {};
// console.log(getVova.prototype)


// Example
//
// let animal = {              // Создаем объект
//     getVoice() {
//         console.log(this.name);
//     }
// };
//
// function Rabbit(name) {     // и функцию конструктор
//     this.name = name;
//     // this.talk = function () {
//     //     console.log(this.name);
//     // }
// }
//
// Rabbit.prototype = animal; // в качестве прототипа устанавливаем наш объект
//
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
// let rabbit2 = new Rabbit("Black Rabbit"); //  rabbit.__proto__ == animal
// let rabbit3 = new Rabbit("Yellow Rabbit"); //  rabbit.__proto__ == animal
//
// // rabbit.talk()
// // rabbit2.talk()
// // rabbit3.talk()
//
// rabbit.getVoice()
// rabbit2.getVoice()
// rabbit3.getVoice()
//
// console.log( rabbit );
// console.log( rabbit2 );
// console.log( rabbit3 );
// console.log( rabbit.eats ); // true


// Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:
// "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]"



// F.prototype по умолчанию, свойство constructor

// У каждой функции по умолчанию уже есть свойство "prototype".
// По умолчанию "prototype" – объект с единственным свойством constructor,
// которое ссылается на функцию-конструктор.

// function Rabbit(name) {
//     this.name = name;
// } // Rabbit.prototype = { constructor: Rabbit };
//
// let rabbit = new Rabbit('vova');
//
// console.log(rabbit.__proto__.constructor);


// Мы можем использовать свойство constructor существующего объекта
// для создания нового.

// function Rabbit(name) {
//     this.name = name;
//     alert(name);
// }
//
// let rabbit = new Rabbit("White Rabbit");

// Так как конструктор ссылается на саму функцию конструктор Rabbit то мы можем
// через его instance добраться до коструктора и использовать его


// Частый случай если вы подключили какую-то библиотеку и хотите расширить ее функционал
// не изменяя код самой библиотеки

// let rabbit2 = new rabbit.constructor("Black Rabbit");


// Теперь по поводу constructor подробнее

// function User(name) {
//     this.name = name;
// }
//
// console.log(User.prototype);

// Так лучше не делать чтобы не потерять свойство constructor которое может удалится
// при переприсваивании .prototype другого объекта

// User.prototype = {
//     getName() {
//         return this.name
//     }
// }
//
// console.log(User.prototype);

// Так делать норм

// User.prototype.getName = function () {
//     return this.name;
// }

// console.log(User.prototype);


// let user_andrew = new User('Andrew');
// console.log(user_andrew.getName());
// console.log(User.prototype);