import type { Readable } from "./Readable.ts";
import type { Writable } from "./Writable.ts";

class File implements Readable, Writable {
    public read() {
        console.log("Reading the file");
    }

    public write(): void {
        console.log("Writing the file")
    }
}

// If I want to implement Read Only File

class ReadOnlyFile implements Readable {
    public read(): void {
        console.log("Reading the file");
    }
}

const f = new File()
f.read();
f.write();

const readOnlyFile = new ReadOnlyFile();
readOnlyFile.read();
// readOnlyFile.write(); ❌