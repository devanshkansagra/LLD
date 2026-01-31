import type { Coffee } from "./Coffee.js";

export abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }
    getDescription(): string {
        return this.coffee.getDescription();
    }
    getCost(): number {
        return this.coffee.getCost();
    }

}