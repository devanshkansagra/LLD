import { ProxyImage } from "./ProxyImage.js";
import { RealImage } from "./RealImage.js";

// Image will be loaded on object creation
const r = new RealImage("car.jpg");
const r2 = new RealImage("bike.jpg");
console.log("\n");
r.display();
r2.display();

const p = new ProxyImage("car.jpg");
const p2 = new ProxyImage("bike.jpg")

// Image will be loaded on display -> Lazy Loading
p.display();
p.display() // Here image will displayed from cache
p2.display();
