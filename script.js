// const username = "Vika";
// const age = 25;
// const message = `Hello ${username}! Your age is ${age}.`;
// console.log(message);
// const agePets = null;
// console.log(typeof typeof agePets);

// Statement if
function checkPassword(password, userName) {
    const truePassword = "hellokitty21";
        if (password === truePassword) {
            return `Welcome ${userName}!`;
        }
    }
    
    const result1 = checkPassword("hsgirl37", "Kris");
    const result = checkPassword("hellokitty21", "Viktoriia");
    console.log(result);
    console.log(result1);
    
    // Statement if...else - якщо умова (condishion) перетворюється до true то виконується код блоку if (if block statments); якщо умова (condishion) перетворюється до false то виконується код блоку else (else block statments); 
    function checkAccountBalance(cashBalance) {
        if (cashBalance > 250) {
            return "You can to connect a Premium subscription.";
        } else {
            return "Top up your account with $250 to activate a premium subscription."
        }
    }
    const cheking1 = checkAccountBalance(0);
     const cheking2 = checkAccountBalance(400);
    
     console.log(cheking1, cheking2);
    
    //  Statement else...if використовуємо коли більше 1 умови. Як тільки якась умова задовільняється то інструкція припиняється.
    function checkStorage(available, ordered) {
        if (available > 0, ordered === 0) {
            return "There are no products in the order!"
        } else if (ordered > available) {
            return "Your ordered is too large, there are not enough items in stock!"
        } else {
            return "The ordered is accepted, our manager will contact you."
        }
    }
     let a = checkStorage(3, 0);
     let b = checkStorage(30, 50);
     let c = checkStorage(60, 10);
     
     console.log(a, b, c);
    
    //  Тернарний оператор - коротша заміна if...else, у нього може бути тільки 2 сценарія - condition ? expression if condition is TRUE : expression if condition is FALSE
                                let type;
                                const age = 20;
                                if (age >= 18) {
                                    type = "adult";
                                } else {
                                    type = "child"; 
                                }
                                console.log(type);
                                // EXAMPLE 1
    const yourAge = 20;
    const yourType = age >= 18 ? "adult" : "child";
    console.log(yourType);
      // EXAMPLE 2
      function checkPassword(password) {
        const correctPassword = "jqueryismyjam";
        return password === correctPassword ? "Access granted" : "Access denied, wrong!";
      }
      const a1 = checkPassword("incorrectPassword");
    const a2 = checkPassword("jqueryismyjam");
    
    console.log(a1, a2);
    
    // Operator switch - дозволяє виконувати різні дії залежно від значення виразу (expression). Якщо значення виразу відповідає значенню в блоці case то виконується код цього блоку. Оператор break, щоб вийти зі switc (це запобігає виконанню клоду у наступних блоках case). Якщо жодне значення не відповідає виразу то виконується код з блоку default в самому кінці (якщо він є).
     function yourCountry(country) {
        switch (country) {
            case "Ukraine":
                console.log("Вітаю, як ся маєш?");
                break;
            case "England":
                console.log("Hello, how are you?");
                break;
            case "Spain":
                console.log("Hola, cómo estás?");
                break;
            case "Belgium":
                console.log("Hallo, hoe gaat het?");
                break;
            case "Germany":
                console.log("Hallo, wie geht es dir?");
                break;
            case "France":
                console.log("Salut comment vas-tu?");
                break;
                default:
                    console.log("Hello, how are you?");
        }
     } 
     yourCountry("Spain");
     yourCountry("Ukraine");
     yourCountry("Belgium");
    
    //  fall-through - провалювання коду, якщо не вказати оператор break у блоці switch то виконання коду продовжиться у наступному  case; це якщо потрібно щоб кілька блоків case виконували один і той самий код 
    const expression = 10 - 5
    switch (expression) {
      case 2:
    
      case 5:
        console.log("The result is less than 8")
        break;
    
      case 8:
        console.log("The result is 8")
        break;
    
      default:
        console.log("The result does not exist")
    }
    // The result is less than 8
    
    // Boolean operators: &&(і) ||(або) !(ні)
    // expression1 && expression2 - бінарний оператор і зліва направо перевіряє почергово обидва операнди на істинність та повертає або значення останнього істинного (тільки правого) операнда, або першого хибного (лівого чи правого) на якому він запнувся. Якщо операндами є вирази то спочатку обчисл вирази а потім їх порівнюють
    function typeScreen(screenWidth) {
        const sm = 320;
        const md = 768;
        const lg = 1200;
    
        if (screenWidth <= sm) {
            return "Mobile screen";
        } else if (screenWidth > sm && screenWidth <= md) {
            return "Tablet screen";
        } else if (screenWidth > md && screenWidth <= lg) {
            return "Desktop screen";
        } else {
           return "Godzilla screen";
        }
    }  
    const ba = typeScreen(200);
    const bb = typeScreen(420);
    const bc = typeScreen(980);
    const bd = typeScreen(1800);
    
    console.log(ba, bb, bc, bd);
    // EXAMPLE 2 && - функція повертає результат входження числаNumber у числовий проміжок від start до end
    function isNumberInRange(start, end, number) {
        return number >= start && number <= end;
    }
    
    const ca = isNumberInRange(20, 150, 40); 
    const cb = isNumberInRange(25, 35, 15);
    
    console.log(ca, cb);
    // expression1 || expression2 - бінарний оператор або перетворює всі операнди до логічного типу (true або false) і повертає значення одного з них. Як тільки оператор або знайшов  перший операнд що перетворюється на true він зупиняється та пповертає його значення. Якщо всі операнди перетворюються на false то результатом буде значення крайнього правого операнда
    const f = "mango" || 0;
     console.log(f, typeof f);
    
    const v = undefined || 2;
    console.log(v, typeof v);
    
    const y = true || false;
    console.log(y, typeof y);
    
     const g = "" || null;
     console.log(g, typeof g);
    // EXAMPLE 1
    function checkAccess(subType) {
     return subType === "pro" || "vip";
    }
    const h = checkAccess("pro");
    const j = checkAccess("super");
    
    console.log(h,j, typeof h, typeof j);
    // !expression - унарний (один операнд) логічний оператор ні приводить до логічного значення (true або false) і потім заперечує його(змінює на протилежне значення).
    console.log(!true);
    console.log(!false);
    console.log(!"");
    console.log(!3);
    console.log(!null);
    console.log(!undefined);
    console.log(!"Masha");
    // На практиці логчне заперечення викор для перевірки від зворотнього, напр можна дозволити написати повідомлення в чаті лише якщо користувач НЕ заблокований
    function chat(isBlocked) {
    const canChat = !isBlocked;
    if(canChat) {
        return "Can type in chat.";
    } else {
        return "Blocked from typing in chat!";
    }
    }
    
    const la = chat(false);
    const lo = chat(true);
    
    console.log(la, lo);
    
    // Methods of strings:
    // The method indexOf() - для пошуку першого входження підрядка в рядок. Він повертає: -індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або: -1, якщо підрядок не виявлено.
    // The method slice() - для створення копії частини або всього рядка без зміни оригінального рядка. Він дозволяє витягувати підрядок з вихідного рядка, вказуючи початковий та кінцевий індекси. str.slice(startIndex, endIndex), де: str — вихідний рядок, з якого робитиметься копія. startIndex — індекс, з якого починається копіювання елементів рядка.endIndex — індекс, до якого (не включаючи) йде копіювання елементів рядка. Якщо викликати метод slice() без аргументів, він створює точну копію рядка і повертає її.
    function getFileName(file) {
        const fileCheck = file.indexOf(".");
         if (fileCheck === -1) {
           return file.slice();
         } else {
           return file.slice(0, file.indexOf("."));
         }
       }
    const yy = getFileName("index.app");
    const xx = getFileName("script");
    console.log(yy, xx);
    
    //   Methods toLowerCase() та toUpperCase() використовуються для зміни регістру символів у рядку. Обидва методи не змінюють вихідний рядок, а повертають новий рядок у відповідному регістрі. Нормалізація введення - можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити всі його символи у верхній або нижній регістр:
    const brandName = 'samsung';
    const userInput = 'saMsUng';
    const lowercaseInput = userInput.toLowerCase();
    // EXAMPLE of using methods
    function normalizeInput(input, to) {
        switch (to) {
          case "upper":
             return input.toUpperCase();
            break;
          case "lower":
            return input.toLowerCase();
            break;
        }
      }
      const rr = normalizeInput("This ISN'T SpaM", "lower");
      const dd = normalizeInput("This ISN'T SpaM", "upper");
      console.log(rr, dd);
    
    //   The method includes() - використовується для перевірки наявності підрядка у рядку. Він повертає логічне значення true, якщо підрядок знайдено, і false, якщо підрядок відсутній.
    // Example 1
    const message = "Please buy our stuff!";
    const hasSpam = message.includes("buy");
    
    if (hasSpam) {
      console.log("Warning: This message contains forbidden words.");
    } else {
      console.log("You can safely open this message.");
    }
    // Ex 2
    function checkForName(fullName, firstName) {
        fullName = fullName.toUpperCase();
        firstName = firstName.toUpperCase();
        return fullName.includes(firstName);
        }
    
        // Methods startsWith() і endsWith() - призначені для перевірки початку й закінчення рядка відповідно. Вони повертають булеве значення true або false, залежно від того, чи відповідає початок або кінець рядка заданому значенню. Чутливі до регістру (зроби нормалізацію).
        function checkFileExtension(fileName, ext) {
            if (fileName.endsWith(ext)) {
              return "File extension matches";
            } else {
          return "File extension does not match";    
            }
          }
     const jj = checkFileExtension("styles");
     const uu = checkFileExtension("script", ".js");
     const ll = checkFileExtension("index.html", ".html");
     console.log(jj, uu, ll); 
        // The method trim() - для видалення початкових і кінцевих пробілів із рядка. Це дозволяє "очистити" рядок від зайвих пробілів.
        function createFileName(name, ext) {
            const pureName = name.trim();
            const pureExt = ext.trim();
            return `${pureName}.${pureExt}`;
          }
    const hh = createFileName("  index   ", "   html");
    console.log(hh);
    
    // Cicles 
    // Цикл — керуюча конструкція, призначена для організації багаторазового виконання набору інструкцій. Тіло циклу — послідовність інструкцій, призначена для багаторазового виконання. Ітерація — одиничне виконання тіла циклу. Умова виходу — вираз, що визначає, чи буде в черговий раз виконуватися ітерація, або цикл завершиться.
    // Цикл while - kонструкція while створює цикл, який виконує блок коду в тілі циклу, поки умова для виходу оцінюється як true.Якщо умова оцінюється як false, виконання циклу переривається і скрипт продовжує виконувати інструкції після циклу. Цикл while часто використовується, коли точна кількість ітерацій заздалегідь не відома. Отже, цикл має виконуватися до виконання певної умови.
    // EXAMPLE 
    
    