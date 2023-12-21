//Enums і Union
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function getActivity(day: Days): string {
    switch (day) {
        case Days.Monday:
        case Days.Tuesday:
        case Days.Wednesday:
        case Days.Thursday:
        case Days.Friday:
            return "Робота";
        case Days.Saturday:
        case Days.Sunday:
            return "Відпочинок";
        default:
            throw new Error("Помилка!");
    }
}

//Дженерики
class Queue<T> {
    private queue: T[] = [];

    public enqueue(item: T): void {
        this.queue.push(item);
    }

    public dequeue(): T | null {
        return this.queue.shift() ?? null;
    }
}

const queueNumber: Queue<number> = new Queue<number>();
queueNumber.enqueue(1);
queueNumber.enqueue(2);
queueNumber.enqueue(3);
console.log(queueNumber);
console.log(queueNumber.dequeue());
console.log(queueNumber);

const queueString: Queue<string> = new Queue<string>();
queueString.enqueue("A");
queueString.enqueue("B");
queueString.enqueue("C");
console.log(queueString);
console.log(queueString.dequeue());
console.log(queueString);

//Type Aliases та Literal Types
type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber): StringOrNumber {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    if (typeof input1 === "string" && typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }

    throw new Error("Invalid input");
}

//Розширені можливості інтерфейсів
interface IPerson {
    name: string;
    age: number;
}

interface IWorker extends IPerson {
    position: string;
    salary: number;
}

//Duplicate identifier 'Worker'.ts(2300)
//lib.dom.d.ts(25963, 11): 'Worker' was also declared here.
//lib.dom.d.ts(25987, 13): and here.
class Worker2 implements IWorker {
    position: string;
    private _salary: number;
    name: string;
    age: number;

    constructor(name: string, age: number, position: string, salary: number) {
        this.name = name;
        this.age = age;
        this.position = position;
        this._salary = salary;
    }

    public get salary() : number {
        return this._salary;
    }
    
    public set salary(v : number) {
        this._salary = v;
    }
    
}