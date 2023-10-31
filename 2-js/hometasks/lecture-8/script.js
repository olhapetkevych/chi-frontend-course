function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    const objectData = {
        name: name,
        year: year,
        price: price,
    };

    fetch('https://api.restful-api.dev/objects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectData),
    }).then(response => {
        if (!response.ok) {
            console.log('Сталася мережева помилка: ' + response.statusText);
        }
        return response.json();
    }).then(data => {
        const createdAt = data.createdAt;
        document.getElementById('creation-date').innerText = createdAt;
    }).catch(error => {
        console.error(error);
    });  
}