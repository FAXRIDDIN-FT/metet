{ //masala 1
    function createUser(name, age) {
        return { name, age, boolean: false };
    }
    console.log(createUser("Ali", 25));
}
{//masala 2
    function raqam(...numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
    console.log(raqam(3, 4, 6, 2));
}
{ // masala 3
    function malumot(user) {
        const { name, age } = user;
        return `Name: ${name}, Age: ${age}`;
    }
    console.log(malumot({ name: "Faxriddin", age: 20 }));
}
{ // masala 4
    function objectToArray(obj) {
        return Object.entries(obj);
    }
    console.log(objectToArray({ name: "laziz", age: 15 }));
}
{ // masala 5
    function getKeysAndValue(obj) {
        return Object.keys(obj);
    }
    console.log(getKeysAndValue({ a: 1, b: 2, c: 3 }));
}
{ // masala 6
    function sumPositiveValues  (obj) {
        return Object.values(obj)
            .filter(value => value > 0)
            .reduce((sum, num) => sum + num, 0);
    }
    console.log(sumPositiveValues({ a: -5, b: 10, c: 15 }));
}