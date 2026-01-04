import type { File } from "./File.ts";
export class ReadOnlyFile implements File {
  public read() {
    console.log("Reading the file");
  }

  public write() {
    throw new Error("Cannot write in read only file"); // violates LSP
  }
}
