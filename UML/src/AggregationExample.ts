/**
 * Aggregation: It is a weak "has-a" relationship where one class can contain objects of another class.
 * However, the contained objects can exists independently of the container object
 */

class Professor {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name
    }
}

class Department {

    private professors: Array<Professor>

    constructor(professors: Array<Professor>) {
        this.professors = professors;
    }

    public getDepartmentProfessors() {
        this.professors.forEach((professor: Professor) => {
            console.log(professor.getName());
        })
    }
}

const p1 = new Professor("A");
const p2 = new Professor("B");

const profs = [p1, p2];

const dept = new Department(profs);

dept.getDepartmentProfessors();