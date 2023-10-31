let tasks = [];//const!!!
tasks.push('Купити хліб', 'Зробити завданння', 'Пройти 10 км');
console.log(tasks.length);
let last = tasks.pop();
console.log(last);
tasks.unshift('Прочитати книгу');

localStorage.setItem("tasks", JSON.stringify(tasks));
let tasks2 = JSON.parse(localStorage.getItem("tasks"));
tasks2[0] = 'Прочитати 2 книги';
localStorage.setItem("tasks", JSON.stringify(tasks2));
localStorage.removeItem("tasks");