// Identify the relationship between these two classes
// Relation: Aggregation
class Library {
  constructor(books: Array<Book>) {}
}

class Book {
  constructor(public name: string, public author: string) {}
}

// Senario 2: Order - PaymentService
// Relation Association

class Order {
  private itemList: Array<[string, number]>;
  constructor() {
    this.itemList = [];
  }

  public addItem(itemName: string, price: number) {
    this.itemList.push([itemName, price]);
  }

  public getItems() {
    return this.itemList;
  }

  public getTotalAmount() {
    return this.itemList.reduce((sum, item) => sum + item[1], 0);
  }

  public pay(p: PaymentService) {
    p.makePayment(this.getTotalAmount());
  }
}

class PaymentService {
  constructor() {}

  public makePayment(amount: number) {
    console.log("Your total payment is: ", amount);
  }
}





