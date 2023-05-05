// Поле ввода.
const input = document.getElementById("inputtext");
// Текст.
const text = document.getElementById("typetext");

// // Основной блок.
// const mainBlock = document.getElementById("inputtextblock");

// // Новая созданная кнопка.
// const button = document.createElement("button");
// button.innerText = "Активировать";
// mainBlock.appendChild(button);

// Текст игры.
let gameText;
// Номер вводимого символа.
let index = 0;

// Текст игры со специально допущенными ошибками.
let wrongText;

let rusAlphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

// Функция генерации случайного числа в диапазоне от a до b.
function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function randomBoolean() {
    return Math.random() >= 0.96;
  }

// Функция, которая уберает защиту из текста.
function fixText(text, lang) {
    if (lang == "ru") {
        keymap = ["AaBEeKkMHOoPpTXxyCc", "АаВЕеКкМНОоРрТХхуСс"];
    } else {
        keymap = ["АаВЕеКкМНОоРрТХхуСс", "AaBEeKkMHOoPpTXxyCc"];
    }

    for (var i = 0; i < text.length; i++) {
        let charPos = keymap[0].indexOf(text[i]);

        if (charPos >= 0) {
            text = text.replace(text.charAt(i), keymap[1].charAt(charPos));
        }
    }

    return text;
}

// // Добавление события на созданную кнопку.
// button.addEventListener("click", function () {
//     gameText = fixText(text.innerText, "ru");
//     wrongText = text.innerText;

//     console.log(gameText);
// })

// Добавление события по нажатию кнопки, когда поле ввода в фокусе.
input.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        gameText = fixText(text.innerText, "ru");
        wrongText = text.innerText;
    
        console.log(gameText);
    }

    if (event.keyCode === 8 && index > 0 && input.value.length > 0) {
        index -= 1;
    } else if (event.keyCode != 8 && index < gameText.length) {
        if (!randomBoolean()) {
            input.value += gameText[index];
        } else {
            input.value += rusAlphabet[random(0, rusAlphabet.length - 1)];
        }
        
        index += 1;
        event.preventDefault();
    }
});