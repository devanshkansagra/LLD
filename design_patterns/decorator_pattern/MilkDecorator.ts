import type { Coffee } from "./Coffee.js";
import { CoffeeDecorator } from "./CoffeeDecorator.js";

export class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    getDescription(): string {
        return this.coffee.getDescription() + " Milk";
    }

    getCost(): number {
        return this.coffee.getCost() + 8.5;
    }
}