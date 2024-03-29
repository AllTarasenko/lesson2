/*Напишіть програму яка буде приймати два значення, перше це одиниця вимірювання
(кілометри, години та кілограми), друге значення це кількість, а потім переводити ці значення:
Кілометри в метри
години в хвилини
Кілограми в грами

Зробити вивід отриманої інформації у вигляді - 10 км це 10000 м. 1 г це 60хв. 1 кг. це 1000 грм.

Умови виконання ДЗ
- В задачі не обовязково викорисутовувати prompt, просто запишіть значення в зміні
- Обовязково при написані завдання використовуйте switch
- Продумати варінат якщо буде введена якась інша одиниця виміру
- Мудрувати та створювати валідацію не потрібно
- Будь ласка, надайте наступні дані для перевірки вашої роботи:

Додати ДЗ у гілкуjs_homework2
Вислати вашу гілку
 */

var unit = 'kmj'
var amount = 100
/*if (unit == 'km') {
    console.log(amount + ' km is ' + (amount * 1000) + ' metres')
} else if (unit == 'hour') {
    console.log(amount + ' hours is ' + (amount * 60) + ' seconds')
} else if (unit == 'kg') {
    console.log(amount + ' kg is ' + (amount * 1000) + ' grams')
} else console.log('Unit is not correct')*/

switch (unit) {
    case 'km':
        console.log(amount + ' km is ' + (amount * 1000) + ' metres');
        break;
    case 'hour':
        console.log(amount + ' hours is ' + (amount * 60) + ' seconds');
        break;
    case 'kg':
        console.log(amount + ' kg is ' + (amount * 1000) + ' grams');
        break;
    default:
        console.log('Unit is not correct');
}
