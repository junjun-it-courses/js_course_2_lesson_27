'use strict'
// https://learn.javascript.ru/constructor-new

// Обычный синтаксис {...} позволяет создать только один объект. Но зачастую нам нужно
// создать множество однотипных объектов, таких как пользователи, элементы меню и т.д.
// Это можно сделать при помощи функции-конструктора и оператора "new".


// Пример как фигачить все вручную - это не удобно!
// let obj = {
//     name: 'vova'
// }
//
// let obj2 = {
//     name: 'vova'
// }
//
// let obj3 = {
//     name: 'vova'
// }
//
// let obj4 = {
//     name: 'vova'
// }
//
//
// let arr = [{name: 'Alex'}, {name: 'Alex'}, {name: 'Alex'}, {name: 'Alex'}, {name: 'Alex'}, {name: 'Alex'}]


// Функции конструкторы

// Требования:
// 1. Имя функции-конструктора должно начинаться с большой буквы.
// 2. Функция-конструктор должна вызываться при помощи оператора "new".

// function UserInTheWorld() {}                        // Пример именования функции конструктора
// let obj = new UserInTheWorld(1, 2, 3);              // Вызов с аругментами
// let obj2 = new UserInTheWorld;                      // Вызов без аругментов


// Examples:

// function User(name) {
//     // this = {};  (неявно)
//
//     this.name = name;
//     this.isAdmin = false;
//
//     // return this;  (неявно)
// }

// let user = new User("Вася");
// let user2 = new User("Vova");
//
// console.log(user); // Вася
// console.log(user2); // Вася
// console.log(user.name); // Вася
// console.log(user.isAdmin); // false

//  Когда функция вызывается как new User(...), происходит следующее:
//  1. Создаётся новый пустой объект, и он присваивается this.
//  2. Выполняется код функции. Обычно он модифицирует this, добавляет туда
//  новые свойства.
//  3. Возвращается значение this.

// С функции конструктора мы получим такой объект
// let user = {
//     name: "Вася",
//     isAdmin: false
// };


// return внутри функции конструктора

// Обычно конструкторы ничего не возвращают явно. Их задача –
// записать все необходимое в this, который в итоге станет результатом.
// Но если return всё же есть, то применяется простое правило:
// 1. При вызове return с объектом, будет возвращён объект, а не this.
// 2. При вызове return с примитивным значением, примитивное значение будет отброшено.

// function BigUser() {
//
//     this.name = "Вася";
//
//     return { name: "Godzilla" };  // <-- возвращает этот объект
// }
//
// console.log( new BigUser().name );  // Godzilla, получили этот объект


// с примитивом

// function BigUser2() {
//
//     this.name = "Вася";
//
//     return 100;
// }
//
// console.log( new BigUser2() );  // получим объект this

// c пустым return
//
// function SmallUser() {
//
//     this.name = "Вася";
//
//     return; // <-- возвращает this
// }

// console.log( new SmallUser().name );  // Вася


// Если вызов конструктора без аргументов то скобки можно опустить;

// let user2 = new SmallUser;
// console.log( user2 ); // Вася


// Создание методов в конструкторе

// function User(name, age) {
//
//     this.name = name;
//     this.age = age
//     this.sayHi = function() {
//         alert( "Меня зовут: " + this.name );
//     };
// }
//
// let vasya = new User("Вася", 100);
// let vova = new User("Vova", 24);
//
// console.log(vasya)
// console.log(vova)
//
// vasya.sayHi();
// vova.sayHi();

/*
vasya = {
   name: "Вася",
   sayHi: function() { ... }
}
*/

