interface Observer {
  update(temp: number): void;
}

interface Subject {
  attach(obs: Observer): void;
  detach(obs: Observer): void;
  notify(): void;
}

// Publisher
class WeatherStation implements Subject {
  private observers: Array<Observer>;
  private temperature: number;
  constructor() {
    this.observers = [];
    this.temperature = 0;
  }

  public setTemperature(temp: number) {
    this.temperature = temp;
    this.notify();
  }
  public attach(obs: Observer): void {
    this.observers.push(obs);
  }
  detach(obs: Observer): void {
    this.observers = this.observers.filter((observer) => observer !== obs);
  }
  notify(): void {
    this.observers.forEach((observer) => {
      observer.update(this.temperature);
    });
  }
}

// Subscriber
class Mobile implements Observer {
  public update(temp: number): void {
    console.log("Temperature updated in mobile, new value: ", temp);
  }
}

// Subscriber
class PC implements Observer {
  public update(temp: number) {
    console.log("Temperature updated in pc, new value: ", temp);
  }
}

const ws = new WeatherStation();
const ms = new Mobile();
const pc = new PC();

ws.attach(ms);
ws.attach(pc);

ws.setTemperature(20);

ws.setTemperature(25);

ws.detach(pc);
ws.setTemperature(30);
