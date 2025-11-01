import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const html = readFileSync(join(process.cwd(), 'index.html'), 'utf8');

describe('bitcoin investment tracker page', () => {
  it('includes the main heading and summary placeholders', () => {
    expect(html).toContain('<h1>Bitcoin Investment Tracker</h1>');
    expect(html).toContain('data-current-price');
    expect(html).toContain('data-current-value');
    expect(html).toContain('data-change');
  });

  it('loads Chart.js and investment script', () => {
    expect(html).toMatch(/chart\.js@4/);
    expect(html).toContain('const INVESTMENT_USD = 247');
    expect(html).toContain('function computeInvestmentSeries');
  });
});
