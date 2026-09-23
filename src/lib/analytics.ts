import { track } from '@plausible-analytics/tracker';
import * as Fathom from 'fathom-client';

export function trackEvent(name: string, props?: Record<string, string>) {
  Fathom.trackEvent(name);

  try {
    track(name, props ? { props } : {});
  } catch {
    // Plausible is not initialized during SSR or before the client effect runs
  }
}
