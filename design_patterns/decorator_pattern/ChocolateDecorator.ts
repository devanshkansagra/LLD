import type { Coffee } from "./Coffee.js";
import { CoffeeDecorator } from "./CoffeeDecorator.js";

export class ChocolateDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    getDescription(): string {
        return this.coffee.getDescription() + " Chocolate";
    }

    getCost(): number {
        return this.coffee.getCost() + 5;
    }
}