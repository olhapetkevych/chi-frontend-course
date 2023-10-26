function delayedGreeting(duration, message) {
    return new Promise((resolve, reject) => {
        if (duration > 10000) {
            reject(new Error('Затримка занадто довга!'));
        } else {
            setTimeout(() => {
            resolve(message)
            }, duration);
        }       
    });
}

function submitForm(event) {
    const duration = document.getElementById("duration").value;
    const message = document.getElementById("message").value;

    delayedGreeting(duration, message).then((message) => {
        alert(message);
    }).catch(error => {
        alert(error);
    });
}