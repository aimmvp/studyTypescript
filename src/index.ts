interface Human {
    name:string;
    age: number;
    gender: string;
}
const person= {
    name: "s0wnd",
    age: 36,
    gender: "male"
}
const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

// console.log(sayHi("s0wnd", 26, "male"));
console.log(sayHi(person));


export {};