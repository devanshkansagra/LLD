interface Button {
    click(): void;
}

interface ScrollBar {
    scroll(): void;
}

interface UIFactory {
    createButton(): Button
    createScrollBar(): ScrollBar;
}

class LinuxButton implements Button {
    public click(): void {
        console.log("Clicking the linux button");
    }
}

class MacButton implements Button {
    click(): void {
        console.log("Clicking the Mac button");
    }
}

class LinuxScrollBar implements ScrollBar {
    scroll(): void {
        console.log("Scrolling the linux scrollbar")
    }
}

class MacScrollBar implements ScrollBar {
    scroll(): void {
        console.log("Scrolling the mac scrollbar");
    }
}

class Linux implements UIFactory {
    createButton(): Button {
        return new LinuxButton();
    }
    createScrollBar(): ScrollBar {
        return new LinuxScrollBar();
    }
    
}

class Mac implements UIFactory {
    createButton(): Button {
        return new MacButton();
    }
    createScrollBar(): ScrollBar {
        return new MacScrollBar();
    }
    
}

class Application {
    private factory: UIFactory;
    constructor(factory: UIFactory) {
        this.factory = factory;
    }

    public renderUI() {
        this.factory.createButton().click();
        this.factory.createScrollBar().scroll();
    }
}

const linux = new Application(new Linux())
linux.renderUI();

console.log("\n");
const mac = new Application(new Mac());
mac.renderUI();