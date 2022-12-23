// Створити скрипт який повинен виконувати наступне:

// питаємо у користувача, що він хоче зробити (add, sub, mult, div);
// питаємо у користувача перше число;
// запитуємо у користувача друге число;
// виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").

const operations = new Map([
  ["add", "+"],
  ["sub", "-"],
  ["mult", "*"],
  ["div", "/"],
]);
do {
  var operation = prompt("Яку математичну операцію ви хочете зробити (add, sub, mult, div)?");
} while (!operations.has(operation));

const a = +prompt("Введіть перше число"),
  b = +prompt("Введіть друге число");

// или console.log(`${a} ${operations.get(operation)} ${b} = ${eval(`${a} ${operations.get(operation)} ${b}`)}`);

let total = 0;
switch (operations.get(operation)) {
  case "+":
    total = a + b;
    break;
  case "-":
    total = a - b;
    break;
  case "*":
    total = a * b;
    break;
  case "/":
    total = a / b;
    break;
}
console.log(`${a} ${operations.get(operation)} ${b} = ${total}`);
