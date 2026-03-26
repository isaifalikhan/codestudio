type Bucket = { count: number; resetAt: number };

export class SimpleRateLimiter {
  private buckets = new Map<string, Bucket>();
  constructor(
    private readonly limit: number,
    private readonly windowMs: number,
    private readonly maxBuckets: number,
  ) {}

  check(key: string): { ok: boolean; remaining: number; resetAt: number } {
    const now = Date.now();
    let bucket = this.buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      bucket = { count: 0, resetAt: now + this.windowMs };
      this.buckets.set(key, bucket);
      this.evictIfNeeded();
    }

    if (bucket.count >= this.limit) {
      return { ok: false, remaining: 0, resetAt: bucket.resetAt };
    }

    bucket.count += 1;
    return { ok: true, remaining: Math.max(0, this.limit - bucket.count), resetAt: bucket.resetAt };
  }

  private evictIfNeeded() {
    while (this.buckets.size > this.maxBuckets) {
      const oldestKey = this.buckets.keys().next().value as string | undefined;
      if (!oldestKey) break;
      this.buckets.delete(oldestKey);
    }
  }
}

