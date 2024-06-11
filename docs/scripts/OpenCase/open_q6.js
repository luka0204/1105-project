import { text_q6_1 , text_q6_2 , text_q6_3 , text_q6_4 , text_q6_5 , text_q6_6 , text_q6_7 } from "../tasks.js";
import {testCases_q6_1 , testCases_q6_2 , testCases_q6_3 , testCases_q6_4 , testCases_q6_5 , testCases_q6_6 , testCases_q6_7} from "../tasks.js"
import {function_name_q6_1 , function_name_q6_2 , function_name_q6_3 , function_name_q6_4 , function_name_q6_5 , function_name_q6_6 , function_name_q6_7} from "../tasks.js"
import {userFunction_q6_1 , userFunction_q6_2, userFunction_q6_3 , userFunction_q6_4 , userFunction_q6_5 , userFunction_q6_6 , userFunction_q6_7} from "../tasks.js"
import {text_example_q6_1 , text_example_q6_2 , text_example_q6_3 , text_example_q6_4 , text_example_q6_5 , text_example_q6_6 , text_example_q6_7} from "../tasks.js"
import {second_example_q6_1 , second_example_q6_2 , second_example_q6_3 , second_example_q6_4 , second_example_q6_5 , second_example_q6_6 , second_example_q6_7} from "../tasks.js"
const cells = 61 //количество предметов (скорость рулетки)

// From 0.001 to 100
const items = [
  {nameQ6: 'SumMix', img: '../images/iPhone.png',taskTextQ6 : text_q6_1,SecondExampleQ6 : second_example_q6_1 ,exampleQ6 : text_example_q6_1 ,testsQ6 : testCases_q6_1  ,FuncNameQ6: function_name_q6_1, FuncArgsQ6 : userFunction_q6_1, chance: 14.29},
  {nameQ6: 'PowersOfTwo', img: '../images/keyboard.png',taskTextQ6 : text_q6_2,SecondExampleQ6 : second_example_q6_2 ,exampleQ6 : text_example_q6_2 ,testsQ6 : testCases_q6_2 ,FuncNameQ6: function_name_q6_2, FuncArgsQ6 : userFunction_q6_2, chance: 14.29},
  {nameQ6: 'Multiply', img: '../images/headphones.png',taskTextQ6 : text_q6_3,SecondExampleQ6 : second_example_q6_3 ,exampleQ6 : text_example_q6_3 ,testsQ6 : testCases_q6_3 ,FuncNameQ6: function_name_q6_3, FuncArgsQ6 : userFunction_q6_3 , chance: 14.29},
  {nameQ6: 'Invert values', img: '../images/pivo.png',taskTextQ6 : text_q6_4,SecondExampleQ6 : second_example_q6_4 ,exampleQ6 : text_example_q6_4 ,testsQ6 : testCases_q6_4 ,FuncNameQ6: function_name_q6_4, FuncArgsQ6 : userFunction_q6_4, chance: 14.29},
  {nameQ6: 'Find Nearest square number', img: '../images/butterfly.png',taskTextQ6 : text_q6_5,SecondExampleQ6 : second_example_q6_5 ,exampleQ6 : text_example_q6_5 ,testsQ6 : testCases_q6_5 ,FuncNameQ6: function_name_q6_5, FuncArgsQ6 : userFunction_q6_5, chance: 14.29},
  {nameQ6: 'USD => CNY', img: '../images/jini.png',taskTextQ6 : text_q6_6,SecondExampleQ6 : second_example_q6_6 ,exampleQ6 : text_example_q6_6 ,testsQ6 : testCases_q6_6 ,FuncNameQ6: function_name_q6_6, FuncArgsQ6 : userFunction_q6_6, chance: 11111111111111111114.29},
  {nameQ6: 'Find the Difference in Age between Oldest and Youngest Family Members', img: '../images/vinipuh.png',taskTextQ6 : text_q6_7,SecondExampleQ6 : second_example_q6_7 ,exampleQ6 : text_example_q6_7 ,testsQ6 : testCases_q6_7 ,FuncNameQ6: function_name_q6_7, FuncArgsQ6 : userFunction_q6_7, chance: 14.29},
]
// создать отдельный файл с текстом заданий, и импортировать их в const items
function getItem() {
  let item;
  const totalChances = items.reduce((acc, curr) => acc + curr.chance, 0) ;

  while (!item) {
    const chance = Math.floor(Math.random() * totalChances);
    let cumulativeChance = 0;
    
    for (const elm of items) {
      cumulativeChance += elm.chance;
      if (chance < cumulativeChance) {
        item = elm;
        break;
      }
    }
  }

  return item;
}

function generateItems() {
  document.querySelector('.list').remove()
   document.querySelector('.scope').innerHTML = `
     <ul class="list"></ul>
   `
  
  const list = document.querySelector('.list')

  for (let i = 0; i < cells; i++) {
    const item = getItem()
    
    const li = document.createElement('li')
    li.setAttribute('data-item', JSON.stringify(item))
    li.classList.add('list__item')
    li.innerHTML = `
      <img src="${item.img}" alt="" />
    `

    list.append(li)
  }
}

generateItems()

let isStarted = false
let isFirstStart = true
let item
let resultContainer
let resultTitle
let resultImage
let data1;
function start() {
  
  const startButton = document.getElementById('startButton');
  startButton.disabled = true; // Disable the button
  startButton.style.display = 'none'; // Скрываем кнопку "Крутить"

  if (isStarted) return;
  else isStarted = true;

  if (!isFirstStart) generateItems();
  else isFirstStart = false;
  const list = document.querySelector('.list');

  setTimeout(() => {
    list.style.left = '50%';
    list.style.transform = 'translate3d(-50%, 0, 0)';
  }, 0);

  item = list.querySelectorAll('li')[30]; // получаем 30-й подсвеченный элемент
  resultContainer = document.getElementById('resultContainer'); // получаем контейнер для результата
  resultTitle = document.getElementById('resultTitle'); // получаем заголовок результата
  resultImage = document.getElementById('resultImage');   // получаем изображение результата

  setTimeout(() => {
    data1 = JSON.parse(item.getAttribute('data-item'));
    //resultTitle.textContent = data1.name; // выводим имя выпавшего элемента
    //resultImage.src = data1.img; // выводим изображение выпавшего элемента

    function compareNames(object, reqItem) {
      let result;
      object.forEach((item) => {
        if (item.nameQ6 === reqItem) {  
          result = item;
        }
      });
      return result;
    }
    const result = compareNames(items, data1.nameQ6); // сравниваем имя выпавшего элемента с именами предметов
    localStorage.setItem('dataToPass6', JSON.stringify(result)); // сохраняем данные в localStorage
    const dataToPass = JSON.parse(localStorage.getItem('dataToPass6'));
    console.log(dataToPass) // получаем данные из localStorage
    
    
  }, 5000);
  resultContainer.style.display = 'block';

  list.addEventListener('transitionend', () => {
    isStarted = false;
    item.classList.add('active');
    //const data = JSON.parse(item.getAttribute('data-item').name);
  }, {once: true});
  list.addEventListener('transitionend', () => {
    isStarted = false;
    item.classList.add('active');
    const data = JSON.parse(item.getAttribute('data-item'));


    startButton.disabled = false; // Enable the button
    function showGoToTaskButton() {
      const goToTaskButton = document.getElementById('goToTaskButton');
      goToTaskButton.style.display = 'inline-block';
    }
    showGoToTaskButton(); // Show the "Go to task" button
  }, {once: true});
}
const a = document.querySelector('.start');
a.addEventListener('click', start);
history.pushState({ page: 1 }, "Title 1", "?page=1");

// Обрабатываем событие popstate для восстановления состояния предыдущей страницы
window.addEventListener('popstate', function(event) {
    if (event.state) {
        // Восстановление состояния предыдущей страницы
        console.log("Возвращение на предыдущую страницу");
    }
});


// добавить сохранение кнопки 

window.addEventListener('resize', function() {
  // Получаем элементы, которые нужно зафиксировать
  var fixedElements = document.querySelectorAll('.fixed-element');

  // Проходим по каждому элементу и устанавливаем им позицию fixed
  for (var i = 0; i < fixedElements.length; i++) {
    var element = fixedElements[i];
    element.style.position = 'fixed'; // Зафиксируем позицию элемента
  }
});
