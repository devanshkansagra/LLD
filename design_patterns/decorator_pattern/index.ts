import { BasicCoffee } from "./BasicCoffee.js";
import { ChocolateDecorator } from "./ChocolateDecorator.js";
import { MilkDecorator } from "./MilkDecorator.js";

let c = new BasicCoffee();
c = new MilkDecorator(c);
c.getCost();
console.log(c.getDescription());
console.log(c.getCost());

c = new ChocolateDecorator(c);
console.log(c.getDescription());
console.log(c.getCost());