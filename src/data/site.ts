export const site = {
  name: 'IPTV Subscription',
  domain: 'iptvsubscription.top',
  url: 'https://iptvsubscription.top',
  tagline: 'Buy IPTV Subscription Online',
  description:
    'Reliable IPTV subscriptions for Smart TV, Firestick, Android TV, and mobile. Fast activation, thousands of channels, and support included.',
  email: 'support@iptvsubscription.top',
  // Update this to your real ordering / checkout destination.
  orderUrl: '/#pricing',
  supportUrl: '/contact',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Plans', href: '/#pricing' },
  { label: 'Setup Guide', href: '/apps' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const features = [
  {
    icon: 'zap',
    title: 'Fast activation',
    text: 'Your subscription is set up quickly after ordering so you can start watching right away.',
  },
  {
    icon: 'tv',
    title: 'Works everywhere',
    text: 'Smart TV, Firestick, Android TV, iOS, Android, and MAG devices are all supported.',
  },
  {
    icon: 'life-buoy',
    title: 'Support included',
    text: 'Get help with setup, playlists, and renewals whenever you need it.',
  },
  {
    icon: 'film',
    title: 'Huge library',
    text: 'Tens of thousands of live channels plus a deep on-demand movie and series catalog.',
  },
  {
    icon: 'server',
    title: 'Stable servers',
    text: 'Optimized delivery for smooth playback in HD, FHD, and 4K where available.',
  },
  {
    icon: 'shield',
    title: 'Easy, secure ordering',
    text: 'Order in seconds over WhatsApp and pay with PayPal, card, Google Pay or Apple Pay.',
  },
];

export const steps = [
  {
    n: 1,
    title: 'Choose your plan',
    text: 'Pick how many devices you want to stream on at once (1, 2 or 3) and your billing period.',
  },
  {
    n: 2,
    title: 'Order on WhatsApp',
    text: 'Tap Order and your plan opens pre-filled in WhatsApp. Confirm and pay with PayPal, card, Google Pay or Apple Pay.',
  },
  {
    n: 3,
    title: 'Start watching',
    text: 'We send your login right away. Add it to IBO Player Pro or HotPlayer and start watching.',
  },
  {
    n: 4,
    title: 'Get support',
    text: 'Reach out any time for help with setup, renewals, or troubleshooting.',
  },
];

export const stats = [
  { value: 34000, suffix: '+', label: 'Live channels' },
  { value: 130000, suffix: '+', label: 'Movies & series' },
  { value: 70, suffix: '+', label: 'Countries covered' },
  { value: 4, suffix: 'K', label: 'Ultra HD quality' },
];

export const categories = [
  { icon: '⚽', title: 'Live Sports', text: 'Football, UFC, F1, NBA, cricket, and pay-per-view events.', img: '/images/cat-sports.jpg' },
  { icon: '🎬', title: 'Movies', text: 'A huge on-demand library from new releases to classics.', img: '/images/cat-movies.jpg' },
  { icon: '📺', title: 'TV Series', text: 'Full seasons of the shows you love, ready to binge.', img: '/images/cat-series.jpg' },
  { icon: '🌍', title: 'International', text: 'Channels from the US, UK, Europe, MENA, Asia, and more.', img: '/images/cat-international.jpg' },
  { icon: '📰', title: 'News', text: 'Major national and global news networks in real time.', img: '/images/cat-news.jpg' },
  { icon: '🧒', title: 'Kids', text: 'Family-friendly channels and cartoons for all ages.', img: '/images/cat-kids.jpg' },
];

export const trust = [
  { icon: '💸', text: 'Money-back guarantee' },
  { icon: '⚡', text: 'Instant activation' },
  { icon: '🛟', text: '24/7 support' },
  { icon: '🔒', text: 'Secure checkout' },
];

export const testimonials = [
  {
    name: 'James M.',
    role: 'Firestick user',
    rating: 5,
    text: 'Setup took five minutes and everything just works. Sports channels are crystal clear with no buffering.',
  },
  {
    name: 'Sofia R.',
    role: 'Smart TV user',
    rating: 5,
    text: 'The movie library is massive and support answered me within minutes when I needed help. Worth every penny.',
  },
  {
    name: 'Daniel K.',
    role: 'Android TV user',
    rating: 5,
    text: 'Started on a monthly plan, then went for the year. Stable, fast, and way cheaper than cable.',
  },
  {
    name: 'Aisha B.',
    role: 'Mobile user',
    rating: 5,
    text: 'Loads of international channels I could not find anywhere else. Activation was instant after payment.',
  },
];


export const announcement = {
  enabled: true,
  emoji: '🔥',
  text: 'Limited time — save up to 75% on yearly & 2-year plans',
  cta: 'View plans',
  href: '/#pricing',
};

// Honest, non-fabricated trust messaging (no invented review/customer counts).
export const socialProof = {
  qualityLabel: 'Loved by users',
  qualitySub: 'premium streaming service',
  supportLabel: '24/7',
  supportSub: 'customer support',
  guaranteeLabel: '7-day',
  guaranteeSub: 'money-back guarantee',
};

// Payment methods you accept (edit to match reality).
export const payments = ['PayPal', 'Credit Card', 'Debit Card', 'Google Pay', 'Apple Pay'];
