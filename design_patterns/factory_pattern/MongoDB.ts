import type { Database } from "./DB.js";
import mongoose from "mongoose";
export class MongoDB implements Database {
    connect(url: string): void {
        mongoose.connect(url).then(() => {
            console.log("Database connected successfully");
        }).catch((error) => {
            console.log(error);
        })
    }
}