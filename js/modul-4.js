'use strict';
//                                                        MODUL 4 - OBJECTS
// У JavaScript є 8 основних типів даних.
// Сім примітивних типів даних:
// number для будь-яких чисел: цілих або з рухомою точкою. Цілі числа обмежені до ±(253-1).
// bigint для цілих чисел довільної довжини.
// string для рядків. Рядок може мати нуль або більше символів, немає окремого типу для одного символу.
// boolean для true/false.
// null для невідомих значень- автономний тип, який має єдине значення null.
// undefined для не присвоєних значень - автономний тип, який має єдине значення undefined.
// symbol для унікальних ідентифікаторів.

// І один непримітивний тип даних:
// object для складних структур даних.
// На противагу цьому, об*єкти використовуються для зберігання ключів різних колекцій даних та складніших об*єктів.
// Для оголошення об*єкта використовуються фігурні дужки {} — літерал об'єкта.
// При створенні об'єкта до нього відразу можна додати властивості, але це не обов*язково. Кожна властивість обов*язково складається з пари ключ: значення.
// Ключ також називають ім'ям властивості і це зазвичай рядок, якщо в імені більше 1 слова то його поміщають у лапки"".
// Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо.
// Властивості між собою розділяються комою.
// об*єкт apartment містить дані про квартиру і значення ключа owner - це об*єкт з ключами про інформацію власника
const apartment = {
  "img Url": "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
phone: "982-126-1588",
email: "henry.carter@aptmail.com",
  },
};
// Доступ до властивостей через крапку - використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ. СИНТАКСИС objectName.key.На місце звернення буде повернуте значення властивості з таким ключем.
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"
const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]
const bookPrice = book.price;
console.log(bookPrice); // undefined

// Для доступу до вкладених властивостей
// якщо вкладений об*єкт - використовується ланцюжок звернень «через крапку».Тобто «крапка» вказує наступну вкладеність.
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

let location22 = user.location;
console.log(location22); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"

// Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде: user.hobbies
const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]
// Отримати доступ до елементів масиву можна через квадратні дужки та індекс: user.hobbies[0];
const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"
// Можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості length: user.hobbies.length;
const numberOfHobbies = user.hobbies.length;
const lastHobies = user.hobbies[hobbies.length - 1];
console.log(numberOfHobbies); // 3

const apartment2 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment2.owner.name;
const ownerPhone = apartment2.owner.phone;
const ownerEmail = apartment2.owner.email;
const numberOfTags = apartment2.tags.length;
const firstTag = apartment2.tags[0];
const lastTag = apartment2.tags[tags.length - 1];

//  Другий спосіб отримати доступ до властивості об'єкта через квадратні дужки — це синтаксис objectName["key"]. ВІн використовується якщо назва ключа більша за 1 слово ("назва ключа"). Також такий спосіб спрацює з будь-яким ім*ям властивості:
const book3 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book3.title); // "The Last Kingdom" 
console.log(book3["title"]); // "The Last Kingdom" 

console.log(book3.genres); // ["historical prose", "adventure"]
console.log(book3["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book3.propKey); // undefined
console.log(book3[propKey]); // "Bernard Cornwell"
// Після того як об'єкт створений, значення його властивостей можна змінити.Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.
book3.rating = 9;
book3.isPublic = false;
book3.genres.push("drama");
// ex
const apartment3 = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment3.price = 5000;
apartment3.rating  = 4.7;
apartment3.owner.name = "Henry Sibola";
apartment3.tags.push("trusted");
// Додавання властивостей об*єкта нічим не відрізняється від зміни значення вже існуючої властивості. Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена.
// якщо ви спробуєте додати властивості у ще не створеного об*єкта (властивості) то ви отримаєте помилку. Спочатку ініціалізуйте об*єкт-властивість як порожній об'єкт, а потім додавайте до нього властивості.
book3.pageCount = 836;
book3.originalLanguage = "en";
book3.translations = ["ua", "ru"];

book3.price = {};
book3.price = {
  hardcover: 39,
  softcover: 29,
};
console.log(book3.price);

// Іноді під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.
// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.
// Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.
const name4 = "Henry Sibola";
const age4 = 25;

const user4 = {
  name4,
  age4,
};
console.log(user4);

// Обчислювальні властивості
// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.
// Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його. Значенням обчислювальної властивості може бути будь-який валідний вираз.
const propName = "name";
const user5 = {
  age: 25,
  // ключ цієї властивості буде взято зі значення змінної propName
  [propName]: "Henry Sibola",
};
console.log(user5.name); // "Henry Sibola"

//                                                      ПЕРЕБІР ОБ*ЄКТА
//                                               - Цикл for...in
// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.
const book5 = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book5) {
  console.log(key); // Ключ
  console.log(book5[key]);  // Значення властивості з таким ключем
}
// ex Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
const apartment4 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];
for (const key in apartment4) {
  keys.push(key);
  values.push(apartment[key])
}

console.log(keys, values);
//          - Метод Object.keys(object) приймає об'єкт і повертає масив ключів його властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.
// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.
const book6 = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keysArrayOfBook6 = Object.keys(book6);

for (const key of keysArrayOfBook6) {
  console.log(key); // Ключ
  console.log(book6[key]); // Значення властивості
}
// ex Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
const apartment6 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const apartmentArrayKeys = Object.keys(apartment6);
console.log(apartmentArrayKeys);

const values2 = [];
const keys2 = [];

for (const key of apartmentArrayKeys){
  values2.push(apartment6[key]);
  keys2.push(key);
}

console.log(values2, keys2);

// Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.

// ex РЕФАКТОРИНГ - використати метод Object.keys() і цикл for...of замість циклу for...in. Функція має повернути кількість властивостей в об'єкті object.
// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
function countProps(object) {
  let propCount = 0;
const arraysKeysOfObject = Object.keys(object);

const keysObject = [];
const propertyObject = [];

for (const key of arraysKeysOfObject) {
  keysObject.push(key);
  propertyObject.push(object[key]);
}
propCount = propertyObject.length;
return propCount;
}
const humanity = {
  species: "Homo sapiens",
  height: {
    male: 1.7,
    female: 1.6,
  },
"speed running": {
male: "13km/h",
female: "10km/h",
},
}
console.log(countProps(humanity));

//  метод Object.values(object) повертає масив значень його властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив. Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.
// ex Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня. function поверта загальну суму зарплат всіх співробітників.
function countTotalSalary(salaries) {
  let totalSalary = 0;
  const arraySal = Object.values(salaries);
  for (const sal of arraySal) {
    totalSalary += Number.parseFloat(sal);
  }
  const arrayEmployee = Object.keys(salaries);
  return `The total salaries ${totalSalary}$ for ${arrayEmployee.length} employees`;
}
const salariesObject = {
  Kate: "3200$",
  Petya: "4500$",
  Misha: "6700$",
  Anna: "5900$",
}
console.log(countTotalSalary(salariesObject));


//                                                          ARRAY OF OBJECTS
// Для опису групи сутностей використовується масив об'єктів.
// Mасив однотипних об'єктів - всі об'єкти в масиві гарантовано мають однаковий набір властивостей, але з різними значеннями.
// Для перебору такого масиву використовується стандартний цикл for...of.

// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» (CONST VALUE = OBJECT.KEY), оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення.
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }
// ex Масив colors містить колекцію кольорів (objects). Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors, rgbColors);

// Пошук об'єкта за значенням властивості. Наприклад, потрібно знайти книгу за її автором. Для цього необхідно:
// - перебрати масив у циклі;
// - додати умову, виконання якої означатиме успішний результат пошуку.
const books6 = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];
const authorToSearchFor = "Robert Sheckley";
for (const book of books6) {
	if(book.author === authorToSearchFor) {
		console.log(book);
		console.log(book.title);
	}
}


// ex Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість. Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
let price;
  for (const product of products) {
    if (productName === product.name) {
      price = product.price;
    } 
  }
  return price;
}
console.log(getProductPrice("Radar"));


//РІЗНИЦЯ МІЖ FOR...IN TA FOR...OF
// Новый синтаксис добавлен для перебора итерируемых коллекций. Можете написать свою коллекцию с реализацией итератора и использовать for..of для ее перебора.
let arr = [`a`, `b`, `c`, `d`, `e`];

for (const elem in arr) {
	console.log(elem); // 0 1 2 3 4
}

for (const elem of arr) {
	console.log(elem); // a b c d e
}

// масив всіх значень певної властивості об'єктів. Наприклад, взяти з масиву об'єктів, які описують книги, усі назви або рейтинг.
// Для цього необхідно:
// Створити новий порожній масив для зберігання значень властивостей.
// Перебрати масив об'єктів у циклі.
// На кожній ітерації додати в новий масив значення необхідної властивості.

// ex Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
function getAllPropValues(propName) {
  const products = [
    { nameE: "Radar", price: 1300, quantity: 4 },
    { nameE: "Scanner", price: 2700, quantity: 3 },
    { nameE: "Droid", price: 400, quantity: 7 },
    { nameE: "Grip", price: 1200, quantity: 9 },
  ];
  let array = [];
  
  for (const product of products) {
    if ("nameE" === propName) {
      array.push(product.nameE);
    } else if ("price" === propName) {
      array.push(product.price);
    } else if ("quantity" === propName) {
      array.push(product.quantity);
    } else {
       array = [];
    }
  }
  return array;
}
console.log(getAllPropValues("quantity"));
// ex Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість. Function поверта загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.
function calculateTotalPrice4(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ]; 
  let totalPrice;
  for (const product of products) {
    if (productName === product.name) {
     return totalPrice = product.price * product.quantity;
    } 
  }
  return `Product ${productName} not found!`;;
}
console.log(calculateTotalPrice4("Raar"));


//                                                 METHODS OF OBJECTS
// Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними. 
// Метод об*єкта - це звичайна функція, оголошена як властивість об'єкта, а не як окрема змінна. Для звернення до методу об'єкта використовується стандартний синтаксис із крапкою.
// const obj = {
// 	method(value) {
// 		console.log(`I'm a method with ${value}!`);
// 	}
// };
// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"
// Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».
// ex
const atTheOldToad = {
  potions: [],
  getPotions() { return "List of all available potions"; },
  addPotion(potionName) { return `Adding ${potionName}`; },
}
// Виклик методу atTheOldToad.getPotions() повертає рядок "List of all available potions"
// Виклик методу atTheOldToad.addPotion("Invisibility") повертає рядок "Adding Invisibility"

// Для доступу до об'єкта в методі використовується не ім'я змінної цього об*єкта, наприклад bookShelf, а ключове слово this. Ключове слово this в середині методу містить посилання на об'єкт, що його викликав.
// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.

// ex Об'єкт atTheOldToad має наступні властивості: -potions — масив рядків, з назвами зілль; - getPotions() — метод, який повертає рядок "List of all available potions". Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
const atTheOldToad2 = {
    potions: ["Speed potion", "Stone skin"],
    getPotions() {
      return this.potions;
    },
  };
  console.log(atTheOldToad2.getPotions());
  