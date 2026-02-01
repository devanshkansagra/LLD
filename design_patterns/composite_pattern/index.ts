import { Folder } from "./Folder.js";
import { File } from "./File.js";

const folder1 = new Folder("Folder1");
folder1.addComponent(new File("File1.txt"));
folder1.addComponent(new File("File2.txt"));

folder1.showDetails();
console.log("\n")

const subFolder1 = new Folder("SubFolder1");
folder1.addComponent(subFolder1);

subFolder1.addComponent(new File("SubFile1.txt"))
subFolder1.addComponent(new File("SubFile2.txt"))

folder1.showDetails();