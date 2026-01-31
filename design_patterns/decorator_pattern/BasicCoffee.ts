import type { Coffee } from "./Coffee.js";

export class BasicCoffee implements Coffee {
    getDescription(): string {
        return "Basic Coffee";
    }
    getCost(): number {
        return 3.00;
    }

}