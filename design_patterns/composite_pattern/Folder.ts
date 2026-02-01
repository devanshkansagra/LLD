import type { FileSystemComponent } from "./FileSystemComponent.js";

export class Folder implements FileSystemComponent {
    
    private folderName: string;
    private components: Array<FileSystemComponent>;
    constructor(folderName: string) {
        this.folderName = folderName;
        this.components = [];
    }

    public addComponent(component: FileSystemComponent) {
        this.components.push(component);
    }

    showDetails(): void {
        console.log("Folder: ", this.folderName);
        this.components.forEach((component) => {
            component.showDetails();
        })
    }
}