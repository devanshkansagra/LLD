class Room {
  constructor(public type: string) {}
}

class House {
  private rooms: Room[] = [];

  constructor() {
    this.rooms.push(new Room("Bedroom"));
    this.rooms.push(new Room("Kitchen"));
  }
}
