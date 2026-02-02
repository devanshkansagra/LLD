import { BulletType } from "./BulletType.js";

export class BulletTypeFactory {
    private static types: Map<string, BulletType> = new Map();

    public static getType(color: string): BulletType {
        if(!this.types.has(color)) {
            this.types.set(color, new BulletType(color));
        }
        
        return this.types.get(color) as BulletType;
    }
}