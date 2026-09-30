// Comprehensive, GEO/SEO-friendly FAQ.
// Each answer is written to be self-contained (answers the question in the first
// sentence) so it works as a featured snippet and is easy for AI answer engines to quote.

export interface Faq {
  q: string;
  a: string;
}

export interface FaqCategory {
  title: string;
  icon: string;
  items: Faq[];
}

export const faqCategories: FaqCategory[] = [
  {
    title: 'Getting started',
    icon: '🚀',
    items: [
      {
        q: 'What is IPTV and how does it work?',
        a: 'IPTV (Internet Protocol Television) is a way of streaming live TV channels, movies, and series over your internet connection instead of through a satellite dish or cable box. You install a player app on your device, load the playlist you receive after subscribing, and the app streams the content directly to your screen in HD or 4K.',
      },
      {
        q: 'What do I get with an iptvsubscription.top subscription?',
        a: 'An iptvsubscription.top subscription gives you access to 34,000+ live channels, 130,000+ movies and series on demand, a full TV guide (EPG), and support for 4K, FHD, and HD quality. You can watch on Smart TVs, Firestick, Android, iOS, and more, with anti-freeze technology for smooth playback.',
      },
      {
        q: 'How do I order an IPTV subscription?',
        a: 'To order, choose your plan on our pricing page and click "Order on WhatsApp." This opens a WhatsApp chat with your selected plan and price already filled in. We confirm your payment, then send your playlist login so you can start watching — usually within minutes.',
      },
      {
        q: 'How fast is activation after I pay?',
        a: 'Activation is almost instant. As soon as your payment is confirmed on WhatsApp, we send your M3U or Xtream login details, and your subscription is ready to use immediately — most customers are watching within a few minutes of ordering.',
      },
      {
        q: 'Do you offer a free trial?',
        a: 'We focus on paid plans backed by a 7-day money-back guarantee rather than a free trial, so you can subscribe with confidence. If you would like to test the service first, message us on WhatsApp and we will let you know the current trial options.',
      },
    ],
  },
  {
    title: 'Devices & apps',
    icon: '📺',
    items: [
      {
        q: 'What devices can I watch IPTV on?',
        a: 'You can watch on almost any modern device: Amazon Firestick and Fire TV, Android TV boxes, Samsung and LG Smart TVs, Android phones and tablets, iPhone and iPad, Windows and Mac computers, and MAG boxes. All you need is the device, a compatible player app, and a stable internet connection.',
      },
      {
        q: 'Which IPTV player app should I use?',
        a: 'We recommend IBO Player Pro or HotPlayer — both are reliable, easy to set up, and available on most devices. IBO Player Pro is our top pick for most TVs and Firestick, while HotPlayer is a great lightweight alternative that supports up to three playlists. Full setup steps for both are on our Setup Guide page.',
      },
      {
        q: 'How do I install IPTV on a Firestick?',
        a: 'To install IPTV on a Firestick, search for "IBO Player Pro" or "HotPlayer" in the Amazon Appstore and install it, open the app to see your Device MAC Address and Key, then register those on the player\'s website and paste in the playlist link we send you. The app then loads your channels automatically. A step-by-step video is on our Setup Guide.',
      },
      {
        q: 'How do I set up IPTV on a Samsung or LG Smart TV?',
        a: 'On a Samsung or LG Smart TV, download IBO Player Pro or HotPlayer from your TV\'s app store, open it to view your MAC Address and Device Key, then add your playlist on the player\'s web portal using those details. Reload the app and your channels appear. Our Setup Guide includes device-specific video tutorials.',
      },
      {
        q: 'What is a MAC address and device key?',
        a: 'A MAC address and device key are unique IDs your IPTV player shows when you first open it. They identify your specific device on the player\'s website, so when you add your playlist online it links automatically to your TV or box — meaning you never have to type long URLs with a remote.',
      },
      {
        q: 'Can I watch on more than one device at the same time?',
        a: 'Yes. Each connection allows one device to stream at a time, and we offer plans for 1, 2, or 3 simultaneous connections. If everyone in your household wants to watch different channels at once, choose the 2 or 3 connection plan.',
      },
    ],
  },
  {
    title: 'Channels & content',
    icon: '🎬',
    items: [
      {
        q: 'How many channels and movies are included?',
        a: 'Every plan includes the same full library: over 34,000 live TV channels, more than 130,000 movies and series on demand, and a complete electronic program guide (EPG). Plans differ only by how many devices can stream at the same time, not by content.',
      },
      {
        q: 'Do you have live sports and PPV events?',
        a: 'Yes, our channel list includes major live sports and pay-per-view events — football, UFC, boxing, Formula 1, NBA, cricket, and more — from networks around the world, in HD and 4K where available. Sports channels are grouped together so they are easy to find.',
      },
      {
        q: 'Which countries and languages are covered?',
        a: 'Our IPTV service covers channels from the US, UK, Canada, Europe, the MENA region, Asia, Africa, and Latin America, in many languages. Whether you want local news, international sports, or channels from back home, they are included in the same subscription.',
      },
      {
        q: 'Do you include movies and TV series on demand?',
        a: 'Yes. Alongside live channels, you get a video-on-demand library of 130,000+ movies and full TV series, from new releases to classics, that you can start and pause any time. New titles are added regularly at no extra cost.',
      },
      {
        q: 'Is there a TV guide (EPG)?',
        a: 'Yes, a full electronic program guide (EPG) is included so you can see what is playing now and next on each channel. Your player app downloads the guide automatically; if it looks empty at first, give it a few minutes to load or refresh the EPG in the app settings.',
      },
      {
        q: 'What video quality can I expect?',
        a: 'Streams are available in 4K/UHD, FHD, HD, and SD, depending on the channel and your internet speed. Our servers use anti-freeze technology to keep playback smooth, and the app automatically delivers the best quality your connection can handle.',
      },
    ],
  },
  {
    title: 'Payment, plans & refunds',
    icon: '💳',
    items: [
      {
        q: 'How much does an IPTV subscription cost?',
        a: 'Pricing starts at $7 for a 1-day pass and $20 per month for a single connection, with the best value on the 1-year plan at $77. Two and three connection plans are also available for households, and longer plans save you up to 75% compared to paying monthly. See our pricing page for the full breakdown.',
      },
      {
        q: 'How do I pay for my subscription?',
        a: 'Ordering and payment are handled through WhatsApp for speed and security. Click "Order on WhatsApp" on any plan, and we will confirm your payment and send your login details. Message us if you have a preferred payment method and we will do our best to accommodate it.',
      },
      {
        q: 'Can I get a refund if it does not work?',
        a: 'Yes, every plan is backed by a 7-day money-back guarantee. If you run into a technical issue we cannot resolve, contact us within 7 days of your purchase and we will issue a refund. This lets you try the service risk-free.',
      },
      {
        q: 'How do I renew my subscription?',
        a: 'To renew, message us on WhatsApp before your plan expires and we will extend your existing line — you keep the same setup with no need to reinstall anything. Renewing on a longer plan also unlocks bigger discounts.',
      },
      {
        q: 'Do you offer discounts for longer plans or multiple devices?',
        a: 'Yes. The longer the plan, the more you save — the 1-year and 2-year plans offer the lowest effective monthly price. Multi-connection plans for 2 or 3 devices are also priced below buying separate single subscriptions, making them ideal for families.',
      },
    ],
  },
  {
    title: 'Performance & troubleshooting',
    icon: '🛠️',
    items: [
      {
        q: 'Why is my IPTV buffering or freezing, and how do I fix it?',
        a: 'IPTV buffering is almost always caused by your internet connection rather than the service. To fix it, use a wired or 5GHz Wi-Fi connection, restart your router and the app, close background apps, and lower the buffer size in your player settings. If it continues, message us and we will check your line.',
      },
      {
        q: 'What internet speed do I need for IPTV?',
        a: 'We recommend at least 15 Mbps for HD streaming and 25 Mbps or more for 4K. A stable, consistent connection matters more than raw speed, so a wired Ethernet connection or a strong 5GHz Wi-Fi signal gives the smoothest playback.',
      },
      {
        q: 'Do I need a VPN to use IPTV?',
        a: 'A VPN is not required to use our service, but some customers use one for added privacy or if their internet provider throttles streaming traffic. If you do use a VPN, choose a fast, nearby server so it does not slow your connection.',
      },
      {
        q: 'My playlist will not load — what should I do?',
        a: 'If your playlist will not load, first re-check that the URL was entered exactly as we sent it, confirm your subscription is active, and make sure your device has internet. Then clear the app cache or reload the playlist. If it still fails, send us your device MAC address on WhatsApp and we will verify your line.',
      },
      {
        q: 'How do I contact support if I get stuck?',
        a: 'Support is available 24/7 through WhatsApp. Just send us a message describing the issue — including your device and MAC address if it is a setup problem — and we will walk you through the fix. Most questions are resolved within minutes.',
      },
    ],
  },
  {
    title: 'Legal & account',
    icon: 'ℹ️',
    items: [
      {
        q: 'Is IPTV legal to use?',
        a: 'Streaming legally available content over IPTV is legal in most countries, and using a media player app is perfectly legal. You are responsible for ensuring your use complies with the laws and licensing rules in your own region. Our service provides access to media streams and does not host or distribute copyrighted content.',
      },
      {
        q: 'Is my payment and information secure?',
        a: 'Yes. We keep the information we collect to a minimum — essentially your contact details and order — and we never sell your data. Ordering through WhatsApp keeps your conversation private, and payment details are handled securely.',
      },
      {
        q: 'Can I change my playlist or device later?',
        a: 'Yes. You can update your playlist or move to a new device at any time by editing it on the player\'s portal or messaging us for help. Because your subscription is tied to your line rather than one specific app, switching players or devices is straightforward.',
      },
    ],
  },
];

// Flat list for FAQ schema and simple rendering.
export const allFaqs: Faq[] = faqCategories.flatMap((c) => c.items);

// Curated subset shown on the home page.
export const homeFaqs: Faq[] = [
  faqCategories[0].items[0], // What is IPTV
  faqCategories[0].items[2], // How do I order
  faqCategories[0].items[3], // How fast is activation
  faqCategories[1].items[0], // What devices
  faqCategories[1].items[1], // Which app
  faqCategories[3].items[0], // How much does it cost
  faqCategories[3].items[2], // Refund
  faqCategories[4].items[0], // Buffering fix
];
