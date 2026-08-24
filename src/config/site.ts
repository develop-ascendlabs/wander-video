export const site = {
  name: 'Wander',
  tagline: 'Map videos from a route.',
  url: 'https://wander.video',
  supportEmail: 'hello@wander.video',
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=video.wander',
  /** Set when the App Store listing ships. */
  appStoreUrl: '' as string,
  social: {
    instagram: 'https://instagram.com/wander.video',
    tiktok: 'https://tiktok.com/@wander.video',
    youtube: 'https://youtube.com/@wander.video',
  },
} as const;

export const seo = {
  title: 'Wander: map videos from routes, GPX, and Google Maps',
  description:
    'Android app that turns a Google Maps link or GPX file into an animated map video. 18 styles. 1080p on Free, 4K on Pro. Instagram, TikTok, and YouTube aspect ratios.',
};

/** Matches the live app (Free vs Pro). */
export const product = {
  styleCount: 18,
  freeVehicles: 'car, plane, bicycle, train, and boat',
  proVehicles: 'campervan, bus, SUV, and motorcycle',
  freeProjects: 5,
  freeStops: 20,
  proMonthly: '£4.99',
  proYearly: '£24.99',
};
