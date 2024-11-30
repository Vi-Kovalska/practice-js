'use strict';
// Синхронний код виконується послідовно, кожна інструкція очікує, доки виконається попередня. Коли ти викликаєш функцію, яка виконує тривалу дію, це зупиняє програму на увесь час її виконання. Тобто в моделі синхронного програмування все відбувається по черзі.
// В асинхронному коді одночасно можуть виконуватися декілька операцій. У такій моделі мережевий запит на сервер не зупинить програму, вона продовжить виконувати інші операції. Коли запит завершиться, програма повідомляє про це й отримує доступ до результату (наприклад, даних із сервера).
// За одиницю часу, як і раніше, може виконуватися тільки одна операція, тому що JavaScript — однопотокова мова. Асинхронне програмування досягається шляхом відкладених викликів функцій, де ініціалізація асинхронної операції і обробка її результату — це різні дії.

// ........................asynchronous(асинхронний) JavaScript
//             - функція setTimeout()
// приймає два параметри:
// 1)callback-функцію, яка буде викликана після закінчення часу;
// 2)час, після якого буде викликана функція.
// Функція setTimeout() відпрацьовує синхронно й реєструє відкладений виклик переданої callback-функції. Ця функція буде викликана асинхронно, через вказаний проміжок часу.
//  Функція setTimeout планує в асинхронній черзі відкладений виклик функції, який виконується після зазначеного інтервалу часу. Вона не викликає функцію безпосередньо, а лише планує її виконання через певний час.

//                   Тайм-аут
// Внутрішній таймер-планувальник браузера дозволяє відкладати виклик функції на певний період часу. Для цього є тайм-аути та інтервали, вони контролюють, коли і як часто викликається функція. Таймери реалізовані в браузері, а не вбудовані в мову, і доступні на глобальному об'єкті window.
// Метод setTimeout() дозволяє запланувати одноразовий виклик функції через певний час.
// Метод setTimeout() дозволяє запланувати одноразовий виклик функції через певний час.
// Результатом виклику setTimout() буде цифровий ідентифікатор створеного таймера, який потім може бути використаним для його подальшого скасування.

//                     Скасування тайм-ауту
// метод clearTimeout(id) - скасовує відкладений виклик функції, зареєстрованої тайм-аутом.
// Метод clearTimeout(id)приймає ідентифікатор таймера та “очищає його”, тобто видаляє реєстрацію відкладеного виклику функції з черги.
// const greet = () => {
//   console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// ex
const setBtn = document.querySelector('.js-set');
const clearBtn = document.querySelector('.js-clear');

let timeoutId;

// через 2с в консоль мало б вивестись повідомлення "I love async JS!"
setBtn.addEventListener('click', handleAsync);
function handleAsync(event) {
  timeoutId = setTimeout(() => {
    console.log('I love async JS!');
  }, 2000);
}

// але ми скасували заплановане виконання ф-ції
clearBtn.addEventListener('click', handleClearAsync);
function handleClearAsync(event) {
  clearTimeout(timeoutId);
  console.log(`Timeout with id ${timeoutId} has stopped!`);
}
console.log('modul 10');

// Якщо потрібно очищати всі таймери, можна, наприклад, зберігати ідентифікатори всіх запущених таймерів у вигляді масиву, перебирати його та послідовно очищати.

//                  Інтервал
// Метод setInterval() — це простий спосіб повторення коду знову і знову з певним інтервалом.
// const intervalId = setInterval(callback, delay, arg1, arg2, ...);
// Результатом виклику setInterval() буде цифровий ідентифікатор створеного таймера, який потім може бути використаним для його подальшого скасування.

// !!!!!На відміну від setTimeout(), інтервал запускає виконання функції не один раз, а регулярно повторює її через вказаний проміжок часу.
// Таймер може спрацьовувати рідше, ніж зазначено в параметрі delay. Адже через занадто велике завантаження процесора деякі запуски функцій-інтервалів будуть пропущені. Браузери продовжують виконувати тайм-аути та інтервали, навіть якщо вкладка браузера неактивна, але водночас знижується частота спрацьовування таймерів.

// Скільки разів буде викликана функція foo для setInterval(foo, 2000)?
// -Кожні 2 секунди

//                 Скасування інтервалу
// метод clearInterval.
// clearInterval(id)
//  приймає ідентифікатор інтервалу та очищає його, тобто видаляє виклики, зареєстровані переданим інтервалом з асинхронної черги.
// Якщо потрібно очистити всі інтервали, можна, наприклад, зберігати ідентифікатори всіх запущених інтервалів у вигляді масиву, перебирати його та послідовно очищати.

//                                              Дата і час
// Вбудований клас Date дозволяє відображати моменти у часі як об'єкти і маніпулювати ними за допомогою заздалегідь визначених методів. Використовуючи можливості класу Date, можна створювати годинник, лічильники, календарі та інші інтерактивні елементи інтерфейсу.
// Екземпляр класу Date — це об'єкт, що відображає певний момент часу. Створення дати без аргументів повертає об'єкт, що зберігає дату і час на момент його ініціалізації, тобто поточні дату і час.
// const date = new Date();
// console.log(date);
// У рядковому перетворенні об'єкт повертає результат виклику вбудованого методу toString(), тому у першому лозі ми отримаємо рядок, а не об'єкт.

// до класу Date передають рядок, який описує тільки дату.
// const date = new Date("2030-03-16");
// console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"

// до Date передали рядок, де дата і час розділяються великою літерою T (time).
// const date = new Date("2030-03-16T14:25:00");
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"
// Можна передати тільки рік, рік і місяць, або повну дату, включно з числом і часом.
// console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Інший спосіб створення нової дати — це передати сім чисел, які описують рік, місяць (починається з 0), день, години, хвилини, секунди й мілісекунди. Обов'язкові тільки перші три.
// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "
//                                             Unix час
// Unix час - для комп’ютерів відлік часу рахується в мілісекундах, що минули після опівночі 1 січня 1970 року в часовому поясі UTC (Coordinated Universal Time).

// Під час ініціалізації дати одним числом, воно являє собою кількість мілісекунд, що вже минула з 01.01.1970.
console.log(new Date(0));
// "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

console.log(new Date(15000));
// "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// Вбудований метод getTime() повертає числове значення цієї дати (timestamp) — кількість мілісекунд, що минула з півночі 1 січня 1970 року.
// const date = new Date();
// console.log(date.getTime()); // 1624021654154

// Це число унікальне й ніколи не повториться, тому що момент часу унікальний і завжди тільки збільшується.Зручність цього формату полягає в тому, що можна відображати точні моменти часу у вигляді одного числа і не турбуватися про дати, рядки й часові пояси. Адже можна отримати всю необхідну інформацію, коли необхідно.

//                                         Метод Date.now()
// У разі, коли все, що потрібно, це числове представлення моменту часу, немає сенсу створювати цілий об'єкт. Можна використовувати метод Date.now() — це швидкий і зручний спосіб отримати поточний час у вигляді мілісекунд

// const time = Date.now(); // 1693237207904

// Основна ідея застосування Date.now() полягає у вимірюванні часу, розрахунку інтервалів тощо.

// Якщо ти хочеш виміряти, скільки часу займає виконання деякого коду, можна зробити так:
// const startTime = Date.now();

// // Твій код, виконуваний упродовж деякого часу
// for(let i = 0; i <= 100; i += 1) {
// 	console.log(i);
// }

// const endTime = Date.now();
// const elapsedTime = endTime - startTime;

// console.log(`Elapsed time: ${elapsedTime} ms`);

// Зберегти час до події.
// Зберегти час після події.
// Порахувати різницю між кінцевим і початковим часом.

//                                                            Геттери і сеттери екземпляра класу Date
// Геттери використовуються для читання всієї дати або окремої складової. Значення, що повертається, залежить від поточного часового поясу, встановленого на комп'ютері.
const date = new Date('March 16, 2030 14:25:00');
console.log('Date: ', date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
console.log('Day: ', date.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log('Day of the week: ', date.getDay()); // 6

// Повертає місяць від 0 до 11
console.log('Month: ', date.getMonth()); // 2

// Повертає рік з 4 цифр
console.log('Full year: ', date.getFullYear()); // 2030

// Повертає години
console.log('Hours: ', date.getHours()); // 14

// Повертає хвилини
console.log('Minutes: ', date.getMinutes()); // 25

// Повертає секунди
console.log('Seconds: ', date.getSeconds()); // 0

// Повертає мілісекунди
console.log('Milliseconds: ', date.getMilliseconds()); // 0

// ex
const date2 = new Date();
console.log(date2);
const clock = document.querySelector('.container-time');
const parForTime = document.querySelector('.time-date');
parForTime.textContent = `${date2.getHours()}:${date2.getMinutes()}`;

//                                                                           Promise
// Promise (проміс, від англ. promise — обіцяти) — об'єкт, що представляє поточний стан асинхронної операції. Це обгортка для значення, невідомого на момент створення промісу. Проміс дозволяє обробляти результати асинхронних операцій таким чином, якби вони були синхронними: замість кінцевого результату асинхронної операції, повертається своєрідна обіцянка отримати результат у майбутньому.
// Проміс — це об'єкт, що зберігає стан асинхронної операції, який використовується для відслідковування стану операції: чи була операція виконана успішно, з помилкою, або ще не завершена.
//    Життєвий цикл проміса:
// Очікування (pending) — початковий стан під час створення промісу.
// Виконано (fulfilled) — операція виконана успішно з будь-яким результатом.
// Відхилено (rejected) — операція відхилена з помилкою.

// спосіб описати, що проміс перебуває в будь-якому стані, крім очікування (виконаний або відхилений) - settled (це не окремий стан)
//                                                                          Створення проміса
//  створюється як екземпляр класу Promise, який приймає функцію як аргумент (називається "виконавцем" (executor)) і відразу викликає її, ще до створення і повернення промісу.
// const promise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//   });
//   resolve(value) — функція для виклику у разі успішної операції. Переданий їй аргумент буде значенням виконаного промісу.
//   reject(error) — функція для виклику у разі помилки. Переданий їй аргумент буде значенням відхиленого промісу.

// Колбек-функція повідомляє проміс, коли і як операція, з якою він пов'язаний, буде завершена. У ній можна виконувати будь-яку асинхронну операцію. Після її завершення потрібно викликати:
//          - resolve() для позначення успішного виконання. Результатом буде fulfilled.
// Або
//          - reject() у разі помилки, який встановлює стан промісу як "відхилений" (rejected).
// Значення, що повертається цією функцією-виконавцем, ІГНОРУЄТЬСЯ.
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

console.log(promise); // Об'єкт промісу
// У змінну promise буде записаний проміс (об'єкт) у стані pending, а через дві секунди, щойно буде викликаний resolve() або reject(), проміс перейде у стан fulfilled або rejected, і ми зможемо його обробити.
//                                                      Метод проміса then()
// приймає два аргументи — дві callback функції, які будуть викликані, коли проміс змінить свій стан.
// Код, якому потрібно зробити щось асинхронно, створює проміс і повертає його.Зовнішній код, отримавши проміс, додає до нього обробники. Після завершення процесу асинхронний код переводить проміс у стан fulfilled або rejected, і автоматично викликаються методи промісів (обробники) у зовнішньому коді.

// Результат промісу — це значення або помилка, яку функції отримають як аргументи.

// promise.then(onResolve, onReject)

//  - onResolve(value) — 1-й аргумент методу then(), колбек-функція, яка буде викликана у разі успішного виконання промісу та отримає його результат як аргумент.
//  - onReject(error) — 2-й аргумент методу then(), колбек-функція, яка буде викликана у разі виконання промісу з помилкою та отримає її як аргумент.
// У прикладі нижче callback-функція onResolve буде викликана через дві секунди, якщо проміс успішно виконається, а onReject буде викликана через дві секунди у тому разі, якщо проміс виконається з помилкою.

const isSuccess2 = true;

// Create promise
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess2) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Registering promise callbacks
promise2.then(
  value => {
    console.log(value); // "Success! Value passed to resolve function"
  },
  error => {
    console.log(error); // "Error! Error passed to reject function"
  }
);

// Якщо функції onResolve і onReject містять складну логіку, їх для зручності оголошують як зовнішні функції і передають у метод then() за ім'ям.
//                                                                             Метод catch()
// На практиці в методі then() обробляють тільки успішне виконання промісу.
// Помилку його виконання обробляють у спеціальному методі catch() для «відловлювання» помилок.
// promise
// 	.then(value => {
// 		// Promise fulfilled
// 	})
// 	.catch(error => {
// 	  // Promise rejected
// 	});

// Колбек-функція в методі catch буде викликана в разі виконання промісу з помилкою, і отримає цю помилку як аргумент. Метод catch МАЄ СТОЯТИ ПІСЛЯ then.

// Винесемо обробку помилки з методу then у метод catch.
const isSuccess3 = true;

// Create promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess3) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Registering promise callbacks
promise3
  .then(value => {
    console.log(value); // "Success! Value passed to resolve function"
  })
  .catch(error => {
    console.log(error); // "Error! Error passed to reject function"
  });

//                                                                         Метод finally()
//  якщо необхідно виконати код після того, як проміс буде виконаний незалежно від результату (fulfilled або rejected). Дозволяє уникнути дублювання коду в обробниках then() і catch().
// promise
// 	.then(value => {
// 	  // Promise fulfilled
// 	})
// 	.catch(error => {
// 	  // Promise rejected
// 	})
// 	.finally(() => {
// 	  // Promise fulfilled or rejected
// 	});

// Колбек-функція не отримає жодних аргументів, оскільки неможливо визначити, чи був проміс виконаний або відхилений. Тут буде виконуватися код, який необхідно запустити в будь-якому разі.
const isSuccess4 = true;

// Create promise
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess4) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

// Registering promise callbacks
promise4
  .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log('Promise settled')); // "Promise settled"

//                                                                Ланцюжки промісів
// Метод then() ПОВЕРТАЄ НОВИЙ ПРОМІС, який у свою чергу отримує значення від своєї callback-функції onResolve. Ця особливість дозволяє формувати послідовність асинхронних операцій, зв'язуючи проміси в ланцюжок.

// Метод then() повертає проміс. Перед його виконанням може минути деякий час, отже, частина ланцюжка, що залишилася, буде чекати на результат. У разі виникнення помилки в будь-якому місці ланцюжка, виконання всіх наступних then() скасовується, а управління передається методу catch(). Тому він має знаходитись у кінці ланцюжка усіх then().

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

promise5
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
//                                                                                   Lection
// асинхронні ф-ції зі стеку виклику переміщаються у сховище web API  і потім відпрацьовують по своїй черзі залежно від часу затримки
// синхронні операції потрапляють тілтки у стек виклику і відпрацьовують по черзі як в коді
// ex прилетить з циклу і попаде в web API:  3 (затримка 3000 ), 2(затримка 2000), 1( затримка 1000)
// а відпрацює по часу затримки і виведе в консоль - 1, 2, 3
for (let i = 3; i > 0; i--) {
  const delay = i * 1000;

  setTimeout(() => {
    // 3 2 1
    console.log(i);
    //  3000 2000 1000
  }, delay);
}

// навіть якщо вказати затримку 0 то затримка буде все одно мінімальна 4 мілесекунди і ф-ція потрабить у web API

// setTimeout(() => {}, 2000) один раз відпрацює із затримкою, поверне ID
// clearTimeout(id) - зупинить відкладене виконання ф-ції
// setInterval(() => {}, 2000) постійно відпрацьовуватиме через інтервал часу
// clearInterval(id) зупинить відпрацювання ф-ції, щоб видалити всі - збережи id (рез виконання ф-ції) в []
const logger2 = ({ time, name }) => {
  console.log(`logger2 ${time} - ${name}`);
};
//вказали дод параметр через деструктуризацію параметрів, якщо пар декілька краще запис їх через об*єкт
const logger2Id = setInterval(logger2, 1500, { time: '1.5s', name: 'Dj' });

clearInterval(logger2Id);

// ex
// show and hide by adding/removing the class "is-visible"
// hide with delay and meanwhile has event click
// don't forget to clean the timer
const elementByManipulation = document.querySelector('.js-alert');

showElement();
function showElement() {
  elementByManipulation.classList.add('is-visible');
}

let delayForHiddenID;

elementByManipulation.addEventListener('click', handleClickToHide);
function handleClickToHide(event) {
  const delayForHiddenID = setTimeout(() => {
    console.log('The element was hidden');
    elementByManipulation.classList.remove('is-visible');
  }, 3000);
}
clearTimeout(delayForHiddenID);

//  instanceByClassDate.getTime() - return the time in ms from 01/01/1970 to time by present time -UNIXE time
// Date.now() - -//- if you don't need to create whole(целый) object that will know UNIX time - you CAN USE THIS S T A T I C CLASS METHOD

// EX  WE CALCULATE THE DIFFERENCE BETWEEN TWO DATES

const date1 = Date.now();

setTimeout(() => {
  const date2 = Date.now();
  console.log(
    `DIFFERENCE BETWEEN TWO DATES its value of daley - ${date2 - date1} ms`
  );
}, 2000);

// ex Timer
// create the class Timer that has draw the area with the timer and implement the btn "start" and the "stop"
const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const areaForShowTheTimer = document.querySelector('.clockFace');

class Timer {
  constructor({ displayTime }) {
    // timer isn't active (don't pressed the btn "Start")
    this.isActive = false;
    this.intervalID = null;
    this.displayTime = displayTime;
    // call a method in CONSTRUCTOR wich will display the starting area  00:00:00 meanwhile we create the instance by class
    this.showStartingArea();
  }

  showStartingArea() {
    const time = this.getTimeComponent(0);
    this.displayTime(time);
  }
  startTimer() {
    // we check that not have restarting the timer
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    // the time wich we have when we pressed btnStart
    const startTime = Date.now();
    // interval show the time через каждую секунду (every second) and calculate the differencce
    this.intervalID = setInterval(() => {
      const currentTime = Date.now();
      // time in ms
      const differencceBetweenTimes = currentTime - startTime;

      const time = this.getTimeComponent(differencceBetweenTimes);
      console.log(time);

      this.displayTime(time);
    }, 1000);
  }
  // розбіваємо мілісекунди на години, хвилини, секунди
  getTimeComponent(timeInMs) {
    //  викликали метод padStart для форматування 00:00:00
    const seconds = this.padStart(Math.floor((timeInMs % (1000 * 60)) / 1000));
    const minutes = this.padStart(
      Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60))
    );
    // 1000ms in 1s * 60s in 1min * 60min in 1h * 24h in 1day / convert ms in hours
    const hours = this.padStart(
      Math.floor((timeInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    return { hours, minutes, seconds };
  }

  padStart(value) {
    return String(value).padStart(2, '0');
  }

  stopTimer() {
    clearInterval(this.intervalID);
    this.isActive = false;
  }
}

// create the instance
const instanceTimer = new Timer({ displayTime: displayTimeInArea });

startBtn.addEventListener(
  'click',
  instanceTimer.startTimer.bind(instanceTimer)
);

// створ зовн ф-цію відмальовування часу і передаємо її як метод під час створення екземпляру
function displayTimeInArea({ hours, minutes, seconds }) {
  areaForShowTheTimer.textContent = `${hours}:${minutes}:${seconds}`;
}

stopBtn.addEventListener('click', instanceTimer.stopTimer.bind(instanceTimer));

//                                                                    EX impliment refactoring ex - without class
// const startBtn = document.querySelector('button[data-action-start]');
// const stopBtn = document.querySelector('button[data-action-stop]');
// const areaForShowTheTimer = document.querySelector('.clockFace');

// let isActive = false;
// let intervalID;

// startBtn.addEventListener('click', startTimer);

// function startTimer() {
//   if (isActive) {
//     return;
//   }
//   isActive = true;

//   const startTime = Date.now();

//   intervalID = setInterval(() => {
//     const currentTime = Date.now();
//     const differencceBetweenTimes = currentTime - startTime;

//     const time = getTimeComponent(differencceBetweenTimes);
//     console.log(time);

//     displayTimeInArea(time);
//   }, 1000);
// }

// function getTimeComponent(timeInMs) {
//   const seconds = padStart(Math.floor((timeInMs % (1000 * 60)) / 1000));
//   const minutes = padStart(Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60)));
//   const hours = padStart(Math.floor((timeInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

//   return { hours, minutes, seconds };
// }

// function displayTimeInArea({ hours, minutes, seconds }) {
//   areaForShowTheTimer.textContent = `${hours}:${minutes}:${seconds}`;
// }

// function padStart(value) {
//   return String(value).padStart(2, '0');
// }

//   function showStartingArea() {
//     const time = getTimeComponent(0);
//     displayTimeInArea(time);
// }

// stopBtn.addEventListener('click', stopTimer);
// function stopTimer(event) {
//   clearInterval(intervalID);
//   isActive = false;
// }

//                                                                        Промісифікація
//                                                              LECTION
// ПРОМІС під час створення екземпляру приймає 2 колбекф-ції: resolve (відпрацює якщо код виповниться успішно) і reject(відпрацює у разі помилки). RETURN НЕ ПИШУТЬ
const instancePromis = new Promise((resolve, reject) => {
  const random = Math.random();

  setTimeout(() => {
    if (random > 0.5) {
      resolve('My fulfilled');
    } else {
      reject('My rejected');
    }
  }, 2000);
});
// після того як проміс стане setled (fulfilled або rejected) далі результат промісу (у дужках resolve() або reject()) обрабляють наступними методами:
instancePromis
  .then(success => console.log('Success'))
  .catch(error => console.log('Error'))
  .finally(() => console.log('Finally method is happend in any event'));

// ланцюжки .then(). Метод then повертає проміс
const instancePromis2 = new Promise((resolve, reject) => {
  resolve(5);
});

instancePromis2
  //        5
  .then(data => {
    return data * 2;
  })
  //        10
  .then(value => {
    return value - 2;
  })
  //        8
  .then(data => {
    return console.log(data);
  })
  .catch(err => 'err')
  .finally(fin => 'fin');

// Порядок виконання коду
// черга асинхронних процесів:
// мікро процеси -  promise, addEventListener, обсервери
// макро процеси - setTimeout, setInterval
//
// event look - відповідає за правильну послідовністю виконання коду
// - якщо синхронний код в СТЕКВИКЛИКУ виконався - 2. з МІКРО черги відправляє ВСІ задачі по черзі виконуватися в СТЕКВИКЛИКУ - 3. з МАКРО черги выдправляэ ОДНУ задачу - 4. якщо є в коді - відбув ререндер сторінки (випливаючі модалки тощо)
// потім все по колу спочатку - весь синхронний код - всі мікро зачадачі - одна макро - ререндер

// ex що буде виведено у консоль? 1(синхр код), 3(всі мікро проц), 4(всі мікро проц), 2(по одному макро), 5(макро бо більш нема коду)
console.log('step 1');

setTimeout(() => {
  return console.log('step 2');
}, 0);

new Promise(resolve => {
  resolve('step 3');
})
  .then(data => {
    console.log(data);
    return 'step 4';
  })
  .then(data => console.log(data));

setTimeout(() => console.log('step 5'), 0);

//                                                         промісифікація
// промфсифікова ф-ція - повертає проміс , далі його результат обробляють методами
const makeOrder = dish => {
  return new Promise((resolve, reject) => {
    const random = Math.random();

    setTimeout(() => {
      if (random > 0.5) {
        resolve(`Ваше замовлення ${dish}`);
      } else {
        reject(`Закінчилися продукти`);
      }
    }, 1000);
  });
};

makeOrder('Пиріжок')
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => `Have a nice day!`);

//                                            промісифікація "синхронних" ф-цій (без setTimeout)
// викор СТАТИЧНІ методи промісу:
// - Promise.resolve() - обов*язково викор return
// - Promise.reject() - обов*язково викор return
// - замість того щоб створ проміс всередині функції можна викор ці методи, тільки для СИНХРОННОГО коду
const makeOrder2 = dish => {
  const random = Math.random();
  if (random > 0.5) {
    return Promise.resolve(`Ваше замовлення ${dish}`);
  } else {
    return Promise.reject(`Закінчилися продукти`);
  }
};

makeOrder2('Пиріжок')
  .then(success => success)
  .catch(error => error);

//                                  СТАТИЧНИЙ  метод Promise.all([])
// щоб не обробляти кожний проміс окремо можна передати їх масивом в метод який дочекається успішного виконання всіх вказаних промісів  і поверне ПРОМІС з масивом результату їх виконання
// якщо хоч один проміс виконається неуспішно то спрацює метод catch() і поверне помилку
const startTime = Date.now();

const res1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const differenceTime = currentTime - startTime;

      resolve({
        title: 'first promis',
        time: `The difference between the start time and the time when accinc function is completed -  is ${differenceTime}`,
      });
    }, 3000);
  });
};

const res2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const differenceTime = currentTime - startTime;

      resolve({
        title: 'second promis',
        time: `The difference between the start time and the time when accinc function is completed -  is ${differenceTime}`,
      });
    }, 1000);
  });
};

const res3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currentTime = Date.now();
      const differenceTime = currentTime - startTime;

      resolve({
        title: 'therd promis',
        time: `The difference between the start time and the time when accinc function is completed -  is ${differenceTime}`,
      });
    }, 3000);
  });
};

// res1().then(data => console.log(data)).catch(error => console.log(error));
// res2().then(data => console.log(data)).catch(error => console.log(error));
// res3().then(data => console.log(data)).catch(error => console.log(error));

Promise.all([res1(), res2(), res3()])
  .then(data => console.log(data))
  .catch(error => console.log(error));

//                                                СТАТИЧНИЙ метод Promise.race([])
// на відмінну від Promise.all - повертає в масиві результат промісу який відпрацював НАЙШВИДШЕ незалежно як (успішно чи помилкою)
Promise.race([res1(), res2(), res3()])
  .then(data => console.log(data))
  .catch(error => console.log(error));

//                                             СТАТИЧНИЙ метод Promise.allSettled([])
// повертає масив з об*єктами для кожного промісу де є ключ status:'fulfilled' or 'reject' reason/value: результат успіху або помилки

// ex THE GAME
// write software for a slot's machine
//  - the smile ('😇' or '😈')should appear in each box with a delay of 1 second meanwhile the  btn 'Start game' is pressed
// - create the array with promises  each of them will be responsible(відповідати) for his box
//using the method Promise.allSettled for work with array
// - script should write the game status (victory or defeat) when all boxs will be filled
// if smiles are the same(однакові) in each boxs it's mean that user has a victory
// write the game status in the area for result - 'Winner' or 'Loser'
// -after pressing the button "Start game" again the area must be cleared and the game must start over
const startGameBtn = document.querySelector('.start-btn-game');
const containerForBoxsGame = document.querySelector('.container-box-games');
const areaResultByGame = document.querySelector('.result-game');

startGameBtn.addEventListener('click', handleStartGame);
function handleStartGame(event) {
  // робимо кнопку неакктивною після натискання
  startGameBtn.disabled = true;
  // очищаєм бокси від попереднього наповнення
  areaResultByGame.innerHTML = '';
  // створ із псевдо масиву дітей контейнера - такої самої довжини масив промісів для кожного бокса
  // перетвор псевдо мас в мас за доп спред оператора або Aray.from()

  const promisesArray = [...containerForBoxsGame.children].map(() => {
    return new Promise((resolve, reject) => {
      const random = Math.random();

      if (random > 0.5) {
        resolve('😇');
      } else {
        reject('😈');
      }
    });
  });
  console.log(promisesArray);

  Promise.allSettled(promisesArray).then(items => {
    console.log(items);
    const isWinner =
      items.every(item => item.status === 'fulfilled') ||
      items.every(item => item.status === 'rejected');
    console.log(isWinner);

    //перебираємо масив з об*єктами результатами промісів
    items.forEach((obj, index) => {
      console.log(obj);
      // очищаємо boxs щоб при повторному нажатті кнопки відображалися по новій смайлики
      containerForBoxsGame.children[index].textContent = '';
      setTimeout(() => {
        containerForBoxsGame.children[index].textContent =
          obj.value || obj.reason;

        if (index === items.length - 1) {
          areaResultByGame.textContent = isWinner ? 'Winner' : 'Loser';
          // робимо кнопку активною для натискання
          startGameBtn.disabled = false;
        }

        // 1000 , 2000, 3000
      }, 1000 * (index + 1));
    });
  });
}
