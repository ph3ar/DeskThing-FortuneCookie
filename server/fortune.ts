import { DeskThing } from '@deskthing/server';
import { Fortune, FortuneData, fortunes } from '../src/data/fortunes';

class FortuneService {
  private static instance: FortuneService | null = null;
  private usedIndices: Set<number> = new Set();
  private totalRevealed: number = 0;
  private currentFortune: Fortune | null = null;
  private currentIndex: number = -1;
  private updateTaskId: (() => void) | null = null;
  private refreshInterval: number = 30; // seconds between auto-refresh
  private categoryFilter: string = 'all';

  constructor() {
    this.pickNewFortune();
    this.scheduleAutoRefresh();
  }

  static getInstance(): FortuneService {
    if (!FortuneService.instance) {
      FortuneService.instance = new FortuneService();
    }
    return FortuneService.instance;
  }

  private getFilteredFortunes(): { fortune: Fortune; originalIndex: number }[] {
    return fortunes
      .map((f, i) => ({ fortune: f, originalIndex: i }))
      .filter((item) =>
        this.categoryFilter === 'all' || item.fortune.category === this.categoryFilter
      );
  }

  private pickNewFortune(): void {
    const filtered = this.getFilteredFortunes();
    if (filtered.length === 0) return;

    // Try to pick one we haven't used yet
    const unused = filtered.filter((item) => !this.usedIndices.has(item.originalIndex));
    const pool = unused.length > 0 ? unused : filtered;

    // If we've used all, reset the used set
    if (unused.length === 0) {
      this.usedIndices.clear();
    }

    const pick = pool[Math.floor(Math.random() * pool.length)];
    this.currentFortune = pick.fortune;
    this.currentIndex = pick.originalIndex;
    this.usedIndices.add(pick.originalIndex);
    this.totalRevealed++;
  }

  private scheduleAutoRefresh(): void {
    if (this.updateTaskId) {
      this.updateTaskId();
    }
    this.updateTaskId = DeskThing.addBackgroundTaskLoop(async () => {
      this.pickNewFortune();
      this.sendFortuneData();
      const interval = this.refreshInterval > 0 ? this.refreshInterval : 30;
      await this.sleep(interval * 1000);
    });
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public updateSettings(data: Record<string, { value: unknown }>): void {
    if (data?.refreshInterval) {
      const val = data.refreshInterval.value;
      if (typeof val === 'number') {
        this.refreshInterval = val;
        this.scheduleAutoRefresh();
      }
    }
    if (data?.category) {
      const val = data.category.value;
      if (typeof val === 'string') {
        this.categoryFilter = val;
      }
    }
  }

  public getFortuneData(): FortuneData | null {
    if (!this.currentFortune) return null;

    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return {
      fortune: this.currentFortune,
      index: this.currentIndex,
      totalFortunes: fortunes.length,
      totalRevealed: this.totalRevealed,
      lastUpdated: timeString,
    };
  }

  public nextFortune(): FortuneData | null {
    this.pickNewFortune();
    return this.getFortuneData();
  }

  public sendFortuneData(): void {
    const data = this.getFortuneData();
    if (data) {
      DeskThing.send({
        type: 'fortune_data',
        payload: data,
      });
    }
  }

  async stop(): Promise<void> {
    if (this.updateTaskId) {
      this.updateTaskId();
      this.updateTaskId = null;
    }
  }
}

export default FortuneService;
