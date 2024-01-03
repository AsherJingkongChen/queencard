import { describe, expect, test } from 'bun:test';
import { iAmAQueenCard } from '@/queencard';

describe('Queen Card', () => {
  test('should be a queen card', () => {
    expect(iAmAQueenCard).toMatch(/queen ?card/i);
  });
});
