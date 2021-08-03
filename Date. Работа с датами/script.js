"use strict";

// const now = new Date('2021-08-03');
// const now = new Date(2021, 8, 3, 20);
// const now = new Date(-99999999);  // дата до 1970г, который является точкой отсчета.


// Медоды Гетеры  получать компоненты
//===============================
// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());  // показывает в минутах!!! разницу в часовых поясах.
// console.log(now.getTime()); //показывает в милисекундах!!! сколько прошло от 1970г.

// Медоды Cетеры  установить дату
//==========================
// const now = new Date('2021-08-04');
// new Date.parse('2021-08-04');

// console.log(now.setHours(18));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисекунд `);



