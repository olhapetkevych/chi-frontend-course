function addGrade(element) {
    let result = prompt("Введіть оцінку");
    if (result === null) {
        return;
    }
    let grades = element.closest("tr").querySelector(".grades");
    
    setTimeout(() => {
        if (grades.textContent !== "") {
            grades.textContent += ", "
        }
        grades.textContent += result;
    }, 1000);
}