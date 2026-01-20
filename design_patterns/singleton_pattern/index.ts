class AppInstance {
  private connectionString: string;
  private static instance: AppInstance | undefined;
  private constructor() {
    this.connectionString = "mongodb://localhost:27017/Users";
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new AppInstance();
    }
    return this.instance;
  }

  public getConnectionString(): string {
    return this.connectionString;
  }
}

const a1 = AppInstance.getInstance() as AppInstance;
console.log(a1?.getConnectionString());

const a2 = AppInstance.getInstance() as AppInstance;
console.log(a2?.getConnectionString());

console.log(a1 === a2);
