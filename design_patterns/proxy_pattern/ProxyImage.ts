import type { Image } from "./Image.js";
import { RealImage } from "./RealImage.js";
export class ProxyImage implements Image {

    private realImage: RealImage | undefined ;
    private fileName: string;
    constructor(fileName: string) {
        this.fileName = fileName;
    }
    display(): void {
        if(!this.realImage) {
            this.realImage = new RealImage(this.fileName);
        }
        this.realImage.display();
    }
    
}