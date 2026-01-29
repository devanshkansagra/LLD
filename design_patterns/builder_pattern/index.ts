class User {
    private id: number;
    private name: string;
    private phone: number;
    private email: string = "";
    private age: number = 0;
    constructor(id: number, name: string, phone: number) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
    public setEmail(email: string) {
        this.email = email;
    }

    public setAge(age: number) {
        this.age = age;
    }
}
class UserBuilder {
    private user: User;
    constructor(id: number, name: string, phone: number) {
        this.user = new User(id, name, phone);
    }

    setEmail(email: string) {
        this.user.setEmail(email);
        return this;
    }

    setAge(age: number) {
        this.user.setAge(age);
        return this;
    }

    buildUser() {
        return this.user;
    }
}

const u = new UserBuilder(1, "Devansh", 9999999999).setEmail("abc@xyz.com").buildUser();
console.log(u);