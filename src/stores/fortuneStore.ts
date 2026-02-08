import { DeskThing } from "@deskthing/client";
import { SocketData } from "@deskthing/types";
import { FortuneData } from "../data/fortunes";

type FortuneListener = (data: FortuneData | null) => void;

export class FortuneStore {
  private static instance: FortuneStore | null = null;
  private fortuneData: FortuneData | null = null;
  private listeners: FortuneListener[] = [];

  constructor() {
    DeskThing.on("fortune_data", (data: SocketData) => {
      this.fortuneData = data.payload as FortuneData;
      this.notifyListeners();
    });

    this.requestFortuneData();
  }

  static getInstance(): FortuneStore {
    if (!FortuneStore.instance) {
      FortuneStore.instance = new FortuneStore();
    }
    return FortuneStore.instance;
  }

  on(listener: FortuneListener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  getFortuneData(): FortuneData | null {
    if (!this.fortuneData) {
      this.requestFortuneData();
    }
    return this.fortuneData;
  }

  nextFortune(): void {
    DeskThing.send({
      type: "get",
      request: "next_fortune",
    });
  }

  private notifyListeners(): void {
    this.listeners.forEach((listener) => listener(this.fortuneData));
  }

  async requestFortuneData(): Promise<void> {
    DeskThing.send({
      type: "get",
      request: "fortune_data",
    });
  }
}

export default FortuneStore.getInstance();
