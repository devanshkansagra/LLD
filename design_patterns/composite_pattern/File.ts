import type { FileSystemComponent } from "./FileSystemComponent.js";

export class File implements FileSystemComponent {
    
    private fileName: string;
    constructor(fileName: string) {
        this.fileName = fileName;
    }

    showDetails(): void {
        console.log("File: ", this.fileName);
    }
}