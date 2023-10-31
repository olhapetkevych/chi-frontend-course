function fetchImage() {
    fetch('https://http.dog/' + document.getElementById("code").value + '.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('image').src = data.image.jpg;
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
        });
}