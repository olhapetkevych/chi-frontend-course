let lessons;

window.addEventListener("load", (event) => {
    lessons = document.getElementById("lessons");
});

function addLesson(params) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    const cell = document.createElement("td");
    let button = document.createElement('button');
    
    cell.appendChild(button);
    row.appendChild(cell);
    lessons.appendChild(row);
}