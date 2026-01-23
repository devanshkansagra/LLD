import { MongoDB } from "./MongoDB.js";
import { SQL } from "./SQL.js";

export class Connection {
    public static createConnection(type: string, url: string) {
        switch(type) {
            case "mongodb": 
                return new MongoDB().connect(url)

            case "sql":
                return new SQL().connect(url);

            default:
                return "invalid database type"
        }
    }
}

const c = Connection.createConnection("mongodb", "mongodb://localhost:27017")
