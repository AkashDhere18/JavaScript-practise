let pizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isAvailable = false;
        if (isAvailable) {
            resolve("Pizza delivered!");
        } else {
            reject("Pizza shop closed.");
        }
    }, 2000);
});
pizzaPromise
    .then((message) => {
        console.log("Yay!", message);
    })
    .catch((err) => {
        console.log("Oops!", err);
    });