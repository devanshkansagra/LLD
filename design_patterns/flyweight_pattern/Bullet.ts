import type { BulletType } from "./BulletType.js";
import { BulletTypeFactory } from "./BulletTypeFactory.js";

export class Bullet {

    private pos: number;
    private bulletType: BulletType;
    private velocity: number;
    constructor(pos: number, color: string, velocity: number) {
        this.pos = pos;
        this.bulletType = BulletTypeFactory.getType(color);
        this.velocity = velocity;
    }

    public display() {
        console.log(this);
    }
}