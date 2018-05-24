class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age:number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female");

const person= {
    name: "s0wnd",
    age: 36,
    gender: "male"
}
const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

// console.log(sayHi("s0wnd", 26, "male"));
// console.log(sayHi(person));
console.log(sayHi(lynn));


export {};