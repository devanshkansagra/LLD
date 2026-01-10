class TextEditor {

    public makeBold(text: string) {
        console.log("Bold Text");
    }

    public makeItalic(text: string) {
        console.log("Make Italic");
    }

    public addUnderline(text: string) {
        console.log("Added Underline");
    }
}

class BoldButton {
    private editor: TextEditor;
    constructor(editor: TextEditor) {
        this.editor = editor
    }

    click(content: string) {
        this.editor.makeBold(content);
    }
}
class ItalicButton {
    private editor: TextEditor;
    constructor(editor: TextEditor) {
        this.editor = editor
    }

    click(content: string) {
        this.editor.makeItalic(content);
    }
}