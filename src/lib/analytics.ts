import * as Fathom from 'fathom-client';

type PlausibleFn = ((
  event: string,
  options?: { props?: Record<string, string> }
) => void) & { q?: unknown[] };

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

export function trackEvent(name: string, props?: Record<string, string>) {
  Fathom.trackEvent(name);
  window.plausible?.(name, props ? { props } : undefined);
}
