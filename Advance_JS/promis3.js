function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Wisdom Sprouts", age: 23 };
            resolve(data);
        }, 2000);
    });
}
fetchData()
    .then(data => console.log("Data:", data))
    .catch(error => console.error("Error:", error));