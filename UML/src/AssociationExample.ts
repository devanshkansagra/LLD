/*
    Association: It represents the relationship between two or more classes. In this case each object
    in one class is associated with one or more objects of another class
*/
class Teacher {
    private name: string;
    private subject: string;

    constructor(name: string, subject: string) {
        this.name = name;
        this.subject = subject;
    }

    public getDetails() {
        return `
        Name: ${this.name}\n
        Subject: ${this.subject}
        `
    }

    public teach(s: Student) {
        console.log(`I am teaching: ${s.name}`)
    }
}

class Student {
    public name: string;
    private roll: Number;

    constructor(name: string, roll: Number) {
        this.name = name;
        this.roll = roll;
    } 
}

const teacher = new Teacher("ABC", "Computer");
const student = new Student("Devansh", 123);

teacher.teach(student);
