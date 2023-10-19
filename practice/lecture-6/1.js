const elements = document.getElementsByTagName('li');

for (let el of elements) {
    el.style.cursor = "pointer";
    el.onclick = () => {
        if (el.style.textDecoration === 'line-through') {
            el.style.color = "black"
            el.style.textDecoration = "none"
        } else {
            el.style.color = "gray"
            el.style.textDecoration = "line-through"
        }
    };
};