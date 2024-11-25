"use strict";
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
const setBtn = document.querySelector(".js-set");
const clearBtn = document.querySelector(".js-clear");

let timeoutId;

// через 2с в консоль мало б вивестись повідомлення "I love async JS!"
setBtn.addEventListener("click", handleAsync);
function handleAsync(event){
    timeoutId = setTimeout(() => {
        console.log("I love async JS!");
      }, 2000);
}

// але ми скасували заплановане виконання ф-ції
clearBtn.addEventListener("click", handleClearAsync);
function handleClearAsync(event){
    clearTimeout(timeoutId);
    console.log(`Timeout with id ${timeoutId} has stopped!`);
}
    console.log("modul 10");
    
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
const date = new Date();

console.log(date);