type CacheEntry<T> = { value: T; expiresAt: number };

export class TtlCache<T> {
  private map = new Map<string, CacheEntry<T>>();
  constructor(private readonly maxEntries: number) {}

  get(key: string): T | null {
    const now = Date.now();
    const entry = this.map.get(key);
    if (!entry) return null;
    if (entry.expiresAt <= now) {
      this.map.delete(key);
      return null;
    }
    // Refresh recency (simple LRU-ish)
    this.map.delete(key);
    this.map.set(key, entry);
    return entry.value;
  }

  set(key: string, value: T, ttlMs: number) {
    const expiresAt = Date.now() + ttlMs;
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, { value, expiresAt });
    this.evictIfNeeded();
  }

  private evictIfNeeded() {
    while (this.map.size > this.maxEntries) {
      const oldestKey = this.map.keys().next().value as string | undefined;
      if (!oldestKey) break;
      this.map.delete(oldestKey);
    }
  }
}

