import type { Machine } from "./Machine.ts";

class PrintingMachine implements Machine {
    print(): void {
        console.log("Printing");
    }

    scan(): void {
        console.log("Scanning");
    }

    // May not be necessary for this class
    copy(): void {
        console.log("Copying");
    }
}