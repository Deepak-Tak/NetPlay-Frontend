const c = new Promise((resolve) => setTimeout(() => resolve("Hello"), 2000));
c.then((data) => console.log(data));
console.log(c);
setTimeout(() => console.log(c), 5000);
