import type { Image } from './Image.js';
export class RealImage implements Image {
    private fileName: string;
    constructor(fileName: string) {
        this.fileName = fileName;
        this.loadImage();
    };
    
    loadImage() {
        console.log(`Loading ${this.fileName}`);
    }
    display(): void {
        console.log(`Displaying ${this.fileName}`);
    }
}