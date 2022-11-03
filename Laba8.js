//Задание 1
let woman = prompt('Как зовут девушку?');
let man = prompt('Как зовут парня?');
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let result = getRandomIntInclusive(0,100); 
alert(`${man} подходит к ${woman} на ${result}%!`);

//Задание 2
let ves = prompt('Какой вас вес? (кг)');
let rost = prompt('Какой у вас рост? (м)');
let BMI = ves/(Math.pow(rost,2));
if(BMI <= 18.5) alert("Недостаточный вес.");
else if (BMI <= 25) alert("Нормально.");
else if (BMI <= 30) alert("У вас излишек веса.");
else if (BMI > 30) alert("Ожирение.");

//Задание 3
let god = prompt('Введите год:');
if(god%4==0 || god%400 ==0) alert('Год високосный');
else if (god%100 ==0) alert('Не является високосным');
else alert('Не является високосным');

//Задание 4
let izbrani = ['Дима', 'Катя', 'Петр', 'Лена'];
function arrayRandElement(izbrani) {
  var rand = Math.floor(Math.random() * izbrani.length);
  return izbrani[rand];
}
alert(`Оплачивать будет ${arrayRandElement(izbrani)}.`)
