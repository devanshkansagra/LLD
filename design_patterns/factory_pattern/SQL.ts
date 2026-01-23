import type { Database } from "./DB.js";
import { createConnection, type Connection } from 'mysql'
export class SQL implements Database {

    private connection: any
    connect(url: string): void {
        this.connection = createConnection(url) as Connection;
        this.connection.connect()
    }
}