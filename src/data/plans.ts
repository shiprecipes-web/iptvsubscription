// Pricing carried over from goldengateiptv.com — same prices, same WhatsApp ordering.
// Orders open WhatsApp to this number with a prefilled message.
export const WHATSAPP_PHONE = '212707711512';
export const ORDER_LABEL = 'iptvsubscription.top';

export type DurationId = '1d' | '1m' | '3m' | '6m' | '1y' | '2y';

export interface Duration {
  id: DurationId;
  label: string; // used in WhatsApp text, e.g. "1 Year"
  short: string; // shown under the price, e.g. "per year"
  months: number; // 0 for the day pass
  save?: number; // % saved vs paying monthly (for the badge)
}

export const durations: Duration[] = [
  { id: '1d', label: '1 Day', short: 'one day', months: 0 },
  { id: '1m', label: '1 Month', short: 'per month', months: 1 },
  { id: '3m', label: '3 Months', short: 'for 3 months', months: 3 },
  { id: '6m', label: '6 Months', short: 'for 6 months', months: 6 },
  { id: '1y', label: '1 Year', short: 'per year', months: 12, save: 68 },
  { id: '2y', label: '2 Years', short: 'for 2 years', months: 24, save: 75 },
];

export interface Tier {
  id: number;
  name: string;
  devices: number;
  blurb: string;
  popular?: boolean;
  prices: Record<DurationId, number>;
}

export const tiers: Tier[] = [
  {
    id: 1,
    name: '1 Connection',
    devices: 1,
    blurb: 'Perfect for a single TV or device.',
    prices: { '1d': 7, '1m': 20, '3m': 37, '6m': 49, '1y': 77, '2y': 119 },
  },
  {
    id: 2,
    name: '2 Connections',
    devices: 2,
    popular: true,
    blurb: 'Stream on two devices at the same time.',
    prices: { '1d': 9, '1m': 29, '3m': 64, '6m': 84, '1y': 109, '2y': 199 },
  },
  {
    id: 3,
    name: '3 Connections',
    devices: 3,
    blurb: 'Best for the whole household.',
    prices: { '1d': 12, '1m': 39, '3m': 79, '6m': 117, '1y': 189, '2y': 297 },
  },
];

// What every plan includes (from the source site).
export const planIncludes = [
  '34,000+ live channels',
  '130,000+ movies & series',
  '4K · FHD · HD quality',
  'Anti-freeze technology',
  'Works on any device',
  'Full EPG & free updates',
  '24/7 customer support',
  '7-day money-back guarantee',
];

// Build the exact WhatsApp order link for a given tier + duration.
export function orderLink(tier: Tier, duration: Duration): string {
  const label = tier.devices === 1 ? '1 Device' : `${tier.devices} Devices`;
  const price = tier.prices[duration.id];
  const text = `${ORDER_LABEL} - ${duration.label} / ${label} - ${price} USD`;
  const params = new URLSearchParams({
    phone: WHATSAPP_PHONE,
    text,
    type: 'phone_number',
    app_absent: '0',
  });
  return `https://api.whatsapp.com/send/?${params.toString()}`;
}
