// Evolution of Observer Pattern

interface Publisher {
  publish(temp: number): void;
}

interface Subscriber {
  update(temp: number): void;
}

// Handler
class PubSubService {
  private subs: Array<Subscriber>;

  constructor() {
    this.subs = [];
  }
  public attach(sub: Subscriber) {
    this.subs.push(sub);
  }

  public detach(sub: Subscriber) {
    this.subs = this.subs.filter((subscriber) => subscriber !== sub);
  }
  public notifySubscribers(temp: number) {
    this.subs.forEach((sub) => {
      sub.update(temp);
    });
  }
}

// Publisher
class WeatherService implements Publisher {
  private pubSub: PubSubService;
  constructor(pubsub: PubSubService) {
    this.pubSub = pubsub;
  }
  publish(temp: number): void {
    this.pubSub.notifySubscribers(temp);
  }
  public setTemperature(temp: number) {
    this.publish(temp);
  }
}

// Subscriber
class MobileDevice implements Subscriber {
  update(temp: number): void {
    console.log("Temperature got updated in mobile: ", temp);
  }
}

// Subscriber
class PC implements Subscriber {
  update(temp: number): void {
    console.log("Temperature got updated in pc: ", temp);
  }
}

const ps = new PubSubService();

const ws = new WeatherService(ps);

const ms = new MobileDevice();
const pc = new PC();

ps.attach(ms);
ps.attach(pc);
ws.setTemperature(30);

ps.detach(ms);
ws.setTemperature(35);
