export class TextEditor {
    public content: string;

    constructor() {
        this.content = ""
    }
    public write(content: string): void {
        this.content = content
    }

    public read() {
        return this.content;
    }
}