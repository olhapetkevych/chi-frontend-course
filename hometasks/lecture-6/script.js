//Початковий варіант - без кешування
const daysOfWeek = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
  "Неділя",
];

const prompts = ["день тижня", "тривалість", "назву"];

let lessons;
window.addEventListener("load", (event) => {
    lessons = document.getElementById("lessons");
});

function addLesson() {
    const row = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
        const cell = document.createElement("td");
        cell.addEventListener("click", (element, index = i) => {
            const input = prompt("Введіть " + prompts[index]);
            if (input === null) {
                return;
            }
            if (index === 0 && !daysOfWeek.includes(input)) {
                alert("Некоректний день тижня!");
                return;
            }
            if (index === 1 && isNaN(input) || Number.parseFloat(input) <= 0) {
                alert("Некоректна тривалість!");
                return;
            }
            element.target.innerText = input;
        });
        row.appendChild(cell);
    }
    const cell = document.createElement("td");
    const button = document.createElement("button");
    button.className = "button-delete";
    button.addEventListener("click", (element) => {
        element.target.parentNode.parentNode.remove();
    });
    button.appendChild(document.createTextNode("Видалити"));
    cell.appendChild(button);
    row.appendChild(cell);
    lessons.appendChild(row);
}