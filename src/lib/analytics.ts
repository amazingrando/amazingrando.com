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
  window.plausible?.(name, props ? { props } : undefined);
}
