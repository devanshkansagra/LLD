import type { Printable } from "./Printable.ts";
import type { Scannable } from "./Scannable.ts";

class PrintingMachine implements Printable {
    public print() {
        console.log("Printing");
    }
}

const p = new PrintingMachine();
p.print();

class ModernPrinter implements Printable, Scannable {
    public scan(): void {
        console.log("Scanning the Document");
    }

    public print(): void {
        console.log("Printing the Document");
    }
}

const mp = new ModernPrinter();

mp.scan();
mp.print();