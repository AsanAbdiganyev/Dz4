// №1
const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay('green');
});

decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay('red');
    }
});

function updateDisplay(color) {
    countDisplay.textContent = count;
    countDisplay.style.color = color;
}






// №2
// const tracker = document.getElementById('tracker');
// const coordinatesDisplay = document.getElementById('coordinates');
//
// tracker.addEventListener('mousemove', (event) => {
//     const rect = tracker.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     coordinatesDisplay.textContent = `Координаты: (x: ${x}, y: ${y})`;
// });
//
// tracker.addEventListener('mouseleave', () => {
//     coordinatesDisplay.textContent = 'Координаты: (x: 0, y: 0)';
// });








// №3
// const redLight = document.getElementById('red');
// const yellowLight = document.getElementById('yellow');
// const greenLight = document.getElementById('green');
// const message = document.getElementById('message');
//
// function resetLights() {
//     redLight.style.backgroundColor = 'gray';
//     yellowLight.style.backgroundColor = 'gray';
//     greenLight.style.backgroundColor = 'gray';
// }
// function changeLight(color) {
//     resetLights();
//     switch (color.toLowerCase()) {
//         case 'красный':
//             redLight.style.backgroundColor = 'red';
//             message.textContent = 'STOP';
//             break;
//         case 'желтый':
//             yellowLight.style.backgroundColor = 'yellow';
//             message.textContent = 'WAIT';
//             break;
//         case 'зеленый':
//             greenLight.style.backgroundColor = 'green';
//             message.textContent = 'GO';
//             break;
//         default:
//             message.textContent = 'Некорректный цвет!';
//     }
// }
// const userColor = prompt('Введите цвет светофора (Красный, Желтый, Зеленый):');
// changeLight(userColor);
