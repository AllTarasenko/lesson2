/*Необхідно написати програму яка буде виводити інформацію за умовами при яких число виводитиметься з правильним словом: "рік", "роки" або "років". Тобто. "29 років" чи "4 роки".

    Умови виконання ДЗ

Рік отримувати через prompt()
Зробити перевірку що користувачь ввів число та це число не є відємним
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки.
    Будь ласка, надайте наступні дані для перевірки вашої роботи:

    Створіть гілку js_homework2.
    Додати туди ваше домашне завдання
Вислати вашу гілку

рік - 1
роки - [2 - 4]
років - [5 - 99]

*/


var age = prompt("Вкажіть вік, значення повинно буті від 1 до 99");
console.log(typeof age, Number(age));
//let age = 0;
if (1 <= age && age <= 99) {
    if (age === 1) {
        console.log('Pік')
    }
    else if (2 <= age && age <= 4) {
        console.log('Роки');
    }
    else if (5 <= age && age <= 99)
        console.log('Років');
} else console.log('Введене значення повинно бути числом від 1 до 99');



