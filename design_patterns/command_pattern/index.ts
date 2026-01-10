interface Command {
    execute(): void;
}

class TextEditor {
    public makeBold() {
        console.log("Bold Text");
    }

    public makeItalic() {
        console.log("Make Italic");
    }

    public addUnderline() {
        console.log("Added Underline");
    }
}

class BoldCommand implements Command {
    private editor: TextEditor;
    constructor(editor: TextEditor) {
        this.editor = editor;
    }

    public execute(): void {
        this.editor.makeBold()
    }
}

class ItalicCommand implements Command {
    private editor: TextEditor;
    constructor(editor: TextEditor) {
        this.editor = editor;
    }

    public execute(): void {
        this.editor.makeItalic();
    }
}
class UnderLineCommand implements Command {
    private editor: TextEditor;
    constructor(editor: TextEditor) {
        this.editor = editor;
    }

    public execute(): void {
        this.editor.addUnderline();
    }
}

class Button {

    private command: Command;
    constructor() {
        this.command = null as any;
    }
    public setCommand(command: Command) {
        this.command = command;
    }

    public click() {
        this.command.execute();
    }
}

const button = new Button();
const editor = new TextEditor();
button.setCommand(new BoldCommand(editor));
button.click();

button.setCommand(new ItalicCommand(editor));
button.click();

const underlineButton = new Button();
underlineButton.setCommand(new UnderLineCommand(editor));
underlineButton.click();