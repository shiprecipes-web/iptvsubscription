export interface Player {
  id: string;
  name: string;
  tagline: string;
  site: string;
  portalUrl: string;
  portalLabel: string;
  platforms: string[];
  note?: string;
  steps: { title: string; text: string }[];
  channel?: string;
  videos?: { label: string; url: string }[];
}

export const players: Player[] = [
  {
    id: 'ibo',
    name: 'IBO Player Pro',
    tagline: 'The player we recommend for most devices — clean interface, fast, and works everywhere.',
    site: 'https://iboproapp.com/',
    portalUrl: 'https://iboproapp.com/manage-playlists/list/',
    portalLabel: 'Open the IBO playlist portal',
    platforms: [
      'Android TV',
      'Firestick / Fire TV',
      'Samsung TV',
      'LG TV',
      'Roku',
      'Android phone',
      'Windows',
    ],
    note: 'Good news: the IBO Player Pro app activation is included with your subscription — there is no extra app fee for you to pay. If the app ever asks you to activate, just message us and we will handle it.',
    steps: [
      {
        title: 'Install IBO Player Pro',
        text: 'Search “IBO Player Pro” in your device store — Google Play, Apple App Store, Samsung, LG, Amazon Appstore (Firestick) or Roku — or download it from iboproapp.com.',
      },
      {
        title: 'Open the app & note your details',
        text: 'On the home screen the app shows your Device ID (MAC Address) and Device Key. Keep this screen open or write both down.',
      },
      {
        title: 'Open the playlist portal',
        text: 'On your phone or computer go to the IBO playlist portal and sign in using the MAC Address and Device Key from the app.',
      },
      {
        title: 'Add your playlist',
        text: 'Click “Add Playlist”, give it any name, then paste the M3U URL we sent you after your order — or choose Xtream Codes and enter the username, password and host.',
      },
      {
        title: 'Reload and enjoy',
        text: 'Go back to the app and press Reload (or reopen it). Your channels, movies and series load automatically.',
      },
    ],
    channel: 'https://www.youtube.com/@IboPlayerPro',
    videos: [
      { label: 'Firestick / Fire TV', url: 'https://www.youtube.com/watch?v=PNijvKldT2Q' },
      { label: 'Android TV / Box', url: 'https://www.youtube.com/watch?v=jTfRhdQjMlw' },
      { label: 'Samsung TV', url: 'https://www.youtube.com/watch?v=qabWxgrSLsw' },
      { label: 'LG Smart TV', url: 'https://www.youtube.com/watch?v=B33ZA8uD86I' },
    ],
  },
  {
    id: 'hot',
    name: 'HotPlayer',
    tagline: 'A great lightweight alternative — supports up to 3 playlists and a “Lock MAC” option.',
    site: 'https://hotplayer.app/',
    portalUrl: 'https://hotplayer.app/activation',
    portalLabel: 'Open the HotPlayer portal',
    platforms: [
      'Samsung TV',
      'LG TV',
      'Android TV',
      'Firestick / Fire TV',
      'VIDAA TV',
      'Roku',
      'Windows',
    ],
    note: 'Good news: the HotPlayer app activation is included with your subscription — there is no extra app fee for you to pay. If the app ever asks you to activate, just message us and we will handle it.',
    steps: [
      {
        title: 'Install HotPlayer',
        text: 'Get HotPlayer from your device store — Samsung Tizen, LG Store, Google Play, Amazon (Firestick), Roku or the App Store — or from hotplayer.app.',
      },
      {
        title: 'Open the app & note your details',
        text: 'Open HotPlayer and note the MAC Address and Device Key shown on the main screen.',
      },
      {
        title: 'Activate on the portal',
        text: 'Open the HotPlayer portal on your phone/PC. Activation is included with your subscription — if the app asks you to activate, just message us and we will take care of it.',
      },
      {
        title: 'Add your playlist',
        text: 'Enter your MAC Address and Device Key, then paste the M3U or Xtream URL from your order confirmation.',
      },
      {
        title: 'Lock & restart',
        text: 'In Settings, turn on “Lock MAC” so your playlist can’t be reset, then restart the app to start watching.',
      },
    ],
  },
];
